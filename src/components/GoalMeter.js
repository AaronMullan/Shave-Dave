import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function GoalMeter({ totalAmount }) {
    return (
        <div className="goal-meter-container">
            { 
            totalAmount > 12500 ?
            <>
                <div className="meter-bar"
                style={{ width: (100 * totalAmount) / 25000 + "%" }}
                >
                    <i id="amount-inside" className="meter-amount">${totalAmount}</i>
                </div>
            </>
            :
            <>
                <div className="meter-bar"
                style={{ width: (100 * totalAmount) / 25000 + "%" }}
                ></div>
                <i id="amount-outside" className="meter-amount">${totalAmount}</i>
            </>
            }
        </div>
    );
}
