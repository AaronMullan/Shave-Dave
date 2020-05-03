import React from "react";

function FaceStyle(props){
  return (
    <a
          className="App-link"
          href={props.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={props.image} className="Face-style" alt="logo" />
        </a>
  )
}
export default FaceStyle;