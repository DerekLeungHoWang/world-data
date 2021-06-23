import React from 'react';

export const Dropdown = ({ options, id, selectedValue, onSelectedValueChange }) => (
  <select id={id} value={selectedValue} onChange={event => onSelectedValueChange(event.target.value)}>
    {options.map(({ value, label }) => (
      <option value={value}  key={value}>
        {value}
      </option>
    ))}
  </select>
);