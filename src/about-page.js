import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

function AboutPage() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow} className="stylishbutton">
        About
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>About Shave Dave 2022</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <p><b>PLEASE READ BELOW FOR THE DONATION PROCESS SO YOUR PLEDGE WILL BE COUNTED TOWARD THE BEARD YOU CHOOSE. THE BEARD WITH THE MOST CONTRIBUTIONS MOVES ON TO THE NEXT ROUND.<br />
            <br />
            ALL PROFITS WILL BE DONATED TO:<br />
            BALTIMORE SISTER CITY ODESSA <br />
            and<br />
            HAMILTON-LAURAVILLE MAIN STREET<br /></b>
          </p>

          <p>
            • As of 4/18/22, donations are not live yet, but they will be coming soon!<br />
            • Four Beards styles have been chosen. <br />
            • Decide your favorite Beard and use buttons on this site to donate to that style.<br />
            • Follow us here and on FB and Instagram to track the excitement<br />
            • Pledge to push your Beard higher until the Final Showdown SHAVE on Saturday, June 25.<br />
            • We will host a Live Variety Show accepting pledges up until 5:00PM SHARP then we will tally the final pledges and Dave will be shaved LIVE. It’ll be a HOOT and all for a good cause.
          </p>

          <p><b>Acknowledgements: </b>
            All Love to those who dedicated their time and expertise:
            Kerry Spence, editor, smarts and motivator bar-none.
            Dan Moyer, graphic artist, creative genius and all-around great guy.
            Bill Puller of Blue Spark Barbershop, The Official Barber of Shave Dave. Head sculptor extraordinaire and also great friend with good taste in music.
            Dave Seel of the Baltimore Restaurant Relief Fund and positive force to reckon with.
            Aaron Mullan, web designer and best bud.
            Kate Rowe, marketing genius and the sunshine in my day.
            Paul Hartman, idea man and generous soul.
            Amy Winter Jones, ShaveDave OG and Red Bull pusher-lady.
            The Cokers, Danny and Dana, Bandaloop’s OGs and keepers of the Bartenders flame.
            All of Bartenders EXTENDED FAMILY for their encouragement, love, and support. </p>
          <p><b>ABOUT: ShaveDave for Ukraine Relief</b><br /><br />
            Shave Dave was created in 2011 by Dave Spence and Paul Hartman to raise money for Tsunami Relief in Japan. We subsequently ran several successful fundraisers for The National MS Society until Dave retired from the bar business in 2015. The COVID-19 Virus is forced the beard out of retirement in 2020. This year we will be raising money for the non-profit Baltimore Sister City Odessa to provide assistance to citizens of Ukraine so adversely affected by the crisis there. We will also be donating money to Hamilton-Lauraville Main Street. This year will be in person at The 4500 Lot at Hamilton-Lauraville Main Street and livestreamed here and on other social media platforms. The shave will be held on Saturday, June 25, 2022.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default AboutPage;