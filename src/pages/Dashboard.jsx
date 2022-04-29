import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import SelectionBoard from "../components/SelectionBoard";
import Toggle from "../components/Toggle";
import Stats from "../components/Stats";
import Trendline from "../components/Trendline";
import { changeClickedItem, reset } from "../redux/selectedOption";

function Dashboard() {
  const selected = useSelector((state) => state.selectedOptions);

  const dispatch = useDispatch();

  const [dataset, setDataset] = React.useState("");
  const [isActivated, setIsActivated] = React.useState(false);
  const [isError, setIsError] = React.useState(selected.noData);

  function urlCheck() {
    if (selected.country !== "" && selected.year !== "") {
      setIsActivated(true);
    } else {
      setIsActivated(false);
    }
  }

  const handleClick = (value) => () => {
    dispatch(changeClickedItem({ item: value }));
  };

  const getData = async () => {
    const url = `https://api.unhcr.org/population/v1/population/?limit=&page=&yearFrom=&yearTo=&year=${selected.year}&coo=&coa=${selected.country}`;

    const response = await axios.get(url);
    const dataLength = response.data.maxPages;

    const errorCheck = () => {
      setDataset(response.data.items[0]);
      setIsError(false);
    };

    dataLength !== 0 ? errorCheck() : setIsError(true);
  };

  React.useEffect(() => {
    urlCheck();
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected.country, selected.year]);

  React.useEffect(() => {
    isError &&
      dispatch(
        reset({ country: "", year: "", item: "Refugees", noData: false })
      );
    isError && alert("No data found. Try another country.");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError]);

  const percentage = (dataType) => {
    const total =
      (parseInt(dataType) /
        (parseInt(dataset.refugees) +
          parseInt(dataset.asylum_seekers) +
          parseInt(dataset.stateless) +
          parseInt(dataset.idps) +
          parseInt(dataset.ooc))) *
      100;
    return total.toFixed(3);
  };

  return (
    <div className="mainContainer">
      <div className="mainBoard">
        <Toggle id="dashboard" />
        <div className="statMainContainer">
          <h1>Dashboard</h1>
          <div className="statOuterContainer">
            <div className="detailsContainer">
              <Stats
                name="Refugees"
                number={dataset.refugees}
                percentage={percentage(dataset.refugees)}
                onClick={handleClick("Refugees")}
              />
              <Stats
                name="Asylum Seekers"
                number={dataset.asylum_seekers}
                percentage={percentage(dataset.asylum_seekers)}
                onClick={handleClick("Asylum Seekers")}
              />
              <Stats
                name="Stateless"
                number={dataset.stateless}
                percentage={percentage(dataset.stateless)}
                onClick={handleClick("Stateless")}
              />
              <Stats
                name="Others"
                number={parseInt(dataset.idps) + parseInt(dataset.ooc)}
                percentage={percentage(
                  parseInt(dataset.idps) + parseInt(dataset.ooc)
                )}
                onClick={handleClick("Others")}
              />
            </div>
            <div className="detailsContainer orange">
              <h3>
                {isActivated
                  ? `${dataset.coa_name}'s Refugee Status Data in ${selected.year}`
                  : "Welcome!"}
              </h3>
            </div>
            <div className="detailsContainer shadow">
              <Trendline mode={isActivated} />
            </div>
          </div>
        </div>
      </div>
      <SelectionBoard />
    </div>
  );
}

export default Dashboard;
