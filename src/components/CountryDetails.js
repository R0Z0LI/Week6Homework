import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function CountryDetails(props) {
  const languages = Object.values(props.items[0].languages);
  const currencies = Object.keys(props.items[0].currencies);
  const borderCheck = props.items[0].neighbours;
  const [borderExist, setBorderExist] = useState(false);
  const [border, setBorder] = useState([]);

  useEffect(() => {
    if (borderCheck === "Does not have borders") {
      setBorder(borderCheck);
      console.log(border);
      setBorderExist(false);
    } else {
      setBorderExist(true);
      setBorder(Object.values(props.items[0].neighbours));
      console.log(border);
    }
  }, []);
  const nativeName = Object.values(props.items[0].nativeName);
  const navigate = useNavigate();
  const location = useLocation();

  const onClickHandler = (item) => {
    navigate(`/${item}`, { replace: true });
    window.location.reload();
  };

  useEffect(() => {
    const handleBackButton = (event) => {
      event.preventDefault();
      navigate(-1);
    };

    window.addEventListener("popstate", handleBackButton);

    return () => {
      window.removeEventListener("popstate", handleBackButton);
    };
  }, [navigate]);

  return (
    <div className="m-5 flex h-96">
      <img src={props.items[0].flag} className="basis-3/12 border" />
      <div className="basis-9/12 p-7 pl-20">
        <h2 className="text-4xl font-bold pb-5">{props.items[0].name}</h2>
        <div className=" flex flex-col flex-wrap pt-8 text-sm pb-8 h-64">
          <p className="pb-4">
            <span>Native Name: </span>
            <span className="break-all">{nativeName[0].official}</span>
          </p>
          <p className="pb-4">
            <span>Population: </span>
            {props?.items[0]?.population}
          </p>
          <p className="pb-4">
            <span>Region: </span>
            {props.items[0].region}
          </p>
          <p className="pb-4">
            <span>Sub Region: </span>
            {props.items[0].subRegion}
          </p>
          <p className="pb-4">
            <span>Capital: </span>
            {props.items[0].capital}
          </p>
          <p className="pb-4">
            <span>Top Level Domain: </span>
            {props.items[0].domain}
          </p>
          <div>
            <div className="pb-4">
              <span>Currencies: </span>
              <ul className="inline-block">
                {currencies.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <span className="pb-4">Languages: </span>
              <ul className="inline-block">
                {languages.map((item) => (
                  <li>{item} </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {borderExist && (
          <div className="flex flex-row">
            <span className="p-2">Border Countries: </span>
            <ul className="flex flex-row">
              {border.map((item) => (
                <li className="mr-2 p-1 pt-2 border shadow text-center w-12 h-8 text-xs">
                  <Link onClick={() => onClickHandler(item)}>{item} </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
        {!borderExist && <p>{border}</p>}
      </div>
    </div>
  );
}

export default CountryDetails;
