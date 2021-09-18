import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../styles/main.scss";
import LatestProjection from "../components/LatestProjection";
import DailyProjection from "../components/DailyProjection";
import Compare from "../components/Compare";
import Header from "../components/Header";
import Home from "../components/Home";
import NotFound from "../components/NotFound";
import CountryDetails from "../components/CountryDetails";

import CountryMap from "./../components/CountryMap";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div className="container  ">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/latest" component={LatestProjection} />
          <Route exact path="/latest/:country" component={CountryDetails} />
          <Route exact path="/latest/map/:country" component={CountryMap} />
          <Route exact path="/daily" component={DailyProjection} />
          <Route  path="/daily/#" component={DailyProjection} />
          {/* <Route exact path="/daily/:country" component={DailyCountryDetails} /> */}
          <Route exact path="/compare" component={Compare} />
          <Route exact component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
