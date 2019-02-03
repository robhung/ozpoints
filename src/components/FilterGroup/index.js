import React from "react";
import startCase from "lodash/startCase";

import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import Switch from "@material-ui/core/Switch";

import { withStyles } from "@material-ui/core/styles";

const FilterGroup = ({
  classes,
  header,
  filters,
  labels,
  onToggleFilter,
  type
}) => (
  <Grid
    container
    direction="column"
    alignItems="center"
    item
    xs={6}
    sm={5}
    md={4}
    lg={2}
    className={classes.root}
  >
    <p>{header}</p>
    <FormGroup>
      {labels.map(filter => (
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

const styles = theme => ({
  root: {
    border: "black 1px solid",
    [theme.breakpoints.up("xs")]: {
      margin: theme.spacing.unit * 0
    },
    [theme.breakpoints.up("sm")]: {
      margin: theme.spacing.unit * 1
    },
    [theme.breakpoints.up("md")]: {
      margin: theme.spacing.unit * 2
    },
    [theme.breakpoints.up("lg")]: {
      margin: theme.spacing.unit * 3
    },
    [theme.breakpoints.up("xl")]: {
      margin: theme.spacing.unit * 4
    }
  }
});

export default withStyles(styles)(FilterGroup);
