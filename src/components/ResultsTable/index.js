import React from 'react';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { withStyles } from '@material-ui/core/styles';

import CheckFilter from '../CheckFilter';
import ResultsTableRow from '../ResultsTableRow';

import cards from '../../data';

const ResultsTable = ({
  classes,
  filters,
  filteredBank,
  filteredType,
  filteredRewards,
}) => (
  <Grid component="section" container>
    <Paper className={classes.paper}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Card</TableCell>
            <TableCell align="right">Type</TableCell>
            <TableCell align="right">Rewards Program (Fee)</TableCell>
            <TableCell align="right">Bonus Points</TableCell>
            <TableCell align="right">Bonus Extras</TableCell>
            <TableCell align="right">Spend Required ($)</TableCell>
            <TableCell align="right">Days To Spend</TableCell>
            <TableCell align="right">Annual Fee</TableCell>
            <TableCell align="right">Foreign Fee (%)</TableCell>
            <TableCell align="right">Min. Income</TableCell>
            <TableCell align="right">Previous Holder (Months)</TableCell>
            <TableCell align="right">Promo Expiry</TableCell>
            <TableCell align="center">Link</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cards.map(card => (
            <CheckFilter
              key={`${card.name} ${card.rewards[0].type}`}
              card={card}
              filters={filters}
              filteredBank={filteredBank}
              filteredType={filteredType}
              filteredRewards={filteredRewards}
            >
              <ResultsTableRow card={card} />
            </CheckFilter>
          ))}
        </TableBody>
      </Table>
    </Paper>
  </Grid>
);

const styles = theme => ({
  paper: {
    width: '100%',
    overflowX: 'auto',
    margin: theme.spacing(3),
  },
  table: {
    minWidth: 700,
  },
  waived: {
    textDecoration: 'line-through',
  },
});

export default withStyles(styles)(ResultsTable);
