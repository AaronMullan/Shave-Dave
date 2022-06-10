import React from "react";
import { ButtonWrapper } from "./PayPalButton";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import "bootstrap/dist/css/bootstrap.min.css";

function BeardRow({ beard, topAmount, isLoading }) {
  const suggestedAmount =
    beard.amount === topAmount ? 50 : topAmount - beard.amount + 1;
  const suggestedMessage =
    beard.amount === topAmount
      ? "$50 would help defend first!"
      : `$${suggestedAmount} to take first!`;

  return (
    <div className="beard-row" id={`beard-row-${beard.jsName}`}>
      {isLoading ? (
        <>
          <div className="loading-beard-icon-container">
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
          <div className="icon-and-name">
            <div className="beard-icon-container">
              <img
                className="beard-icon"
                src={beard.imgSrc}
                alt={`${beard.name} icon`}
              />
            </div>
            <h4 className="beard-name">{beard.name}</h4>
          </div>
          <div className="kitchen-sink">
            <div
              className="graph-container"
            >
              <div className="bar-graph" style={{ width: (100 * beard.amount) / topAmount + "%" }}>
                <i className="graph-amount">${beard.amount}</i>
              </div>
            </div>
            <div className="donate-button-container">
              <i className="suggested-donation">
                Suggested donation: <br /> {suggestedMessage}{" "}
              </i>
              <ButtonWrapper
                currency={"USD"}
                beardName={beard.name}
                suggestedAmount={suggestedAmount}
              />
            </div>
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
            // "AQRFQThzOnupUWq17womr1CAjO5JEJTJLdiOJUnUdPXs_sIve6RL5sLGadGPGL6d1C1P6xri3520koiW", // danzhaas SB account
            "AZI6hiDTy8KCl4usTyKrZd7Id9fTRy1xq_JLSbolEBMlRX98M8akex7Er5HZTHJy9A5qlcthld_p-RFV", // official SD prod acct
          components: "buttons",
          currency: "USD",
        }}
      >
        {beardsSortedByAmount.map((beard) => (
          <BeardRow
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
