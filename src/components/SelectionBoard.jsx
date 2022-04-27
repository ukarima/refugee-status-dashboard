import * as React from "react";

import Input from "./Input";

function SelectionBoard() {
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
        </div>
      </div>
    </div>
  );
}

export default SelectionBoard;
