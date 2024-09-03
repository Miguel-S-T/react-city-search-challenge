import React from "react";
import { Link } from "react-router-dom";

import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: 200,
    height: 100,
    backgroundColor: "#FFF",
  },
  title: {
    fontSize: 14,
  },
});

const Result = ({ pagination, setPagination, cities, fetchData }) => {
  const classes = useStyles();

  const prevClick = () => {
    if (pagination === 0) {
      return;
    }
    setPagination(pagination - 5);
  };
  const nextClick = () => {
    setPagination(pagination + 5);
  };

  // const citiesResult = (
  //   <ul>
  //     {cities.map((city) => (
  //       <li key={city.id}>
  //         <Link to={`/city/${city.id}`}>
  //           <h2>{city.name}</h2>
  //         </Link>
  //         <p>{city.country}</p>
  //       </li>
  //     ))}
  //   </ul>
  // );

  const citiesResult2 = (
    <Grid container spacing={5} justify='center'>
      <Grid item lg={10}>
        <Grid container justify='center' spacing={1}>
          {cities.map((city) => (
            <Grid key={city.id} item>
              <Card className={classes.root}>
                <CardContent>
                  <Typography
                    component={Link}
                    to={`/city/${city.id}`}
                    variant='h6'
                    style={{
                      fontSize: "16px",
                      textDecoration: "none",
                      color: "black",
                    }}
                  >
                    {city.name}
                  </Typography>
                  <br />
                  <Typography
                    variant='subtitle2'
                    className={classes.title}
                    color='textSecondary'
                    gutterBottom
                  >
                    {city.country}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );

  return (
    <>
      <div>
        {citiesResult2}
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
