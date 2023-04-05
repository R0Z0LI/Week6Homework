import { Link, useNavigate } from "react-router-dom";

function CountryDetails(props) {
  const languages = Object.values(props.items[0].languages);
  const currencies = Object.keys(props.items[0].currencies);
  const border = Object.values(props.items[0].neighbours);
  const navigate = useNavigate();

  const onClickHandler = (item) => {
    navigate(`/${item}`, { replace: true });
    window.location.reload();
  };

  return (
    <div>
      <img src={props.items[0].flag} />
      <h2>{props.items[0].name}</h2>
      <div>
        <p>{props.items[0].capital}</p>
        <p>{props.items[0].region}</p>
        <p>{props.items[0].subRegion}</p>
        <p>{props.items[0].population}</p>
        <p>{props.items[0].domain}</p>
        <ul>
          {currencies.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
        <ul>
          {languages.map((item) => (
            <li>{item} </li>
          ))}
        </ul>
        <ul>
          {border.map((item) => (
            <li>
              <Link onClick={() => onClickHandler(item)}>{item} </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CountryDetails;
