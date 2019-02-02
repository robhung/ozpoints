import React from "react";
import { compose, withHandlers } from "recompose";

import Grid from "@material-ui/core/Grid";

import { withStyles } from "@material-ui/core/styles";

import FilterGroup from "../FilterGroup";

const Filters = ({ classes, filters, onToggleFilter }) => (
  <Grid component="section" container justify="center">
    <p>Filters</p>
    <Grid container>
      <FilterGroup
        filters={filters.bank}
        label="Bank"
        onToggleFilter={onToggleFilter}
        type="bank"
      />
      <FilterGroup
        filters={filters.type}
        label="Card Type"
        onToggleFilter={onToggleFilter}
        type="type"
      />
      <FilterGroup
        filters={filters.rewards}
        label="Rewards"
        onToggleFilter={onToggleFilter}
        type="rewards"
      />
      <FilterGroup
        filters={filters.feesWaived}
        label="Fees Waived"
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
