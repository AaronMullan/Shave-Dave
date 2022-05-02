import React, { useState, useEffect } from "react";
import BeardDashboard from "./BeardDashboard";
import "bootstrap/dist/css/bootstrap.min.css";

import beardStyles from "../beards";

export default function DonateView() {
    const [ isLoading, updateLoading ] = useState(true);
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
            name:"Double 'Stache",
            jsName:'dubStache',
            imgSrc:'/assets/beard-dub-stache.jpg',
            amount:500
        }
    ])

    const beardsSortedByAmount = beardsWithAmounts.sort(function(a, b){return b.amount - a.amount});

    // useEffect(() => {


        // get current total for clean via db call
        // beardStyles.clean.amount = 
        // get current total for anchor
        // beardStyles.anchor.amount = 
        // get current total for crab
        // beardStyles.crab.amount = 
        // get current total for dubStache
        // beardStyles.dubStache.amount = 
        // console.log("beardStyles", beardStyles)
        
        // setInterval(() => updateStats([
        //     beardStyles.clean,
        //     beardStyles.anchor,
        //     beardStyles.crab,
        //     beardStyles.dubStache
        // ]),
        // 3000);
    // }, [])


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
            <h3>Current leader: <b>{beardsSortedByAmount[0].name}</b>, up by <b>${beardsSortedByAmount[0].amount - beardsSortedByAmount[1].amount}</b></h3>
            <BeardDashboard beardsSortedByAmount={beardsSortedByAmount} />
        </div>
    )
}
