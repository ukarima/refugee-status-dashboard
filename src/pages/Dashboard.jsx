import React from "react";

import SelectionBoard from "../components/SelectionBoard";
import Toggle from "../components/Toggle";
import Stats from "../components/Stats";
import Trendline from "../components/Trendline";

function Dashboard() {
  return (
    <div className="mainContainer">
      <div className="mainBoard">
        <Toggle />
        <div className="statMainContainer">
          <h1>Dashboard</h1>
          <div className="statOuterContainer">
            <div className="detailsContainer">
              <Stats mode="isClicked" />
              <Stats />
              <Stats />
              <Stats />
            </div>
            <div className="detailsContainer orange">
              <h3>Country's refugee data in year</h3>
            </div>
            <div className="detailsContainer shadow">
              <Trendline />
            </div>
          </div>
        </div>
      </div>

      <SelectionBoard />
    </div>
  );
}

export default Dashboard;
