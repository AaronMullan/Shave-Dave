import React, { useEffect, useState } from "react";
import {
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";

export const ButtonWrapper = ({ currency, beardName }) => {
  // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
  // This is the main reason to wrap the PayPalButtons in a new component
  const [{ options }, dispatch] = usePayPalScriptReducer();
  const [ donationAmount, changeAmount ] = useState(0);

  useEffect(() => {
    dispatch({
      type: "resetOptions",
      value: {
        ...options,
        currency: currency,
      },
    });
    // eslint-disable-next-line
  }, [currency, donationAmount]);

  return (
      <>
      <input type="number" id={`${beardName}-amount`} name={`${beardName}-amount`} onChange={() => changeAmount(document.getElementById(`${beardName}-amount`).value)}></input>
        <PayPalButtons
      fundingSource="paypal"
      style={{ layout: "vertical", label: "donate" }}
      disabled={false}
      createOrder={(data, actions) => {
        return actions.order
          .create({
            purchase_units: [
              {
                amount: {
                  value: donationAmount,
                  breakdown: {
                    item_total: {
                      currency_code: "USD",
                      value: donationAmount,
                    },
                  },
                },
                items: [
                  {
                    name: beardName,
                    quantity: "1",
                    unit_amount: {
                      currency_code: "USD",
                      value: donationAmount,
                    },
                    category: "DONATION",
                  },
                ],
              },
            ],
          })
          .then((orderId) => {
            return orderId;
          });
      }}
      onApprove={ async (data, actions) => {
        const { status, id, payer: { email_address: email, address: {postal_code:zipCode}}} = await actions.order.capture();
        const url = 'https://shave-dave-server.herokuapp.com/api/donations/';
        // const url = 'http://localhost:5000/api/donations' // for local testing

        const donation = {
          beardVote:beardName,
          amount:donationAmount,
          status,
          transactionId: id,
          email,
          zipCode
        };

        const options = {
            method: 'POST',
            body: JSON.stringify(donation),
            headers: {
                'Content-Type': 'application/json'
            }
        }

        fetch(url, options)
            .then(res => res.json())
            .then(res => console.log(res));
            }
        }
    />
    </>
  );
};
