import * as React from "react";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import MapRoundedIcon from "@mui/icons-material/MapRounded";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { reset } from "../redux/selectedOption";

function Toggle({ id }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
          dispatch(reset({ country: "", year: "" }));
        }}
      >
        <MapRoundedIcon />
      </div>
    </div>
  );
}

export default Toggle;
