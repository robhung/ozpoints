import React from "react";
import { compose, withHandlers } from "recompose";
import Moment from "moment";

import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import { withStyles } from "@material-ui/core/styles";

import cards from "../../data";

const ResultsTable = ({ classes }) => (
  <Paper className={classes.root}>
    <Table className={classes.table}>
      <TableHead>
        <TableRow>
          <TableCell>Card</TableCell>
          <TableCell align="right">Type</TableCell>
          <TableCell align="right">Rewards Program (Fee)</TableCell>
          <TableCell align="right">Bonus Points</TableCell>
          <TableCell align="right">Spend Required</TableCell>
          <TableCell align="right">Days To Spend</TableCell>
          <TableCell align="right">Annual Fee</TableCell>
          <TableCell align="right">Promotion End</TableCell>
          <TableCell align="right" />
        </TableRow>
      </TableHead>
      <TableBody>
        {cards.map((card, index) => (
          <TableRow key={index}>
            <TableCell component="th" scope="row">
              {`${card.issuer} ${card.name}`}
            </TableCell>
            <TableCell align="right">{card.type}</TableCell>
            <TableCell align="right">
              {card.rewards.map(
                (reward, i) =>
                  i > 0
                    ? `, ${reward.type} (${reward.fee})`
                    : `${reward.type} (${reward.fee})`
              )}
            </TableCell>
            <TableCell align="right">{card.promotion.points}</TableCell>
            <TableCell align="right">{card.promotion.spend}</TableCell>
            <TableCell align="right">{card.promotion.dayLimit}</TableCell>
            <TableCell align="right">
              <span className={card.annual.waived && classes.waived}>
                {card.annual.fee}
              </span>
              {card.annual.waived && " (Waived)"}
            </TableCell>
            <TableCell align="right">
              {Moment(card.promotion.endDate).format("ll")}
            </TableCell>
            <TableCell align="right">
              <Button
                variant="contained"
                color="secondary"
                href={card.link}
                size="small"
                className={classes.button}
              >
                Apply
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  },
  button: {
    margin: theme.spacing.unit
  },
  waived: {
    textDecoration: "line-through"
  }
});

const handlers = {};

export default compose(
  withStyles(styles),
  withHandlers(handlers)
)(ResultsTable);
