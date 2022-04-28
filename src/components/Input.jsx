import * as React from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

import { addCountry, addYear } from "../redux/selectedOption";

function Input({ mode }) {
  const [countries, setCountries] = React.useState([]);
  const [years, setYears] = React.useState([]);

  const dispatch = useDispatch();

  function countryOnChangeHandler(event) {
    dispatch(addCountry({ country: event.target.value }));
  }
  function yearOnChangeHandler(event) {
    dispatch(addYear({ year: event.target.value }));
  }

  const getData = async () => {
    const countryURL = `http://localhost:3001/countries`;
    const yearURL = `http://localhost:3001/years`;

    const [countryDataResponse, yearDataResponse] = await Promise.all([
      axios.get(countryURL),
      axios.get(yearURL),
    ]);
    setCountries(countryDataResponse.data);
    setYears(yearDataResponse.data);
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {mode === "country" ? (
        <select onChange={countryOnChangeHandler}>
          <option value="">Select {mode}</option>
          {countries.map((country) => (
            <option key={country.id} value={country.code}>
              {country.name}
            </option>
          ))}
        </select>
      ) : (
        <select onChange={yearOnChangeHandler}>
          <option value="">Select {mode}</option>
          {years.map((year) => (
            <option key={year.year} value={year.year}>
              {year.year}
            </option>
          ))}
        </select>
      )}
    </>
  );
}

export default Input;
