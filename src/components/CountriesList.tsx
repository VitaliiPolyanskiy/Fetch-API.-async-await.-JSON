import React from "react";
import { CountriesMap } from "../types";

type Props = { countries: CountriesMap };

const CountriesList: React.FC<Props> = ({ countries }) => {
  return (
    <ul className="list">
      {Object.entries(countries).map(([country, capital]) => (
        <li key={country} className="item">
          <strong>{country}</strong>
          <span>{capital}</span>
        </li>
      ))}
    </ul>
  );
};

export default CountriesList;