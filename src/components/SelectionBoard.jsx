import * as React from "react";

import Input from "./Input";

function SelectionBoard({ onClick, disabledStatus, errorStatus }) {
  return (
    <div className="selectionBoard">
      <div className="itemMainContainer">
        <img
          src={require("../assets/images/undraw_World_re_768g-removebg-preview_b.png")}
          alt="world"
        />
        <div className="itemOuterContainer">
          <div className="itemInnerContainer">
            <h3>Select Destination Country</h3>
            <Input mode="country" />
            <Input mode="year" />
            {errorStatus && <p>No data found. Try another country or year.</p>}
          </div>
          <button
            className="mainButton"
            onClick={onClick}
            disabled={disabledStatus}
          >
            Get Data
          </button>
        </div>
      </div>
    </div>
  );
}

export default SelectionBoard;
