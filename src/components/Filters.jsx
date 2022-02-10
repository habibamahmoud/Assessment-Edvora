import Dropdown from "./Dropdown";
import "../styles/components/Filters.css";

function Filters({
  names,
  states,
  cities,
  setNameFilter,
  setStateFilter,
  setCityFilter,
}) {
  return (
    <div className="p-5 text-light filters-card">
      <p className="fs-3">Filters</p>
      <hr className="mb-4" />
      <div className="mb-3 dropdown-container">
        <Dropdown
          title="Products"
          options={names}
          onOptionChange={setNameFilter}
        />
      </div>
      <div className="mb-3 dropdown-container">
        <Dropdown
          title="State"
          options={states}
          onOptionChange={setStateFilter}
        />
      </div>
      <div className="mb-3 dropdown-container">
        <Dropdown
          title="City"
          options={cities}
          onOptionChange={setCityFilter}
        />
      </div>
    </div>
  );
}

export default Filters;
