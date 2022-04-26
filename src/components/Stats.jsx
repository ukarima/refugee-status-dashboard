import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const percentage = 66;
function Stats() {
  return (
    <div className="donutMainContainer">
      <div className="donutOuterContainer">
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            textSize: "14px",
            textColor: "black",
            pathColor: "#f38653",
            trailColor: "#dbe8f0",
          })}
        />
      </div>
    </div>
  );
}

export default Stats;
