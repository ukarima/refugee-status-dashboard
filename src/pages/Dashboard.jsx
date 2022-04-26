import React from "react";

import SelectionBoard from "../components/SelectionBoard";
import Toggle from "../components/Toggle";
import Stats from "../components/Stats";

function Dashboard() {
  return (
    <div className="mainContainer">
      <div className="mainBoard">
        <Toggle />
        <div className="statMainContainer">
          <h1>Dashboard</h1>
          <div className="statOuterContainer">
            <div className="detailsContainer">
              <Stats />
            </div>
          </div>
        </div>
      </div>

      <SelectionBoard />
    </div>
  );
}

export default Dashboard;
