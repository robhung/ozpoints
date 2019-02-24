import React from 'react';
import { compose, withHandlers } from 'recompose';

import Grid from '@material-ui/core/Grid';

import { withStyles } from '@material-ui/core/styles';

import FilterGroup from '../FilterGroup';

// NB: Manual decleration of filter order as Safari & iOS was shifting the
// toggled filter to the bottom, as per onToggleFilter handler
const labels = {
  bank: ['ANZ', 'CBA', 'NAB', 'Westpac', 'StGeorge', 'AMEX'],
  type: ['VISA', 'Mastercard', 'AMEX', 'DinersClub'],
  rewards: ['Qantas', 'Velocity', 'Flexible'],
  feesWaived: ['Annual', 'Foreign']
};

const Filters = ({ filters, onToggleFilter }) => (
  <Grid component="section" container justify="center">
    <Grid container justify="space-around">
      <FilterGroup
        filters={filters.bank}
        header="Bank"
        labels={labels.bank}
        onToggleFilter={onToggleFilter}
        type="bank"
      />
      <FilterGroup
        filters={filters.type}
        header="Card Type"
        labels={labels.type}
        onToggleFilter={onToggleFilter}
        type="type"
      />
      <FilterGroup
        filters={filters.rewards}
        header="Rewards"
        labels={labels.rewards}
        onToggleFilter={onToggleFilter}
        type="rewards"
      />
      <FilterGroup
        filters={filters.feesWaived}
        header="Fees Waived"
        labels={labels.feesWaived}
        onToggleFilter={onToggleFilter}
        type="feesWaived"
      />
    </Grid>
  </Grid>
);

const styles = {};

const handlers = {
  onToggleFilter: ({ filters, updateFilters }) => (type, filter) =>
    updateFilters({
      ...filters,
      [type]: {
        ...filters[type],
        [filter]: !filters[type][filter]
      }
    })
};

export default compose(
  withStyles(styles),
  withHandlers(handlers)
)(Filters);
