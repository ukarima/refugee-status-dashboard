import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Stats({ name, number, percentage, mode, onClick }) {
  return (
    <div
      className={
        mode !== true
          ? "donutOuterContainer notSelectedItem"
          : "donutOuterContainer"
      }
      onClick={onClick}
    >
      {mode === true ? (
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
        <div className="detailNumber">{number}</div>
        <p>{name}</p>
      </div>
    </div>
  );
}

export default Stats;
