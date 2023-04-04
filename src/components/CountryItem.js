import { Link } from "react-router-dom";

function CountryItem(props) {
  return (
    <li>
      <Link to={props.id}>
        <img src={props.flag} />
        <h3>{props.name}</h3>
        <div>
          <p>
            <span>Population: </span>
            {props.population}
          </p>
          <p>
            <span>Region: </span>
            {props.region}
          </p>
          <p>
            <span>Capital: </span>
            {props.capital}
          </p>
        </div>
      </Link>
    </li>
  );
}

export default CountryItem;
