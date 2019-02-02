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
    <Grid component="section" className={classes.about}>
      <p>
        This site was made for comparing credit cards in Australia which offer a
        sign up bonus.
      </p>
      <p>
        Any data such as interest rates, subsequent annual fees, repayment
        periods etc. have been ignored.
      </p>
      <p>
        It is advised to cancel these cards immediately after you receive your
        sign up bonus, allowing your previous holder limit to reset.
      </p>
    </Grid>
    <Grid component="footer" className={classes.footer}>
      <p>Robert Hung 2019</p>
    </Grid>
  </Grid>
);

const styles = theme => ({
  main: {
    minHeight: "100vh"
  },
  header: {
    fontSize: "calc(10px + 2vmin)"
  },
  about: {
    textAlign: "center",
    marginTop: "auto",
    marginLeft: "10%",
    marginRight: "10%"
  },
  footer: {
    marginBottom: theme.spacing.unit * 3
  }
});

const initialFilters = {
  bank: {
    ANZ: false,
    CBA: false,
    NAB: false,
    Westpac: false,
    StGeorge: false,
    AMEX: false
  },
  type: {
    VISA: false,
    Mastercard: false,
    AMEX: false,
    DinersClub: false
  },
  rewards: {
    Qantas: false,
    Velocity: false,
    Flexible: false
  },
  feesWaived: {
    Annual: false,
    Foreign: false
  }
};

export default compose(
  withStyles(styles),
  withState("filters", "updateFilters", initialFilters)
)(App);
