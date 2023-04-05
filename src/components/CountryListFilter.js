function CountryListFilter(props) {
  const onChangeHandler = (event) => {
    props.typed(event.target.value);
  };
  const dropdownChangerHandler = (event) => {
    props.selected(event.target.value);
  };
  return (
    <div>
      <div>
        <input
          tpye="text"
          placeholder="Search.."
          className="searchBar"
          onChange={onChangeHandler}
        />
      </div>
      <div>
        <label>Filter by Region</label>
        <select onChange={dropdownChangerHandler} value={props.value}>
          <option value="">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
}

export default CountryListFilter;
