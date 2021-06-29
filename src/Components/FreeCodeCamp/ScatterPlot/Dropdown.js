import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
export const Dropdown = ({ options, id, selectedValue, onSelectedValueChange }) => {


  return (
    <FormControl variant="outlined" style={{
      margin: "10px 0px",
    
    }}      >
      <InputLabel htmlFor={id}>{id === "x-select" ? "X-Axis" : "Y-Axis"}</InputLabel>
      <Select
        id={id}
        value={selectedValue}
        label={id}
        onChange={event => onSelectedValueChange(event.target.value)}

      >
        {options.map(({ value, label }) => (
          <MenuItem value={value} >
            {label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}