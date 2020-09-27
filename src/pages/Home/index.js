import React, { useState } from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import Filters from '../../components/Filters';
import ResultsList from '../../components/ResultsList';
import ResultsTable from '../../components/ResultsTable';

import useStyles from './styles';

const Home = () => {
  const classes = useStyles();
  const theme = useTheme();

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
  const [filters, updateFilters] = useState(initialFilters);

  const showList = useMediaQuery(theme.breakpoints.down('sm'));

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

  return (
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

      {showList ? (
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
        <p>Robert Hung {new Date().getFullYear()}</p>
      </Grid>
    </Grid>
  );
};

export default Home;
