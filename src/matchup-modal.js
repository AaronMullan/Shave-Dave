import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import FaceStyle from "./facestyle.js"

function MatchupModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Shave Dave 2020 {props.id}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="Matchup">
            <FaceStyle
              href={props.hometeam.href}
              image={props.hometeam.image}
              dollars={props.hometeam.dollars}
            />

            <FaceStyle
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
export default MatchupModal;
