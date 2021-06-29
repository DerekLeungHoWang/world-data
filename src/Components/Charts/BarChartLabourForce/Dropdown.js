import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';



export const Dropdown = ({ options, id, selectedValue, onSelectedValueChange }) => (
  <FormControl variant="outlined"    style={{ marginTop: "20px" }} >
    <InputLabel htmlFor="y-select">Rows</InputLabel>

    <Select label="Rows" id={id} value={selectedValue} onChange={event => onSelectedValueChange(event.target.value)}>
      {options.map(({ value, label }) => (
        <MenuItem value={value} key={value}>
          Display  {value} Rows
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);