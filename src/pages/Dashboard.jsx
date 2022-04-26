import React from "react";

import SelectionBoard from "../components/SelectionBoard";
import Toggle from "../components/Toggle";

function Dashboard() {
  return (
    <div className="mainContainer">
      <div className="mainBoard">
        <Toggle />
      </div>
      <SelectionBoard />
    </div>
  );
}

export default Dashboard;
