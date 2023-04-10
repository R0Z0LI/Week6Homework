import { Link } from "react-router-dom";

function CountryItem(props) {
  return (
    <li className="lg:m-4 lg:w-1/5 shadow rounded-md flex justify-start m-3">
      <Link to={props.id}>
        <img src={props.flag} className="lg:w-1/1 lg:h-48 rounded-md" />
        <div className="p-3">
          <h3 className="font-bold text-lg">{props.name}</h3>
          <div className="pt-3 text-xs">
            <div className="pt-1">
              <span>Population: </span>
              <span className="text-slate-500">{props.population}</span>
            </div>
            <div className="pt-1">
              <span>Region: </span>
              <span className="text-slate-500">{props.region}</span>
            </div>
            <div className="pt-1">
              <span>Capital: </span>
              <span className="text-slate-500">{props.capital}</span>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default CountryItem;
