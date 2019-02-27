import React from 'react';

import Grid from '@material-ui/core/Grid';

import { withStyles } from '@material-ui/core/styles';

import cards from '../../data';

import CheckFilter from '../CheckFilter';
import ResultsListItem from '../ResultsListItem';

const ResultsList = ({
  filters,
  filteredBank,
  filteredType,
  filteredRewards,
}) => (
  <Grid component="section" container>
    {cards.map(card => (
      <CheckFilter
        key={`${card.name} ${card.rewards[0].type}`}
        card={card}
        filters={filters}
        filteredBank={filteredBank}
        filteredType={filteredType}
        filteredRewards={filteredRewards}
      >
        <ResultsListItem card={card} />
      </CheckFilter>
    ))}
  </Grid>
);

const styles = {};

export default withStyles(styles)(ResultsList);
