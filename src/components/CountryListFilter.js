function CountryListFilter(props) {
  const onChangeHandler = (event) => {
    props.typed(event.target.value);
  };
  const dropdownChangerHandler = (event) => {
    props.selected(event.target.value);
  };
  return (
    <div className="p-5 pl-7 pr-7 flex justify-between flex-wrap">
      <div>
        <input
          tpye="text"
          placeholder="Search.."
          className="py-2 pl-8 pr-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          onChange={onChangeHandler}
        />
      </div>
      <div className="pt-4 sm:pt-0">
        <select onChange={dropdownChangerHandler} value={props.value}>
          <option value="">Filter by Region</option>
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
