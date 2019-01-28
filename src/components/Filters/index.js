import React from "react";
import injectSheet from "react-jss";
import { compose, withHandlers } from "recompose";

import Grid from "@material-ui/core/Grid";

import FilterGroup from "../FilterGroup";

const Filters = ({ classes, filters, onToggleFilter }) => (
  <Grid component="section" container className={classes.filters}>
    <p>Filters</p>
    <Grid container>
      <FilterGroup
        filters={filters}
        onToggleFilter={onToggleFilter}
        type="cardIssuer"
      />
      <FilterGroup
        filters={filters}
        onToggleFilter={onToggleFilter}
        type="cardType"
      />
      <FilterGroup
        filters={filters}
        onToggleFilter={onToggleFilter}
        type="rewards"
      />
      <FilterGroup
        filters={filters}
        onToggleFilter={onToggleFilter}
        type="feesWaived"
      />
    </Grid>
  </Grid>
);

const styles = {
  filters: {
    color: "white"
  }
};

const handlers = {
  onToggleFilter: ({ filters, updateFilters }) => string => {
    const [filterType, filter] = string.split(".");
    const boolean = filters[filterType][filter];

    updateFilters({
      ...filters,
      [filterType]: {
        ...filters[filterType],
        [filter]: !boolean
      }
    });
  }
};

export default compose(
  injectSheet(styles),
  withHandlers(handlers)
)(Filters);
