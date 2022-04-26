import React from "react";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import MapRoundedIcon from "@mui/icons-material/MapRounded";

function Toggle() {
  return (
    <div className="toggleMainContainer">
      <div className="dashboardIcon">
        <GridViewRoundedIcon />
      </div>
      <div className="mapIcon">
        <MapRoundedIcon />
      </div>
    </div>
  );
}

export default Toggle;
