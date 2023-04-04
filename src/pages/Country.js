import CountryDetails from "../components/CountryDetails";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const baseURL = "https://restcountries.com/v3.1/alpha";

function CountryPage() {
  const [country, setCountry] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation().pathname;
  const fetchCountryHandler = useCallback(() => {
    setIsLoading(true);
    axios
      .get(baseURL + location)
      .then((res) => {
        const loadedCountry = res.data.map((countryData) => {
          if (countryData.borders === undefined) {
            countryData.borders = "Does not have borders";
          }
          return {
            id: countryData.cca2,
            flag: countryData.flags.png,
            name: countryData.name.common,
            nativeName: countryData.name.nativeName,
            capital: countryData.capital,
            region: countryData.region,
            subRegion: countryData.subregion,
            population: countryData.population,
            domain: countryData.tld,
            currencies: countryData.currencies,
            languages: countryData.languages,
            neighbours: countryData.borders,
          };
        });
        console.log(loadedCountry);
        setCountry(loadedCountry);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  useEffect(() => {
    fetchCountryHandler();
  }, [fetchCountryHandler]);

  return (
    <div>
      {!isLoading && country.length > 0 && <CountryDetails items={country} />}
      {!isLoading && country.length === 0 && <p>Found no cities. </p>}
      {isLoading && <p>Loading...</p>}
    </div>
  );
}

export default CountryPage;
