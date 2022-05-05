import React, { useState, useEffect } from "react";
import BeardDashboard from "./BeardDashboard";
import "bootstrap/dist/css/bootstrap.min.css";

export default function DonateView() {
    const [ isLoading, updateLoading ] = useState(true);
    const [loop, setLoop] = useState();
    const [ amounts, getAmounts ] = useState({
        anchor:0,
        crab:0,
        clean:0,
        dubStache:0
    });
    const [ beardsWithAmounts, updateAmounts ] = useState([
        {
            name:'Anchor Beard',
            jsName:'anchor',
            imgSrc:'/assets/beard-anchor.jpg',
            amount:75
        },
        {
            name:"Crab Beard",
            jsName:'crab',
            imgSrc:'/assets/beard-crab.jpg',
            amount:50
        },
        {
            name:'Clean Shaven',
            jsName:'clean',
            imgSrc:'/assets/beard-clean.jpg',
            amount:150
        },
        {
            name:"Double Stache",
            jsName:'dubStache',
            imgSrc:'/assets/beard-dub-stache.jpg',
            amount:500
        }
    ])

    const beardsSortedByAmount = beardsWithAmounts.sort(function(a, b){return b.amount - a.amount});

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
                        console.log("dzh result", result);
                        getAmounts({
                            clean: getBeardAmount(result, "Clean Shaven"),
                            anchor: getBeardAmount(result, "Anchor Beard"),
                            crab: getBeardAmount(result, "Crab Beard"),
                            dubStache: getBeardAmount(result, "Double Stache")
                        })
                        console.log("dzh amounts", amounts);
                        updateLoading(false);
                    }
                )
            }, 10000)
        );

        return function cleanup() {
            clearInterval(loop);
        }
    }, [amounts])


    // const sortedBeards = [];
    // for (let i=0; i <= sortedBeards.length; i++) {
    //     const thisBeardsName = sortedStats[i].jsName;
    //     const thisBeardStyle = 
        // sortedBeards.push({
            
    //     })
    // }
    // console.log("sorted beards", sortedBeards);

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
