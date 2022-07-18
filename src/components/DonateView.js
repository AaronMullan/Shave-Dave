import React from "react";
import GoalMeter from "./GoalMeter";
import "bootstrap/dist/css/bootstrap.min.css";

export default function DonateView({isLoading, amounts}) {
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
                    <>
                        <GoalMeter totalAmount={getTotalAmount()}/>
                    </>
                }
            </div>
            <br />
            <div className="donate-field">
                <form action="https://www.paypal.com/donate" method="post" target="_top">
                    <input type="hidden" name="hosted_button_id" value="ZL3RASF47LK5S" />
                    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                    <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                </form>
            </div>
        </div>
    )
}
