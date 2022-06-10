import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function BeardRow({ beard, topAmount, isLoading }) {
  return (
    <div className="chart-row" id={`chart-row-${beard.jsName}`}>
      {true ? (
        <>
          <div className="loading-beardChart-icon-container">
            <img
              className="beardChart-icon"
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
            <div className="beardChart-icon-container">
              <img
                className="beardChart-icon"
                src={beard.imgSrc}
                alt={`${beard.name} icon`}
              />
            </div>
            <h4 className="beardChart-name">{beard.name}</h4>
          </div>
          <div
            className="chart-container"
          >
            <div className="bar-graph"
            style={{ width: (100 * beard.amount) / topAmount + "%" }}
            >
              <i className="graph-amount">${beard.amount}</i>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default function BeardChart({ beardsSortedByAmount, isLoading }) {
  const topAmount = beardsSortedByAmount[0].amount;

  return (
    <div className="beard-chart">
        {beardsSortedByAmount.map((beard) => (
          <BeardRow
            beard={beard}
            topAmount={topAmount}
            isLoading={isLoading}
            key={beard.jsName}
          />
        ))}
    </div>
  );
}
