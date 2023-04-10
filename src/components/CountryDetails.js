import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function CountryDetails(props) {
  const languages = Object.values(props.items[0].languages);
  const currencies = Object.values(props.items[0].currencies);

  const borderCheck = props.items[0].neighbours;
  const [borderExist, setBorderExist] = useState(false);
  const [border, setBorder] = useState([]);

  useEffect(() => {
    if (borderCheck === "Does not have borders") {
      setBorder(borderCheck);
      setBorderExist(false);
    } else {
      setBorderExist(true);
      setBorder(Object.values(props.items[0].neighbours));
    }
  }, []);
  const nativeName = Object.values(props.items[0].nativeName);
  const navigate = useNavigate();

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
    <div className="m-5 lg:flex lg:h-96">
      <img src={props.items[0].flag} className="lg:basis-3/12 border" />
      <div className="lg:basis-9/12 lg:p-7 pt-4 lg:pl-20">
        <h2 className="text-4xl font-bold pb-5">{props.items[0].name}</h2>
        <div className="lg:flex lg:flex-col lg:flex-wrap flex-flex-row pt-8 text-sm pb-8 lg:h-64">
          <p className="pb-4">
            <span>Native Name: </span>
            <span className="break-all text-slate-500">
              {nativeName[0].official}
            </span>
          </p>
          <p className="pb-4">
            <span>Population: </span>
            <span className="text-slate-500">
              {props?.items[0]?.population}
            </span>
          </p>
          <p className="pb-4">
            <span>Region: </span>
            <span className="text-slate-500">{props.items[0].region}</span>
          </p>
          <p className="pb-4">
            <span>Sub Region: </span>
            <span className="text-slate-500">{props.items[0].subRegion}</span>
          </p>
          <p className="pb-4">
            <span>Capital: </span>
            <span className="text-slate-500">{props.items[0].capital}</span>
          </p>
          <p className="pb-4">
            <span>Top Level Domain: </span>
            <span className="text-slate-500">{props.items[0].domain}</span>
          </p>
          <div>
            <div className="flex flex-row">
              <span className="pb-4 pr-2">Currencies: </span>
              <ul className="flex flex-row flex-wrap">
                {currencies.map((item, index) => (
                  <li key={index} className="mr-2 pb-4 text-slate-500">
                    {item.name}
                    {index !== currencies.length - 1 && ","}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-row">
              <span className="pb-4 pr-1">Languages: </span>
              <ul className="flex flex-row flex-wrap max-w-xs">
                {languages.map((item, index) => (
                  <li key={index} className="mr-1 pb-4 text-slate-500">
                    {item}
                    {index !== languages.length - 1 && ","}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {borderExist && (
          <div className="lg:flex lg:flex-row ">
            <span className="pt-2">Border Countries: </span>
            <ul className="flex flex-row">
              {border.map((item, index) => (
                <li
                  key={index}
                  className="mr-2 p-1 pt-2 border shadow text-center w-12 h-8 text-xs"
                >
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
