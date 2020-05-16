import React, { useState } from "react";
import FaceStyle from "./facestyle.js";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function Final(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <div className="Final" id={props.id} onClick={handleShow}>
      <div className="Wildcard">
      <FaceStyle image={props.wildcard.image} dollars={props.wildcard.dollars}/>
      </div>
      <div className="Finalists">
      <FaceStyle image={props.hometeam.image} dollars={props.hometeam.dollars}/>
      <FaceStyle image={props.awayteam.image} dollars={props.awayteam.dollars}/>
      </div>
    </div>
    <Modal size="sm" show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Shave Dave 2020 {props.id}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <div className="MatchupModal">
      <h3>Click to Donate</h3>
      <FaceStyle class="shrinker"
          href={props.wildcard.href}
          image={props.wildcard.image}
          dollars={props.wildcard.dollars}
        />
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
  );
}
export default Final;
