import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Dropdown({ filterHandleChange }) {
  const classes = useStyles();

  const filters = ["Filter by name", "Sort by name A-Z", "Sort by name Z-A"];

  return (
    <div>
      <FormControl variant='outlined' className={classes.formControl}>
        <InputLabel id='demo-simple-select-outlined-label'>
          Filter by Name
        </InputLabel>
        <Select
          labelId='demo-simple-select-outlined-label'
          id='demo-simple-select-outlined'
          onChange={filterHandleChange}
          label='Filter by name'
        >
          {filters.map((filter, index) => (
            <MenuItem value={filter} key={index}>
              {filter}
            </MenuItem>
          ))}
          {/* <MenuItem value='Name'>
            <em>Name</em>
          </MenuItem> */}
          {/* <MenuItem value={10}>Sort by name A-Z</MenuItem>
          <MenuItem value={20}>Sort by name Z-A</MenuItem> */}
        </Select>
      </FormControl>
    </div>
  );
}
