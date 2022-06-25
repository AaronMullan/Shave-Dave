import React from "react";
import BeardDashboard from "./BeardDashboard";
import GoalMeter from "./GoalMeter";
import beardStyles from "../beards-array";
import "bootstrap/dist/css/bootstrap.min.css";

export default function DonateView({isLoading, amounts}) {
    const beardsWithAmounts = beardStyles.map(beard => {return { ...beard, amount:amounts[beard.jsName]}});
    const beardsSortedByAmount = beardsWithAmounts.sort(function(a, b){return b.amount - a.amount});
    function getTotalAmount () {
        return amounts.anchor + amounts.crab + amounts.clean + amounts.dubStache;
    }

    return (
        <div id="donate-view">
            <h2>How should we Shave Dave?  Donate to vote.  Voting ends Saturday, June 25 at 5 PM!</h2>
            <ul id="instructions">
                <li>Decide your favorite Beard and donate to that style.</li>
                <li>Follow us on FB and Instagram to track the leader.</li>
                <li>Tune in or show up to the Live Variety Show June 25 where Dave will be shaved LIVE.</li>
            </ul>
            <div id="total">
                <h2>Total Raised toward Goal of $25,000: </h2>
                { isLoading ? 
                <div
                    className="spinner-border spinner-border-lg text-info no-donate"
                    role="status"
                >
                    <span className="visually-hidden"></span>
                </div>
                :
                <GoalMeter totalAmount={getTotalAmount()}/>
                }
            </div>
            <br />
            <h3 id="notice">Check out this year's Beardos, donate to your favorite, and then join our mailing list for updates.</h3>
            <BeardDashboard beardsSortedByAmount={beardsSortedByAmount} isLoading={isLoading} />
        </div>
    )
}
