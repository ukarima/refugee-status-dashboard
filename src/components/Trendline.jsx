import React from "react";
import { AreaChart, Area, XAxis, YAxis, Tooltip } from "recharts";
import { useSelector } from "react-redux";
import axios from "axios";

import dummy_data from "../redux/dummy_data";

export default function Trendline({ mode }) {
  const selectedCountry = useSelector((state) => state.selectedOptions.country);
  const selectedYear = useSelector((state) => state.selectedOptions.year);

  const [dataset, setDataset] = React.useState("");

  const getData = async () => {
    const url = `https://api.unhcr.org/population/v1/demographics/?limit=&page=&yearFrom=${
      selectedYear - 10
    }&yearTo=${selectedYear}&year=&coo=&coa=${selectedCountry}`;

    const response = await axios.get(url);
    setDataset(response.data.items);
  };

  const data = [];
  for (let i = 0; i < dataset.length; i++) {
    data.push({
      name: dataset[i].year,
      male: dataset[i].m_total,
      female: dataset[i].f_total,
    });
  }
  React.useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCountry, selectedYear]);

  return (
    <AreaChart
      width={600}
      height={200}
      data={mode ? data : dummy_data}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
    >
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#f38653" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#f38653" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#2FA4FF" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#2FA4FF" stopOpacity={0} />
        </linearGradient>
      </defs>
      <XAxis dataKey="name" tick={{ fontSize: 10 }} />
      <YAxis tick={{ fontSize: 10 }} />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="female"
        stroke="#f38653"
        fillOpacity={1}
        fill="url(#colorUv)"
      />
      <Area
        type="monotone"
        dataKey="male"
        stroke="#2FA4FF"
        fillOpacity={1}
        fill="url(#colorPv)"
      />
    </AreaChart>
  );
}
