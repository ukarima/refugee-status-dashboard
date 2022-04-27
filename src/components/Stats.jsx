import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const percentage = 66;
function Stats({ mode }) {
  return (
    <div
      className={
        mode !== "isClicked"
          ? "donutOuterContainer notSelectedItem"
          : "donutOuterContainer"
      }
    >
      {mode === "isClicked" ? (
        <div className="donutInnerContainer">
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
      ) : null}
      <div className="detailsText">
        <div className="detailNumber">167000</div>
        <div>Refugee</div>
      </div>
    </div>
  );
}

export default Stats;
