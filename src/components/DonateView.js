import React from "react";
// import BeardDashboard from "./BeardDashboard";
import GoalMeter from "./GoalMeter";
import {
    PayPalScriptProvider
  } from "@paypal/react-paypal-js";
import { ButtonWrapper } from "./PayPalButton";
// import beardStyles from "../beards-array";
import "bootstrap/dist/css/bootstrap.min.css";

export default function DonateView({isLoading, amounts}) {
    // const beardsWithAmounts = beardStyles.map(beard => {return { ...beard, amount:amounts[beard.jsName]}});
    // const beardsSortedByAmount = beardsWithAmounts.sort(function(a, b){return b.amount - a.amount});
    function getTotalAmount () {
        return amounts.anchor + amounts.crab + amounts.clean + amounts.dubStache + amounts.postEvent;
    }

    return (
        <div id="donate-view">
            <h2>Donations</h2>
            <h4 id="notice">We are still accepting donations for 2022, as Ukraine still needs our support!</h4>
            <div id="total">
                <h2>Total Raised toward Goal of $25,000: </h2>
                { 
                isLoading ? 
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
            <div className="donate-field">
                <PayPalScriptProvider
                    options={{
                    "client-id":
                        // "AQRFQThzOnupUWq17womr1CAjO5JEJTJLdiOJUnUdPXs_sIve6RL5sLGadGPGL6d1C1P6xri3520koiW", // danzhaas SB account
                        "AZI6hiDTy8KCl4usTyKrZd7Id9fTRy1xq_JLSbolEBMlRX98M8akex7Er5HZTHJy9A5qlcthld_p-RFV", // official SD prod acct
                    components: "buttons",
                    currency: "USD",
                    }}
                >
                    <div className="donate-button-container">
                        <h3>Enter an Amount to Donate</h3>
                        <ButtonWrapper
                            currency={"USD"}
                            beardName="post-event"
                        />
                    </div>
                </PayPalScriptProvider>
            </div>
        </div>
    )
}
