import React from "react";
import startCase from "lodash/startCase";

import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import Switch from "@material-ui/core/Switch";

import { withStyles } from "@material-ui/core/styles";

const FilterGroup = ({ classes, filters, label, onToggleFilter, type }) => (
  <Grid container direction="column" alignItems="center" item xs={6} lg>
    <p>{label}</p>
    <FormGroup>
      {Object.keys(filters).map(filter => (
        <FormControlLabel
          key={filter}
          control={
            <Switch
              checked={filters[filter]}
              onChange={() => onToggleFilter(type, filter)}
              value={filter}
            />
          }
          label={startCase(filter)}
        />
      ))}
    </FormGroup>
  </Grid>
);

const styles = {};

export default withStyles(styles)(FilterGroup);
