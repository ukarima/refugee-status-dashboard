import React from "react";

function SelectionBoard() {
  return (
    <div className="selectionBoard">
      <div className="itemMainContainer">
        <img
          src={require("../assets/images/undraw_World_re_768g-removebg-preview_b.png")}
          alt="world"
        />
        <div className="itemOuterContainer">
          <div className="itemInnerContainer">a</div>
        </div>
      </div>
    </div>
  );
}

export default SelectionBoard;
