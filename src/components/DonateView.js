import React, { useState, useEffect } from "react";
import BeardDashboard from "./BeardDashboard";
import beardStyles from "../beards-array";
import "bootstrap/dist/css/bootstrap.min.css";

export default function DonateView() {
    const [ isLoading, updateLoading ] = useState(true);
    const [ loop, setLoop ] = useState();
    const [ amounts, getAmounts ] = useState({
        anchor:0,
        crab:0,
        clean:0,
        dubStache:0
    });

    function getBeardAmount (result, beardType) {
        return result.donations.filter(data => data.beardVote === beardType).map(data => data.amount).reduce((a, b) => a + b, 0);
    }

    useEffect(() => {
        setLoop(
            setInterval(() => {
                fetch("https://shave-dave-server.herokuapp.com/api/donations/")
                .then(res => res.json())
                .then(
                    (result) => { 
                        console.log(result);
                        getAmounts({
                            clean: getBeardAmount(result, "Clean Shaven"),
                            anchor: getBeardAmount(result, "Odesa Anchor"),
                            crab: getBeardAmount(result, "Bmore Crab"),
                            dubStache: getBeardAmount(result, "Double Stache")
                        });
                        updateLoading(false);
                    }
                )
            }, 10000)
        );

        return function cleanup() {
            clearInterval(loop);
        }
        // eslint-disable-next-line
    }, [amounts])

    const beardsWithAmounts = beardStyles.map(beard => {return { ...beard, amount:amounts[beard.jsName]}});
    const beardsSortedByAmount = beardsWithAmounts.sort(function(a, b){return b.amount - a.amount});

    return (
        <div id="donate-view">
            <h2>How should we Shave Dave?  Donate to vote.  Voting ends Saturday, June 25 at 5 PM!</h2>
            <ul>
                <li> Decide your favorite Beard and donate to that style.</li>
                <li>Follow us on FB and Instagram to track the leader.</li>
                <li>Tune in or show up to the Live Variety Show June 26 where Dave will be shaved LIVE.</li>
            </ul>
            <br />
            <h3 id="notice">Check out this year's face-do's, donate to your favorite, and then join our mailing list for updates.</h3>
            <BeardDashboard beardsSortedByAmount={beardsSortedByAmount} isLoading={isLoading} />
        </div>
    )
}
