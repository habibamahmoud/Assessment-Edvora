import "../styles/components/Dropdown.css";

import React, { useState } from "react";

function Dropdown({ title, options, onOptionChange }) {
  const [selectedOption, setSelectedOption] = useState(null);

  function handleItemClick(option) {
    setSelectedOption(option);
    onOptionChange(option);
  }

  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
      >
        {selectedOption || title}
      </button>
      <ul className="dropdown-menu">
        {options.map((option, idx) => {
          return (
            <li key={idx}>
              <button
                className="dropdown-item"
                href="#"
                onClick={(e) => handleItemClick(option, e)}
              >
                {option}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Dropdown;
