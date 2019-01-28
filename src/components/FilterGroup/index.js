import React from "react";
import injectSheet from "react-jss";
import startCase from "lodash/startCase";

import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import Switch from "@material-ui/core/Switch";

const FilterGroup = ({ classes, filters, onToggleFilter, type }) => (
  <Grid
    container
    direction="column"
    alignItems="center"
    item
    xs={6}
    lg
    className={classes.filterGroup}
  >
    <p>{startCase(type)}</p>
    <FormGroup>
      {Object.keys(filters[type]).map(filter => (
        <FormControlLabel
          key={filter}
          control={
            <Switch
              checked={filters[filter]}
              onChange={() => onToggleFilter(`${type}.${filter}`)}
              value={filter}
            />
          }
          label={startCase(filter)}
          classes={{ label: classes.filterLabel }}
        />
      ))}
    </FormGroup>
  </Grid>
);

const styles = {
  filterGroup: {
    color: "white"
  },
  filterLabel: {
    color: "white"
  }
};

export default injectSheet(styles)(FilterGroup);
