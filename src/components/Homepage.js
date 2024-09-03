import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Backdrop from "@material-ui/core/Backdrop";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import "./Homepage.css";

import SearchBar from "./SearchBar";
import Result from "./Result";
import Dropdown from "./Dropdown";
import Header from "./Header";
import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

const Homepage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [fetchData, setFetchData] = useState(false);
  const [pagination, setPagination] = useState(0);
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentFilter, setCurrentFilter] = useState("");
  const [sortQuery, setSortQuery] = useState("");
  const [cityNotFound, setCityNotFound] = useState("");

  const classes = useStyles();

  const fetchCities = useCallback(() => {
    setLoading(true);
    axios
      .get(
        `${process.env.REACT_APP_API}/v1/geo/cities?limit=10&offset=${pagination}&namePrefix=${searchTerm}${sortQuery}`
      )
      .then((response) => {
        // console.log(response.data.data);
        if (response.data.data.length > 0) {
          setResult(response.data.data);
          setLoading(false);
        }
        if (response.data.data.length === 0) {
          setResult(response.data.data);
          setLoading(false);
          setCityNotFound("City not found.");
        }
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [sortQuery, pagination, searchTerm]);

  const filterHandleChange = (e) => {
    setCurrentFilter(e.target.value);
    if (e.target.value === "Sort by name A-Z") {
      setSortQuery("&sort=name");
    } else if (e.target.value === "Sort by name Z-A") {
      setSortQuery("&sort=-name");
    }
  };

  useEffect(() => {
    if (fetchData) {
      fetchCities();
    }
  }, [searchTerm, pagination, fetchData, fetchCities]);

  let searchResult = (
    <Result
      cities={result}
      pagination={pagination}
      setPagination={setPagination}
      fetchData={fetchData}
    />
  );

  if (fetchData && loading && result.length > 0) {
    searchResult = (
      <Backdrop
        className={classes.backdrop}
        open
      >
        <CircularProgress color='inherit' />
      </Backdrop>
    );
  }

  // if (fetchData && result && result.length === 0 && !loading) {
  //   searchResult = <p>City not found.</p>;
  // }

  return (
    <>
      <Header />
      <div className='home'>
        <Grid
          container
          justify='center'
          spacing={2}
        >
          <Grid item>
            <div className='dropdown'>
              <SearchBar
                setLoading={setLoading}
                setSearchTerm={setSearchTerm}
                setFetchData={setFetchData}
              />
            </div>

            <div className='dropdown'>
              <Dropdown
                filterHandleChange={filterHandleChange}
                currentFilter={currentFilter}
              />
            </div>
          </Grid>
        </Grid>
        <div>
          {searchResult}
          {cityNotFound}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Homepage;
