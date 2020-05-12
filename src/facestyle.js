import React from "react";

function FaceStyle(props) {
  if(props.dollars)return (
    <div className="Face-style-container">
      <a
        className="App-link"
        href={props.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={props.image} className="Face-style" alt="logo" />
        <br />
      </a>
      <div className="dollars">
        <p>$ {props.dollars}</p>
      </div>
    </div>
  );
  else return (
    <div className="Face-style-container">
      <a
        className="App-link"
        href={props.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={props.image} className="Face-style" alt="logo" />
        <br />
      </a>
      <div className="dollars">
        <p></p>
      </div>
    </div>
  );
}
export default FaceStyle;
