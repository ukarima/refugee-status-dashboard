import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useSelector } from "react-redux";

function Stats({ name, number, percentage, onClick }) {
  const selectedItem = useSelector(
    (state) => state.selectedOptions.clickedItem
  );
  return (
    <div
      className={
        name !== selectedItem
          ? "donutOuterContainer notSelectedItem"
          : "donutOuterContainer"
      }
      onClick={onClick}
    >
      {name === selectedItem ? (
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
