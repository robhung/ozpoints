import React from 'react';
import { compose, withProps, withState } from 'recompose';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withWidth from '@material-ui/core/withWidth';

import { MuiThemeProvider, withStyles } from '@material-ui/core/styles';

import Filters from './components/Filters';
import ResultsList from './components/ResultsList';
import ResultsTable from './components/ResultsTable';

import theme from './styles';

const App = ({
  classes,
  filteredBank,
  filteredType,
  filteredRewards,
  filters,
  updateFilters,
  width,
}) => (
  <MuiThemeProvider theme={theme}>
    <Grid
      component="main"
      container
      direction="column"
      alignItems="center"
      className={classes.main}
    >
      <Grid
        component="header"
        container
        justify="center"
        className={classes.headerWrapper}
      >
        <Grid className={classes.header}>
          <Typography variant="h3" className={classes.oz}>
            Oz
          </Typography>
          <Typography variant="h3" className={classes.points}>
            Points
          </Typography>
        </Grid>
      </Grid>
      <Filters filters={filters} updateFilters={updateFilters} />
      {width === 'xs' || width === 'sm' ? (
        <ResultsList
          filters={filters}
          filteredBank={filteredBank}
          filteredType={filteredType}
          filteredRewards={filteredRewards}
          updateFilters={updateFilters}
        />
      ) : (
        <ResultsTable
          filters={filters}
          filteredBank={filteredBank}
          filteredType={filteredType}
          filteredRewards={filteredRewards}
          updateFilters={updateFilters}
        />
      )}
      <Grid component="section" className={classes.about}>
        <p>
          This site was made for comparing credit cards in Australia which offer
          a sign up bonus.
        </p>
        <p>
          Any data such as interest rates, subsequent annual fees, repayment
          periods, etc. have been ignored.
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
  </MuiThemeProvider>
);

const styles = {
  main: {
    minHeight: '100vh',
    background: theme.palette.common.white,
  },
  headerWrapper: {
    [theme.breakpoints.up('sm')]: {
      padding: '32px 0px',
    },
  },
  header: {
    padding: '12px 8px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    [theme.breakpoints.only('xs')]: {
      width: '100%',
    },
    [theme.breakpoints.up('sm')]: {
      borderRadius: 5,
    },
    background: theme.palette.primary.main,
  },
  oz: {
    border: `${theme.palette.common.white} 5px solid`,
    borderRadius: 5,
    color: theme.palette.common.white,
    fontWeight: theme.typography.fontWeightMedium,
    [theme.breakpoints.only('xs')]: {
      border: `${theme.palette.common.white} 2.5px solid`,
      lineHeight: theme.typography.h5.lineHeight,
      fontSize: theme.typography.h5.fontSize,
      letterSpacing: theme.typography.h5.letterSpacing,
    },
  },
  points: {
    color: theme.palette.common.white,
    fontWeight: theme.typography.fontWeightMedium,
    [theme.breakpoints.only('xs')]: {
      lineHeight: theme.typography.h5.lineHeight,
      fontSize: theme.typography.h5.fontSize,
      letterSpacing: theme.typography.h5.letterSpacing,
    },
  },
  about: {
    marginTop: 'auto',
    marginLeft: '10%',
    marginRight: '10%',
    [theme.breakpoints.up('lg')]: {
      textAlign: 'center',
    },
  },
  footer: {
    marginBottom: theme.spacing.unit * 3,
  },
};

const initialFilters = {
  bank: {
    ANZ: false,
    CBA: false,
    NAB: false,
    Westpac: false,
    StGeorge: false,
    AMEX: false,
  },
  type: {
    VISA: false,
    Mastercard: false,
    AMEX: false,
    DinersClub: false,
  },
  rewards: {
    Qantas: false,
    Velocity: false,
    Flexible: false,
  },
  feesWaived: {
    Annual: false,
    Foreign: false,
  },
};

export default compose(
  withWidth(),
  withStyles(styles),
  withState('filters', 'updateFilters', initialFilters),
  withProps(({ filters }) => {
    const filteredBank = new Set(
      Object.entries(filters.bank)
        .filter(([, value]) => value)
        .map(([key]) => key)
    );
    const filteredType = new Set(
      Object.entries(filters.type)
        .filter(([, value]) => value)
        .map(([key]) => key)
    );
    const filteredRewards = new Set(
      Object.entries(filters.rewards)
        .filter(([, value]) => value)
        .map(([key]) => key)
    );

    return {
      filteredBank,
      filteredType,
      filteredRewards,
    };
  })
)(App);
