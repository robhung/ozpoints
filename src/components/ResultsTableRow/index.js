import React from 'react';
import { compose } from 'recompose';
import Moment from 'moment';

import Button from '@material-ui/core/Button';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import { withStyles } from '@material-ui/core/styles';

const ResultsTableRow = ({ card, classes }) => (
  <TableRow>
    <TableCell component="th" scope="row">
      {card.name}
    </TableCell>
    <TableCell align="right">{card.type}</TableCell>
    <TableCell align="right">
      {card.rewards.map((reward, rewardIndex) =>
        rewardIndex > 0 ? (
          <span key={reward.type}>
            <br />
            {reward.type} ({reward.fee})
          </span>
        ) : (
          `${reward.type} (${reward.fee})`
        )
      )}
    </TableCell>
    <TableCell align="right">
      {card.promotion.points.toLocaleString()}
    </TableCell>
    <TableCell align="right">
      {card.promotion.extras.length > 0
        ? card.promotion.extras.map((extra, i) =>
            i > 0 ? `, ${extra}` : extra
          )
        : '---'}
    </TableCell>
    <TableCell align="right">{card.promotion.spend.toLocaleString()}</TableCell>
    <TableCell align="right">{card.promotion.dayLimit}</TableCell>
    <TableCell align="right">
      <span className={card.annual.waived ? classes.waived : undefined}>
        {card.annual.fee}
      </span>
      {card.annual.waived && ' (0)'}
    </TableCell>
    <TableCell align="right">
      {card.foreign === 0 ? 'Waived' : card.foreign}
    </TableCell>
    <TableCell align="right">{card.income.toLocaleString()}</TableCell>
    <TableCell align="right">{card.previous}</TableCell>
    <TableCell align="right">
      {Moment(card.promotion.endDate).format('ll')}
    </TableCell>
    <TableCell align="center">
      <Button
        variant="contained"
        target="_blank"
        color="secondary"
        href={card.link}
        size="small"
      >
        Apply
      </Button>
    </TableCell>
  </TableRow>
);

const styles = {
  waived: {
    textDecoration: 'line-through',
  },
};

export default compose(withStyles(styles))(ResultsTableRow);
