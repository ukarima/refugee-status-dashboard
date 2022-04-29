import * as React from "react";
import { useSelector } from "react-redux";

import Input from "./Input";

function SelectionBoard({ onClick }) {
  const selected = useSelector((state) => state.selectedOptions);
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
          </div>
          <button className="mainButton" onClick={onClick}>
            Get Data
          </button>
        </div>
      </div>
    </div>
  );
}

export default SelectionBoard;
