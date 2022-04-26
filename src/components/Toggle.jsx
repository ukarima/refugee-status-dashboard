import React from "react";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import MapRoundedIcon from "@mui/icons-material/MapRounded";

function Toggle() {
  return (
    <div className="toggleMainContainer">
      <div className="toggleIcon">
        <GridViewRoundedIcon />
      </div>
      <div className="toggleIcon">
        <MapRoundedIcon />
      </div>
    </div>
  );
}

export default Toggle;
