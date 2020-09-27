import React from 'react';
import startCase from 'lodash/startCase';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';

import useStyles from './styles';

const FilterGroup = ({ header, filters, labels, onToggleFilter, type }) => {
  const classes = useStyles();

  return (
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
};

export default FilterGroup;
