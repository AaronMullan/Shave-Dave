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
            <h2>Sponsors, Partners, and Supporters</h2>
            <h3>Sponsors</h3>
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
                    <a href="https://www.planlogicpromo.com/" target="_blank" rel="noopener noreferrer" >
                        <img id="planlogic-logo" src={planLogic} alt="plan logic logo" />
                    </a>
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                    <a href="https://www.tortugakombucha.com/" target="_blank" rel="noopener noreferrer" >
                        <img src={tortugaKombucha} alt="tortuga kombucha logo" />
                    </a>
                </div>
            </div>

            <h3>Partners</h3>
            <ul>
                <li>
                    <a href="https://www.baltimoreodesa.org/" target="_blank" rel="noopener noreferrer" >
                        <p>Baltimore Odessa Sister City Committee</p>
                    </a>
                </li>
                <li>
                    <a href="https://www.bmoremainstreet.com/" target="_blank" rel="noopener noreferrer" >
                        <p>Hamilton Lauraville Main Street</p>
                    </a>
                </li>
                <li>
                    <a href="https://planlogicpromo.espwebsite.com/" target="_blank" rel="noopener noreferrer" >
                        <p>Plan Logic Promo</p>
                    </a>
                </li>
                <li>
                    <a href="https://www.fastsigns.com/white-marsh-joppa-md/" target="_blank" rel="noopener noreferrer" >
                        <p>FastSigns White Marsh/Joppa</p>
                    </a>
                </li>
                <li>
                    <a href="https://keybrewing.com/" target="_blank" rel="noopener noreferrer" >
                        <p>Key Brewing Co</p>
                    </a>
                </li>
            </ul>

            <h3>Supporters</h3>
            <ul>
                <li>
                    <a href="https://www.facebook.com/bartenders.pub/" target="_blank" rel="noopener noreferrer" >
                        <p>Bartenders</p>
                    </a>
                </li>
                <li>
                    <a href="https://www.facebook.com/amendment21liquors/" target="_blank" rel="noopener noreferrer" >
                        <p>Amendment 21 Liquors</p>
                    </a>
                </li>
                <li>
                    <a href="https://kenilworthws.com/" target="_blank" rel="noopener noreferrer" >
                        <p>Kenilworth Wine & Spirits</p>
                    </a>
                </li>
                <li>
                    <a href="https://www.thehollowbaltimore.com/" target="_blank" rel="noopener noreferrer" >
                        <p>Swallow at the Hollow</p>
                    </a>
                </li>
                <li>
                    <a href="https://29thstreettavern.com/" target="_blank" rel="noopener noreferrer" >
                        <p>29th Street Tavern</p>
                    </a>
                </li>
                <li>
                    <a href="https://snakehillbaltimore.com/" target="_blank" rel="noopener noreferrer" >
                        <p>Snake Hill</p>
                    </a>
                </li>
                <li>
                    <a href="https://johnnyrads.com/" target="_blank" rel="noopener noreferrer" >
                        <p>Johnny Rad's</p>
                    </a>
                </li>
                <li>
                    <a href="https://www.facebook.com/baltimore.taphouse" target="_blank" rel="noopener noreferrer" >
                        <p>Baltimore Taphouse</p>
                    </a>
                </li>
                <li>
                    <a href="http://wileygunters.com/" target="_blank" rel="noopener noreferrer" >
                        <p>Wiley Gunter's</p>
                    </a>
                </li>
                <li>
                    <a href="http://barflysbaltimore.com/" target="_blank" rel="noopener noreferrer" >
                        <p>Barfly's</p>
                    </a>
                </li>
                <li>
                    <a href="https://luresbarandgrille.com/" target="_blank" rel="noopener noreferrer" >
                        <p>Lures Bar & Gril</p>
                    </a>
                </li>
                <li>
                    <a href="https://www.dawsonsliquors.com/" target="_blank" rel="noopener noreferrer" >
                        <p>Dawson's Liquors</p>
                    </a>
                </li>
                <li>
                    <a href="https://www.thepointcrabhouse.com/" target="_blank" rel="noopener noreferrer" >
                        <p>The Point Crabhouse and Grill</p>
                    </a>
                </li>
                <li>
                    <a href="https://www.foundstudioshop.com/" target="_blank" rel="noopener noreferrer" >
                        <p>Found Studio Shop</p>
                    </a>
                </li>
                <li>
                    <a href="https://gettortuga.com/" target="_blank" rel="noopener noreferrer" >
                        <p>Tortuga</p>
                    </a>
                </li>
                <li>
                    <a href="https://zekescoffee.com/" target="_blank" rel="noopener noreferrer" >
                        <p>Zeke's Coffee</p>
                    </a>
                </li>
                <li>
                    <a href="https://volunteeringuntapped.org/" target="_blank" rel="noopener noreferrer" >
                        <p>Volunteering Untapped</p>
                    </a>
                </li>
                <li>
                    <a href="https://www.baltimoretoolbank.org/" target="_blank" rel="noopener noreferrer" >
                        <p>Baltimore Community ToolBank</p>
                    </a>
                </li>
                <li>
                    <a href="https://www.facebook.com/BaltimoreHoopLove/" target="_blank" rel="noopener noreferrer" >
                        <p>Baltimore Hoop Love</p>
                    </a>
                </li>
                <li>
                    <a href="https://www.wmar2news.com/" target="_blank" rel="noopener noreferrer" >
                        <p>WMAR Channel 2 News Baltimore</p>
                    </a>
                </li>
            </ul>
        </div>
    )
}
