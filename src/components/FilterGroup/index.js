import React from 'react';
import startCase from 'lodash/startCase';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';

import { withStyles } from '@material-ui/core/styles';

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
    sm={4}
    md={2}
    lg={2}
    className={classes.root}
  >
    <Grid className={classes.header}>
      <Typography variant="subtitle1" className={classes.headerText}>
        {header}
      </Typography>
    </Grid>
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
    [theme.breakpoints.up('xs')]: {
      margin: theme.spacing.unit * 0
    },
    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing.unit * 1,
      borderRadius: 5
    },
    background: theme.palette.primary.lighter
  },
  header: {
    width: '100%',
    background: theme.palette.primary.light,
    [theme.breakpoints.up('sm')]: {
      borderRadius: 5
    }
  },
  headerText: {
    [theme.breakpoints.up('xs')]: {
      textAlign: 'center'
    },
    [theme.breakpoints.up('sm')]: {
      textAlign: 'left'
    },
    fontWeight: theme.typography.fontWeightMedium,
    padding: '2px 10px'
  }
});

export default withStyles(styles)(FilterGroup);
