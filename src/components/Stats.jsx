import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useSelector } from "react-redux";

function Stats({ name, number, percentage, onClick }) {
  const selectedCountry = useSelector((state) => state.selectedOptions.country);
  const selectedYear = useSelector((state) => state.selectedOptions.year);
  const selectedItem = useSelector(
    (state) => state.selectedOptions.clickedItem
  );

  const [isActivated, setIsActivated] = React.useState(false);

  function urlCheck() {
    if (selectedCountry !== "" && selectedYear !== "") {
      setIsActivated(true);
    } else {
      setIsActivated(false);
    }
  }

  React.useEffect(() => {
    urlCheck();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCountry, selectedYear]);
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
            value={isActivated ? percentage : 0}
            text={isActivated ? `${percentage}%` : "0%"}
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
        <div className="detailNumber">{isActivated ? number : 0}</div>
        <p>{name}</p>
      </div>
    </div>
  );
}

export default Stats;
