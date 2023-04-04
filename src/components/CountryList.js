import CountryItem from "./CountryItem";
import React from "react";

function CountryList(props) {
  return (
    <ul>
      {props.items.map((countries) => (
        <CountryItem
          key={countries.id}
          id={countries.id}
          name={countries.name}
          flag={countries.flag}
          population={countries.population}
          region={countries.region}
          capital={countries.capital}
        />
      ))}
    </ul>
  );
}

export default CountryList;
