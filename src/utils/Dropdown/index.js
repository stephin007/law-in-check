import React from "react";
import PropTypes from "prop-types";

import "./dropdown.css";

const Dropdown = ({ value, data, styleClass, placeholder, onChange }) => {
  const handleChange = (e) => {
    const { value } = e.target;
    console.log(e.target.value);
    onChange(value);
  };

  return (
    <div className={`form-group ${styleClass}`}>
      <select className='form-control' value={value} onChange={handleChange}>
        <option value=''>{placeholder}</option>
        {data.map((item, index) => (
          <option key={index} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};

Dropdown.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  data: PropTypes.array.isRequired,
  styleClass: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

Dropdown.defaultProps = {
  value: "",
  placeholder: "",
  styleClass: "",
};

export default Dropdown;
