import React from "react";
import FaceStyle from "./facestyle.js";

function Final(props) {
  if (!props.wildcard)
    return (
      <div className="Matchup" id={props.id}>
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
    );

  return (
    <div className="Final" id={props.id}>
      <div className="Wildcard">
      <FaceStyle href={props.wildcard.href} image={props.wildcard.image} dollars={props.wildcard.dollars}/>
      </div>
      <div className="Finalists">
      <FaceStyle href={props.hometeam.href} image={props.hometeam.image} dollars={props.hometeam.dollars}/>
      <FaceStyle href={props.awayteam.href} image={props.awayteam.image} dollars={props.awayteam.dollars}/>
      </div>
    </div>
  );
}
export default Final;
