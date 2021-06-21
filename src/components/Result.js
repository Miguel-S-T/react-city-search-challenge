import React from "react";
import { Link } from "react-router-dom";

import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";

const Result = ({ pagination, setPagination, cities, fetchData }) => {
  const prevClick = () => {
    if (pagination === 0) {
      return;
    }
    setPagination(pagination - 5);
  };
  const nextClick = () => {
    setPagination(pagination + 5);
  };

  return (
    <>
      <div>
        <ul>
          {cities.map((city) => (
            <li key={city.id}>
              <Link to={`/city/${city.id}`}>
                <h2>{city.name}</h2>
              </Link>
              <p>{city.country}</p>
            </li>
          ))}
        </ul>
        {fetchData && cities.length >= 10 && (
          <div>
            <p onClick={prevClick}>
              Prev <NavigateBeforeIcon onClick={prevClick} />
            </p>
            <p onClick={nextClick}>
              Next <NavigateNextIcon onClick={nextClick} />
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Result;
