function CountryItem(props) {
  console.log(props.items);
  return (
    <li>
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
    </li>
  );
}

export default CountryItem;
