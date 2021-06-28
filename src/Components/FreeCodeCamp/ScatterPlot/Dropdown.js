import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
export const Dropdown = ({ options, id, selectedValue, onSelectedValueChange }) => (
  <FormControl variant="outlined"   >
        <InputLabel htmlFor="y-select">Rows</InputLabel>
    <Select id={id} onChange={event => onSelectedValueChange(event.target.value)}>
      {options.map(({ value, label }) => (
        <MenuItem value={value} selected={value === selectedValue}>
          {label}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);