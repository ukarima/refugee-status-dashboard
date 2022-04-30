import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import SelectionBoard from "../components/SelectionBoard";
import Toggle from "../components/Toggle";
import Stats from "../components/Stats";
import Trendline from "../components/Trendline";
import { changeClickedItem, changeStatus } from "../redux/selectedOption";

function Dashboard() {
  const selected = useSelector((state) => state.selectedOptions);
  const dispatch = useDispatch();

  function getDataHandler() {
    dispatch(changeStatus({ dataStatus: true }));
    setCurrentYear(selected.year);
    getData();
  }

  const [dataset, setDataset] = React.useState("");
  const [isError, setIsError] = React.useState(false);
  const [currentYear, setCurrentYear] = React.useState("");

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

  const setMode =
    selected.dataStatus &&
    selected.country === dataset.coa &&
    currentYear === selected.year;

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
                mode={setMode}
                percentage={percentage(dataset.refugees)}
                onClick={handleClick("Refugees")}
              />
              <Stats
                name="Asylum Seekers"
                number={dataset.asylum_seekers}
                mode={setMode}
                percentage={percentage(dataset.asylum_seekers)}
                onClick={handleClick("Asylum Seekers")}
              />
              <Stats
                name="Stateless"
                number={dataset.stateless}
                mode={setMode}
                percentage={percentage(dataset.stateless)}
                onClick={handleClick("Stateless")}
              />
              <Stats
                name="Others"
                number={parseInt(dataset.idps) + parseInt(dataset.ooc)}
                mode={setMode}
                percentage={percentage(
                  parseInt(dataset.idps) + parseInt(dataset.ooc)
                )}
                onClick={handleClick("Others")}
              />
            </div>
            <div className="detailsContainer orange">
              {setMode ? (
                <h3>
                  {dataset.coa_name}'s Refugee Status Data in {selected.year}
                </h3>
              ) : (
                <h3>Welcome!</h3>
              )}
            </div>
            <div className="detailsContainer shadow">
              <Trendline mode={setMode} />
            </div>
          </div>
        </div>
      </div>
      <SelectionBoard
        onClick={getDataHandler}
        disabledStatus={
          (selected.country !== "") & (selected.year !== "") ? false : true
        }
        errorStatus={isError}
      />
    </div>
  );
}

export default Dashboard;
