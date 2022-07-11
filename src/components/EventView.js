import React from "react";
import music from '../pix/performers/music.jpg'
import quintonRandall from '../pix/performers/quinton-randall.jpg'
import ptBratton from '../pix/performers/pt-bratton.jpg'
import christianMccartney from '../pix/performers/christian-mccartney.jpg'
import theOtherDan from '../pix/performers/the-other-dan-haas.jpg'
import joel from '../pix/performers/joel.jpg'
import aniya from "../pix/performers/aniya.jpg";
import casaFiglia from "../pix/casa-figlia.png";
import franksBbq from "../pix/franks-bbq.png";
import keyBrewing from "../pix/key-brewing.png";
import redCanoe from "../pix/red-canoe.jpg";
import tortugaKombucha from "../pix/tortuga-kombucha.png";
import lolaAndMimi from "../pix/lola-and-mimi.png";
import boordy from "../pix/boordy.png";
import "bootstrap/dist/css/bootstrap.min.css";

export default function EventView() {
    return (
        <div id="event-view">
          <h2>June 25 Event</h2>
          <p>Shave the date!  Shave Day 2022 is a Live Event w/ food, live music, fun, & fundraising, with a finale of Dave getting Shaved into this year's winning Beardo!</p>
          <p>You can watch it via livestreaming here and on your favorite social media platforms, but why not attend in person?  Here's who will be there:</p>
          <br></br>

          <h3>Performances</h3>
          <div className="performers">
            <div id="quinton-randall">
              <a href="https://www.facebook.com/profile.php?id=100063877920279" target="_blank" rel="noopener noreferrer" >
                <img className="performer-photo" src={quintonRandall} alt="Quinton Randall with guitar"></img>
                <h4>Quinton Randall</h4>
              </a>
            </div>
            <div id="tiptop-trio">
              {/* <a href="" > */}
                <img className="performer-photo" src={music} alt="Tiptop Trio"></img>
                <h4>Tiptop Trio</h4>
              {/* </a> */}
            </div>
            <div id="hipster">
              {/* <a href="" > */}
                <img className="performer-photo" src={music} alt="The Hipster Project"></img>
                <h4>The Hipster Project</h4>
              {/* </a> */}
            </div>
            <div id="bratton">
              <a href="https://www.ptbratton.com/" target="_blank" rel="noopener noreferrer" >
                <img className="performer-photo" src={ptBratton} alt="PT Bratton"></img>
                <h4>PT Bratton</h4>
              </a>
            </div>
            <div id="chrstian-mccartney">
              <a href="https://www.mistermccartney.com/" target="_blank" rel="noopener noreferrer" >
                <img className="performer-photo" src={christianMccartney} alt="Christian McCartney"></img>
                <h4>Christian McCartney</h4>
              </a>
            </div>
            <div id="noah">
              {/* <a href="" > */}
                <img className="performer-photo" src={music} alt="Noah Mitchell"></img>
                <h4>Noah Mitchel</h4>
              {/* </a> */}
            </div>
            <div id="joel">
              <a href="http://thenewmandolin.com/" target="_blank" rel="noopener noreferrer" >
                <img className="performer-photo" src={joel} alt="Joel Michael-Schwartz"></img>
                <h4>Joel Michael-Schwartz</h4>
              </a>
            </div>
            <div id="dan">
              <a href="https://danhaas.bandcamp.com/releases" target="_blank" rel="noopener noreferrer" >
                <img className="performer-photo" src={theOtherDan} alt="Dan Haas"></img>
                <h4>Dan Haas</h4>
              </a>
            </div>
            <div id="geoff">
              {/* <a href="https://danhaas.bandcamp.com/releases" target="_blank" rel="noopener noreferrer" > */}
                <img className="performer-photo" src={music} alt="Geoffrey Welchman"></img>
                <h4>Geoffrey Welchman</h4>
              {/* </a> */}
            </div>
            <div id="herbert">
              {/* <a href="" > */}
                <img className="performer-photo" src={music} alt="Herbert Frank"></img>
                <h4>Herbert Frank</h4>
              {/* </a> */}
            </div>
            <div id="aniya">
              <a href="https://instagram.com/_aniyataylor?igshid=YmMyMTA2M2Y=" target="_blank" rel="noopener noreferrer" >
                <img className="performer-photo" src={aniya} alt="Aniya Taylor"></img>
                <h4>Aniya Taylor</h4>
                <i>Baltimore Youth Poet Laureate 2021</i>
              </a>
            </div>
          </div>
          <br></br>

          <h3>Vendors</h3>
          <div className="vendor-logos">
            <div >
                <a href="https://casafiglia.com/" target="_blank" rel="noopener noreferrer" >
                    <img src={casaFiglia} alt="casa figlia logo" />
                </a>
            </div>
            <div >
                <a href="https://franksmdbbq.com/" target="_blank" rel="noopener noreferrer" >
                    <img src={franksBbq} alt="franks bbq logo" />
                </a>
            </div>
            <div >
                <a href="https://keybrewing.com/" target="_blank" rel="noopener noreferrer" >
                    <img src={keyBrewing} alt="key brewing logo" />
                </a>
            </div>
            <div >
                <a href="https://www.tortugakombucha.com/" target="_blank" rel="noopener noreferrer" >
                    <img src={tortugaKombucha} alt="tortuga kombucha logo" />
                </a>
            </div>
            <div >
                <a href="https://www.redcanoecafeandchildrensbookstore.com/" target="_blank" rel="noopener noreferrer" >
                    <img src={redCanoe} alt="tortuga kombucha logo" />
                </a>
            </div>
            <div >
                <a href="https://m.facebook.com/LolaAndMimi/" target="_blank" rel="noopener noreferrer" >
                    <img src={lolaAndMimi} alt="lola and mimi logo" />
                </a>
            </div>
            <div >
                <a href="https://www.boordy.com/" target="_blank" rel="noopener noreferrer" >
                    <img src={boordy} alt="boordy logo" />
                </a>
            </div>
          </div>
          <br></br>

          <h3>Details</h3>
          <iframe title="eventbrite" src="https://www.eventbrite.com/e/shaveday2022-for-ukrainian-crisis-relief-saturday-june-25-2-6pm-tickets-359537284697"></iframe>

          <h3>We'll see you there!</h3>
        </div>
    )
}
