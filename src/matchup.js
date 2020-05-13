import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import FaceStyle from './facestyle.js';
import Button from "react-bootstrap/Button";

function Matchup(props){
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <>
    <div className="Matchup" id={props.id} onClick={handleShow}>
    <FaceStyle 
      // href={props.hometeam.href}
      image={props.hometeam.image}
      dollars={props.hometeam.dollars}
    />
 
    <FaceStyle 
      // href={props.awayteam.href}
      image={props.awayteam.image}
      dollars={props.awayteam.dollars}
    />
    </div>

    <Modal size="sm" show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Shave Dave 2020 {props.id}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <div className="MatchupModal">
      <h3>Click to Donate</h3>
        <FaceStyle class="shrinker"
          href={props.hometeam.href}
          image={props.hometeam.image}
          dollars={props.hometeam.dollars}
        />

        <FaceStyle className="shrinker"
          href={props.awayteam.href}
          image={props.awayteam.image}
          dollars={props.awayteam.dollars}
        />
      </div>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
</>
  )
}
export default Matchup;
