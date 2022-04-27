import * as React from "react";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import MapRoundedIcon from "@mui/icons-material/MapRounded";
import { useNavigate } from "react-router-dom";

function Toggle({ id }) {
  const navigate = useNavigate();

  const [isClicked, setIsClicked] = React.useState(true);

  return (
    <div className="toggleMainContainer">
      <div
        className={
          id === "dashboard" ? "toggleIcon selectedToggle" : "toggleIcon"
        }
        onClick={() => {
          navigate("/");
        }}
      >
        <GridViewRoundedIcon />
      </div>
      <div
        className={id === "map" ? "toggleIcon selectedToggle" : "toggleIcon"}
        onClick={() => {
          navigate("/map");
        }}
      >
        <MapRoundedIcon />
      </div>
    </div>
  );
}

export default Toggle;
