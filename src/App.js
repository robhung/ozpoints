import React from "react";
import injectSheet from "react-jss";
import { compose, withState } from "recompose";

import Grid from "@material-ui/core/Grid";

import Filters from "./components/Filters";

const App = ({ classes, filters, updateFilters }) => (
  <Grid
    component="main"
    container
    direction="column"
    alignItems="center"
    className={classes.main}
  >
    <Grid component="header" className={classes.header}>
      <p>OzPoints</p>
    </Grid>
    <Filters filters={filters} updateFilters={updateFilters} />
    <Grid component="section" className={classes.results}>
      <p>Results</p>
    </Grid>
    <Grid component="footer" className={classes.footer}>
      <p>Robert Hung 2019</p>
    </Grid>
  </Grid>
);

const styles = {
  main: {
    minHeight: "100vh",
    backgroundColor: "#282c34"
  },
  header: {
    fontSize: "calc(10px + 2vmin)",
    color: "white"
  },
  results: {
    color: "white"
  },
  footer: {
    marginTop: "auto",
    color: "white"
  }
};

const initialFilters = {
  cardIssuer: {
    ANZ: false,
    CBA: false,
    NAB: false,
    Westpac: false
  },
  cardType: {
    VISA: false,
    Mastercard: false,
    DinersClub: false,
    AMEX: false
  },
  rewards: {
    Qantas: false,
    Velocity: false,
    Flexible: false
  },
  feesWaived: {
    FirstYearAnnual: false,
    International: false,
    Supplemantary: false
  }
};

export default compose(
  injectSheet(styles),
  withState("filters", "updateFilters", initialFilters)
)(App);
