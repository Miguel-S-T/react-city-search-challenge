import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import CityDetails from "./components/CityDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/city/:id' component={CityDetails} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
