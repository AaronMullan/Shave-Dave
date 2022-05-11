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
                        getAmounts({
                            clean: getBeardAmount(result, "Clean Shaven"),
                            anchor: getBeardAmount(result, "Anchor Beard"),
                            crab: getBeardAmount(result, "Crab Beard"),
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
            <h2>How should we Shave Dave?  Donate to vote</h2>
            <ul>
                <li> Decide your favorite Beard and use buttons below to donate to that style.</li>
            <li>Follow us here and on FB and Instagram to track the excitement</li>
            <li>Pledge to push your Beard higher until the Final Showdown SHAVE on Saturday, June 25.</li>
            <li>We will host a Live Variety Show accepting pledges up until 5:00PM SHARP then we will tally the final pledges and Dave will be shaved LIVE. It’ll be a HOOT and all for a good cause.</li>
                </ul>
            <br />
                <h3 id="notice">Donation is not open yet, but will be soon! <br /><br />In the meantime, check out this year's face-do's, then join our mailing list for updates.</h3>
                {/* <h3>Current leader: </h3>
            { isLoading ? 
                <div className="spinner-border spinner-border-lg text-info" role="status">
                    <span className="visually-hidden"></span>
                </div>
            :
                    <h3><b>{beardsSortedByAmount[0].name}</b>, up by <b>${beardsSortedByAmount[0].amount - beardsSortedByAmount[1].amount}</b></h3>
            } */}
            <BeardDashboard beardsSortedByAmount={beardsSortedByAmount} isLoading={isLoading} />
        </div>
    )
}
