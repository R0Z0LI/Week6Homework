import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import CountryList from "../components/CountryList";

const baseURL = "https://restcountries.com/v3.1/all";

function CountriesPage() {
  const [countries, setCountries] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchCountriesHandler = useCallback(() => {
    setIsLoading(true);
    axios
      .get(baseURL)
      .then((res) => {
        const loadedCountries = res.data.map((countryData) => {
          return {
            id: countryData.cca3,
            flag: countryData.flags.png,
            name: countryData.name.common,
            capital: countryData.capital,
            region: countryData.region,
            population: countryData.population,
          };
        });
        console.log(res.data);
        setCountries(loadedCountries);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  useEffect(() => {
    fetchCountriesHandler();
  }, [fetchCountriesHandler]);

  if (error) return `Error: ${error.message}`;

  return (
    <div>
      {!isLoading && countries.length > 0 && <CountryList items={countries} />};
      {!isLoading && countries.length === 0 && <p>Found no movies.</p>}
      {isLoading && <p>Loading...</p>}
    </div>
  );
}

export default CountriesPage;
