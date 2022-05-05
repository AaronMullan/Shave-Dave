import React, { useState, useEffect } from "react";
import BeardDashboard from "./BeardDashboard";
import beardStyles from "../beards-array";
import "bootstrap/dist/css/bootstrap.min.css";

export default function DonateView() {
    const [ isLoading, updateLoading ] = useState(true);
    const [ loop, setLoop ] = useState();
    const [ amounts, getAmounts ] = useState({
        anchor:0,
        crab:0,
        clean:0,
        dubStache:0
    });

    function getBeardAmount (result, beardType) {
        return result.donations.filter(data => data.beardVote === beardType).map(data => data.amount).reduce((a, b) => a + b, 0);
    }

    useEffect(() => {
        setLoop(
            setInterval(() => {
                fetch("https://shave-dave-server.herokuapp.com/api/donations/")
                .then(res => res.json())
                .then(
                    (result) => { 
                        getAmounts({
                            clean: getBeardAmount(result, "Clean Shaven"),
                            anchor: getBeardAmount(result, "Anchor Beard"),
                            crab: getBeardAmount(result, "Crab Beard"),
                            dubStache: getBeardAmount(result, "Double Stache")
                        });
                        updateLoading(false);
                    }
                )
            }, 10000)
        );

        return function cleanup() {
            clearInterval(loop);
        }
    }, [amounts])

    const beardsWithAmounts = beardStyles.map(beard => {return { ...beard, amount:amounts[beard.jsName]}});

    const beardsSortedByAmount = beardsWithAmounts.sort(function(a, b){return b.amount - a.amount});

    return (
        <div id="donate-view">
            <h2>How should we Shave Dave?  Donate to vote</h2>
                <h3>Current leader: </h3>
            { isLoading ? 
                <div className="spinner-border spinner-border-lg text-info" role="status">
                    <span className="visually-hidden"></span>
                </div>
            :
                    <h3><b>{beardsSortedByAmount[0].name}</b>, up by <b>${beardsSortedByAmount[0].amount - beardsSortedByAmount[1].amount}</b></h3>
            }
            <BeardDashboard beardsSortedByAmount={beardsSortedByAmount} isLoading={isLoading} />
        </div>
    )
}
