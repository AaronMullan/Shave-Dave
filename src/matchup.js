import React from "react";
import FaceStyle from './facestyle.js';

function Matchup(props){
  return (
    <div className="Matchup" id={props.id}>
    <FaceStyle 
      href={props.hometeam.href}
      image={props.hometeam.image}
    />
    <p>vs.</p>
    <FaceStyle 
      href={props.awayteam.href}
      image={props.awayteam.image}
    />
    </div>
  )
}
export default Matchup;
