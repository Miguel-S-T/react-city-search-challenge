import React, { useState, useEffect } from "react";
import axios from "axios";

const CityDetails = (props) => {
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState([]);

  //   console.log(props.match.params.id);

  const fetchCityById = (id) => {
    setLoading(true);
    axios
      .get(`${process.env.REACT_APP_API}/v1/geo/cities/${id}`)
      .then((response) => {
        // console.log(response.data.data);
        setCity(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const id = props.match.params.id;
    fetchCityById(id);
  }, [props.match.params.id]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <div>
        <h1>{city.name}</h1>
        <h2>
          {city.country},&nbsp;
          <span>{city.countryCode}</span>
        </h2>
        <p>Population: {city.population}</p>
        <p>Latitude: {city.latitude}</p>
        <p>Longitude: {city.longitude}</p>
      </div>
    </>
  );
};

export default CityDetails;
