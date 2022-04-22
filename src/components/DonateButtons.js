import React from "react";
import beardStyles from "../beards";
import "bootstrap/dist/css/bootstrap.min.css";

export default function DonateButtons() {

    function renderDonationButtons() {
        beardStyles.forEach((beard) =>
            PayPal.Donation.Button({
                env: 'sandbox',
                hosted_button_id: 'YOUR_SANDBOX_HOSTED_BUTTON_ID',
                // business: 'YOUR_EMAIL_OR_PAYERID',
                image: {
                    src: 'https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif',
                    title: 'PayPal - The safer, easier way to pay online!',
                    alt: 'Donate with PayPal button'
                },
                onComplete: function (params) {
                    console.log(`${params.amt} donated to beard style ${beard.name}`)
                    // add donation amount to database 
                },
            }).render(`#paypal-donate-button-container-${beard.name}`)
        );
    };
    renderDonationButtons();


    return (
        <div className="donate-buttons">
            <script src="https://www.paypalobjects.com/donate/sdk/donate-sdk.js" charset="UTF-8"></script>
            {beardStyles.map((beard) => `<div id=paypal-donate-button-container-${beard.name}></div>`)}
        </div>
    )
}
