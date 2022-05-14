import React from "react";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import "bootstrap/dist/css/bootstrap.min.css";

function BeardRowNoDonate({ beard, isLoading }) {
  return (
    <div className="beard-row" id={`beard-row-${beard.jsName}`}>
      {isLoading ? (
        <>
          <div className="beard-icon-container">
            <img
              className="beard-icon"
              src='/assets/beard-clean-solid-plus.png'
              alt={`${beard.name} icon`}
            />
          </div>
          <div className="loading-beard">
            <div
                className="spinner-border spinner-border-lg text-info no-donate"
                role="status"
            >
                <span className="visually-hidden"></span>
            </div>
            <i>Loading Beard...</i>
          </div>
        </>
      ) : (
        <>
          <div className="beard-icon-container">
            <img
              className="beard-icon"
              src={beard.imgSrc}
              alt={`${beard.name} icon`}
            />
          </div>
          <div className="beard-label">
            <h4 className="beard-name no-donate">{beard.name}</h4>
            <i>{beard.desc}</i>
          </div>
        </>
      )}
    </div>
  );
}

export default function BeardDashboard({ beardsSortedByAmount, isLoading }) {
  const topAmount = beardsSortedByAmount[0].amount;

  return (
    <div className="beard-dashboard">
      <PayPalScriptProvider
        options={{
          "client-id":
            "AQRFQThzOnupUWq17womr1CAjO5JEJTJLdiOJUnUdPXs_sIve6RL5sLGadGPGL6d1C1P6xri3520koiW",
          components: "buttons",
          currency: "USD",
        }}
      >
        {beardsSortedByAmount.map((beard) => (
          <BeardRowNoDonate
            beard={beard}
            topAmount={topAmount}
            isLoading={isLoading}
            key={beard.jsName}
          />
        ))}
      </PayPalScriptProvider>
    </div>
  );
}
