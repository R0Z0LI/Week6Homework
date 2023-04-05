import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import CountryList from "../components/CountryList";
import CountryListFilter from "../components/CountryListFilter";

const baseURL = "https://restcountries.com/v3.1/all";

function CountriesPage() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [region, setRegion] = useState("");

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

  const filteredNameHandler = (typedName) => {
    setFilteredCountries(typedName);
  };

  const selectedRegionHandler = (selectedRegion) => {
    setRegion(selectedRegion);
  };

  const filteredData = countries.filter((country) => {
    if (
      filteredCountries &&
      !country.name.toLowerCase().includes(filteredCountries.toLowerCase())
    ) {
      return false;
    }
    if (region && country.region !== region) {
      return false;
    }
    return true;
  });

  if (error) return `Error: ${error.message}`;

  return (
    <div>
      <CountryListFilter
        typed={filteredNameHandler}
        selected={selectedRegionHandler}
        value={region}
      />
      {!isLoading && countries.length > 0 && (
        <CountryList items={filteredData} />
      )}
      {!isLoading && countries.length === 0 && <p>Found no movies.</p>}
      {isLoading && <p>Loading...</p>}
    </div>
  );
}

export default CountriesPage;
