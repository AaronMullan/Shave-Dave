import React, { useState, useEffect } from "react";
import BeardChart from "./BeardChart";
import beardStyles from "../beards-array";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ChartView() {
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
    function getTotalAmount () {
        return amounts.anchor + amounts.crab + amounts.clean + amounts.dubStache;
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
                            clean: getBeardAmount(result, "Clean Shaven") + getBeardAmount(result, "Clean Shave"),
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
        <div id="chart-view">
            <h2>How should we Shave Dave?  Donate to vote.  Voting ends Saturday, June 25 at 5 PM!</h2>
            <ul id="instructions">
                <li>Decide your favorite Beard and donate to that style.</li>
                <li>Follow us on FB and Instagram to track the leader.</li>
                <li>Tune in or show up to the Live Variety Show June 25 where Dave will be shaved LIVE.</li>
            </ul>
            <div id="chart-total">
                { isLoading ? 
                <>
                    <h2>Total Raised: </h2>
                    <div
                        className="spinner-border spinner-border-lg text-info no-donate"
                        role="status"
                    >
                        <span className="visually-hidden"></span>
                    </div>
                </>
                :
                <>
                    <h2>Total Raised: <b>${getTotalAmount()}</b></h2>
                    <p> as of {new Date().toDateString()} at {new Date().toLocaleTimeString()}</p>
                </>
                }
            </div>
            <br />
            <BeardChart beardsSortedByAmount={beardsSortedByAmount} isLoading={isLoading} />
            <h3 id="notice">Donate to your favorite Beardo at ShaveDave.org !</h3>
        </div>
    )
}
