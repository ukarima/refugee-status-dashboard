import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useSelector } from "react-redux";

function Stats({ name, number, mode, percentage, onClick }) {
  const selected = useSelector((state) => state.selectedOptions);

  return (
    <div
      className={
        name !== selected.clickedItem
          ? "donutOuterContainer notSelectedItem"
          : "donutOuterContainer"
      }
      onClick={onClick}
    >
      {name === selected.clickedItem ? (
        <div className="donutInnerContainer">
          <CircularProgressbar
            value={mode ? percentage : 0}
            text={mode ? `${percentage}%` : "0%"}
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
        <div className="detailNumber">{mode ? number : 0}</div>
        <p>{name}</p>
      </div>
    </div>
  );
}

export default Stats;
