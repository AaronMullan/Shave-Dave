import React from "react";
import blueSparkBarbershop from "../pix/blue-spark-barbershop.png";
import casaFiglia from "../pix/casa-figlia.png";
import fastSigns from "../pix/fastsigns.png";
import franksBbq from "../pix/franks-bbq.png";
import keyBrewing from "../pix/key-brewing.png";
import planLogic from "../pix/planlogic.png";
import tortugaKombucha from "../pix/tortuga-kombucha.png";
import "bootstrap/dist/css/bootstrap.min.css";

export default function EventView() {
    return (
        <div id="sponsors-view">
            <h2>Sponsors</h2>
            <div id="sponsor-logos">
                <div className="col-12 col-sm-6 col-lg-4">
                    <a href="https://bluesparkbarbershop.com/" target="_blank" rel="noopener noreferrer" >
                        <img src={blueSparkBarbershop} alt="blue spark barbershop logo"/>
                    </a>
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                    <a href="https://casafiglia.com/" target="_blank" rel="noopener noreferrer" >
                        <img src={casaFiglia} alt="casa figlia logo" />
                    </a>
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                    <a href="https://www.fastsigns.com/downtown-baltimore-md/" target="_blank" rel="noopener noreferrer" >
                        <img src={fastSigns} alt="fast signs logo" />
                    </a>
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                    <a href="https://franksmdbbq.com/" target="_blank" rel="noopener noreferrer" >
                        <img src={franksBbq} alt="franks bbq logo" />
                    </a>
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                    <a href="https://keybrewing.com/" target="_blank" rel="noopener noreferrer" >
                        <img src={keyBrewing} alt="key brewing logo" />
                    </a>
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                    {/* <a href="" target="_blank" rel="noopener noreferrer" > */}
                        <img src={planLogic} alt="plan logic logo" />
                    {/* </a> */}
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                    <a href="https://www.tortugakombucha.com/" target="_blank" rel="noopener noreferrer" >
                        <img src={tortugaKombucha} alt="tortuga kombucha logo" />
                    </a>
                </div>
            </div>
        </div>
    )
}
