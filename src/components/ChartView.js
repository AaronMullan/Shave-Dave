import React from "react";
import BeardChart from "./BeardChart";
import GoalMeter from "./GoalMeter";
import beardStyles from "../beards-array";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ChartView({isLoading, amounts}) {

    const beardsWithAmounts = beardStyles.map(beard => {return { ...beard, amount:amounts[beard.jsName]}});
    const beardsSortedByAmount = beardsWithAmounts.sort(function(a, b){return b.amount - a.amount});
    function getTotalAmount () {
        return amounts.anchor + amounts.crab + amounts.clean + amounts.dubStache + amounts.postEvent;
    }

    return (
        <div id="chart-view">
            <h2>2022 Beardo Vote Results</h2>
            <h4 id="notice">The people have spoken with their pledges.  We have Shaved Dave for 2022! And the winning Beardo is… The DoubleStache! If you already pledged, Thank You! If you haven’t, we are still accepting donations! Thank You & Stay Tuned!!!</h4>
            <br></br>
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
            <h2>Final Votes</h2>
            <BeardChart beardsSortedByAmount={beardsSortedByAmount} isLoading={isLoading} />
            <h3 id="notice">The voting is over, but Ukraine still needs our support!  Please continue to Donate :)</h3>
        </div>
    )
}
