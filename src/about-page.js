import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

function AboutPage() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow} class="stylishbutton">
        How to Donate
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>About Shave Dave 2020</Modal.Title>
        </Modal.Header>
        <Modal.Body><p>Shave Dave was created in 2011 by Dave Spence and Paul Hartman to raise money for Tsunami Relief in Japan. We subsequently ran several successful fundraisers for The National MS Society until Dave retired from the bar business in 2015. The COVID-19 Virus is forcing the beard out of retirement. This year we will be raising money for the non-profit Baltimore Restaurant Relief Fund to provide assistance to employees and restaurants so adversely affected by the shut-down to flatten the curve. We will also be donating money to Hamilton-Lauraville Main Street. This year will be all virtual due to social restrictions and instead of Official Shave Dave Barber, Bill Puller, doing the shearing, Bill will walk Dave’s wife, Kerry, through the final precarious shave on a FB Live event Sunday, May 17 from 3:30-5:30pm.</p>

<p>This is the way it will go down:</p>

<p>• Eight Beards begin Round 1. <br/>
• Go to shavedave.org<br/>
• Decide your favorite Beard from the bracket match-ups for round 1, make note of the SEED Number.<br/>
• Click the Donate button you will be re-directed to the BRRF site. <br/>
• Follow the Donation process- IMPORTANT - in STEP 4, RECORD the SEED Number of the beard to which you wish to pledge. THIS IS HOW WE WILL CALCULATE THE WINNERS of EACH ROUND.<br/>
• Follow us on FB and Instagram to track the excitement<br/>
• Round 2 Begins at 12:01PM on Monday, May, 11. Four Beards move on and reset to zero. Round 2 pledging ends at NOON on Friday, May 15. The Final 2 Beards are now decided. * Follow the same donation instructions for each round.<br/>
• Pledge to push your Beard higher through the weekend until the Final Showdown SHAVE on Sunday, May 17.<br/>
• We will host a FB Live Variety Show accepting pledges up until 5:00PM SHARP then we will tally the final pledges and Kerry will Shave Dave LIVE. <br/>
• It’ll be a HOOT and all for a good cause.</p>

<p>Acknowledgements:
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