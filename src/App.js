import React from "react";
import { compose, withState } from "recompose";

import Grid from "@material-ui/core/Grid";

import { withStyles } from "@material-ui/core/styles";

import Filters from "./components/Filters";
import ResultsTable from "./components/ResultsTable";

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
    <ResultsTable filters={filters} updateFilters={updateFilters} />
    <Grid component="footer" className={classes.footer}>
      <p>Robert Hung 2019</p>
    </Grid>
  </Grid>
);

const styles = {
  main: {
    minHeight: "100vh"
  },
  header: {
    fontSize: "calc(10px + 2vmin)"
  },
  footer: {
    marginTop: "auto"
  }
};

const initialFilters = {
  issuer: {
    ANZ: false,
    CBA: false,
    NAB: false,
    westpac: false,
    AMEX: false
  },
  type: {
    VISA: false,
    mastercard: false,
    dinersClub: false,
    AMEX: false
  },
  rewards: {
    qantas: false,
    velocity: false,
    flexible: false
  },
  waived: {
    annual: false,
    foreign: false,
    supplementary: false
  }
};

export default compose(
  withStyles(styles),
  withState("filters", "updateFilters", initialFilters)
)(App);
