function CountryDetails(props) {
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
          {languages &&
            languages.length > 0 &&
            languages.map((lang) => {
              <li key={lang}>{lang}</li>;
            })}
        </ul>
      </div>
    </div>
  );
}

export default CountryDetails;
