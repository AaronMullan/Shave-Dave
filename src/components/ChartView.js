import React from "react";
import BeardChart from "./BeardChart";
import GoalMeter from "./GoalMeter";
import beardStyles from "../beards-array";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ChartView({isLoading, amounts}) {

    const beardsWithAmounts = beardStyles.map(beard => {return { ...beard, amount:amounts[beard.jsName]}});
    const beardsSortedByAmount = beardsWithAmounts.sort(function(a, b){return b.amount - a.amount});
    function getTotalAmount () {
        return amounts.anchor + amounts.crab + amounts.clean + amounts.dubStache;
    }

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
                    <h2>Total Raised toward Goal of $25,000:</h2>
                    <div
                        className="spinner-border spinner-border-lg text-info no-donate"
                        role="status"
                    >
                        <span className="visually-hidden"></span>
                    </div>
                </>
                :
                <>
                    <h2>Total Raised toward Goal of $25,000:</h2>
                    <GoalMeter totalAmount={getTotalAmount()}/>
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
