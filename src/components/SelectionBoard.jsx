import * as React from "react";
import { useDispatch } from "react-redux";

import { reset } from "../redux/selectedOption";

import Input from "./Input";

function SelectionBoard() {
  const dispatch = useDispatch();

  function resetHandler() {
    dispatch(reset({ country: "", year: "", item: "Refugees" }));
  }
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
          <button className="mainButton" onClick={resetHandler}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default SelectionBoard;
