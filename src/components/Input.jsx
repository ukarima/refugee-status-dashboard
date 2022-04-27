import * as React from "react";
import axios from "axios";

function Input({ mode }) {
  const [countries, setCountries] = React.useState([]);
  const [years, setYears] = React.useState([]);

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
    <select>
      <option value="">Select {mode}</option>
      {mode === "country"
        ? countries.map((country) => (
            <option key={country.id} value={country.code}>
              {country.name}
            </option>
          ))
        : years.map((year) => (
            <option key={year.year} value={year.year}>
              {year.year}
            </option>
          ))}
    </select>
  );
}

export default Input;
