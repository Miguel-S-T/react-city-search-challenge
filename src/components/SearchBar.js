import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import "./SearchBar.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const SearchBar = ({ setSearchTerm, setFetchData }) => {
  const [string, setString] = useState("");

  const classes = useStyles();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setSearchTerm(string);
    setFetchData(true);
  };

  return (
    <>
      <form
        onSubmit={(e) => onSubmitHandler(e)}
        className={classes.root}
        id='form'
        noValidate
        autoComplete='off'
      >
        <TextField
          className='input'
          id='outlined-basic'
          label='Search Cities'
          variant='outlined'
          value={string}
          onChange={(event) => setString(event.target.value)}
        />
        <Button
          className='btn-search'
          onClick={(e) => onSubmitHandler(e)}
          variant='contained'
          color='primary'
          type='submit'
        >
          Search
        </Button>
      </form>
    </>
  );
};

export default SearchBar;
