import React from "react";
import FaceStyle from './facestyle.js';

function Matchup(props){
  return (
    <div className="Matchup">
    <FaceStyle 
      href={props.hometeam.href}
      image={props.hometeam.image}
    />
    <h3>vs.</h3>
    <FaceStyle 
      href={props.awayteam.href}
      image={props.awayteam.image}
    />
    </div>
  )
}
export default Matchup;
