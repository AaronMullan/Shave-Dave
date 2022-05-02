import React, { useEffect } from "react";
// import beardStyles from "../beards";
// import { Helmet } from 'react-helmet';
// import paypal from '../pp-script';
import "bootstrap/dist/css/bootstrap.min.css";

function BeardRow({ beard, topAmount }) {

    return (
        <div className="beard-row" id={`beard-row-${beard.jsName}`} >
            <div className="beard-icon-container">
                <img className="beard-icon" src={beard.imgSrc} alt={`${beard.name} icon`}/>
            </div>
            <h4 className="beard-name">{beard.name}</h4>
            <div className="graph-container" style={{ width: 40*beard.amount/topAmount + 'vw'}}>
                <div className="bar-graph">
                    <i className="graph-amount">${beard.amount}</i>
                </div>
            </div>
            <button type="button" className="btn btn-success" id={`paypal-donate-button-container-${beard.jsName}`}>Donate</button>
            <i className="suggested-donation">Suggested donation: <br /> {beard.amount === topAmount ? "$50 would help defend first!" : `$${ topAmount - beard.amount + 1} to take first!`} </i>
        </div>
    )
}

export default function BeardDashboard({beardsSortedByAmount}) {
    const topAmount = beardsSortedByAmount[0].amount;
    // function renderDonationButtons() {

    // };

    useEffect(() => {
        // console.log(paypal)
        // renderDonationButtons();
        // console.log(beardStyles);
        // beardStyles.forEach((beard) =>
            // PayPal.Donation.Button({
            //     env: 'sandbox',
            //     hosted_button_id: 'ZL3RASF47LK5S',
            //     // business: 'YOUR_EMAIL_OR_PAYERID',
            //     image: {
            //         src: 'https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif',
            //         title: 'PayPal - The safer, easier way to pay online!',
            //         alt: 'Donate with PayPal button'
            //     },
            //     onComplete: function (params) {
            //         console.log(`${params.amt} donated to beard style ${beard.name}`)
            //         // add donation amount to database 
            //     },
            // }).render(`#paypal-donate-button-container-${beard.name}`)
        // );
    });

    return (
        <div className="beard-dashboard">
            {beardsSortedByAmount.map((beard) => <BeardRow beard={beard} topAmount={topAmount} key={beard.jsName} />)}
            {/* <Helmet>
                <script async src="https://www.paypalobjects.com/donate/sdk/donate-sdk.js" charset="UTF-8"></script>
            </Helmet> */}
        </div>
    )
}
