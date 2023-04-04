import axios from "axios";
import { useEffect, useState } from "react";
import CountryList from "../components/CountryList";

const baseURL = "https://restcountries.com/v3.1/all";

function CountriesPage() {
  const [countries, setCountries] = useState();

  useEffect(() => {
    axios.get(baseURL).then((res) => {
      const loadedCountries = res.data;
      console.log(loadedCountries);
      setCountries(loadedCountries);
    });
  }, []);

  return <CountryList items={countries} />;
}

export default CountriesPage;
