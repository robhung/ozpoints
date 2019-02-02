import React from "react";
import { compose, withProps } from "recompose";
import Moment from "moment";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import { withStyles } from "@material-ui/core/styles";

import cards from "../../data";

const ResultsTable = ({
  classes,
  filters,
  filteredIssuer,
  filteredType,
  filteredRewards
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
            <TableCell align="right">Spend Required</TableCell>
            <TableCell align="right">Days To Spend</TableCell>
            <TableCell align="right">Annual Fee</TableCell>
            <TableCell align="right">Foreign Fee (%)</TableCell>
            <TableCell align="right">Min. Income</TableCell>
            <TableCell align="right">Previous Holder Limit (Months)</TableCell>
            <TableCell align="right">Promotion End</TableCell>
            <TableCell align="center">Link</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cards.map((card, index) => {
            let showCard = true;

            // TODO: Refactor Logic
            // NB: Used letter variables to reduce amount of lines, POOR LEGIBILITY
            const cardRewardsHasFilter = new Set(
              card.rewards.map(reward => filteredRewards.has(reward.type))
            );

            // Conditions
            const A0 = filteredIssuer.size > 0;
            const B0 = filteredType.size > 0;
            const C0 = filteredRewards.size > 0;
            const D0 = filters.feesWaived.Annual;
            const E0 = filters.feesWaived.Foreign;
            // Checks
            const A1 = filteredIssuer.has(card.issuer);
            const B1 = filteredType.has(card.type);
            const C1 = cardRewardsHasFilter.has(true);
            const D1 = D0 && card.annual.waived;
            const E1 = E0 && card.foreign === 0;

            // Any Filters
            if (A0 || B0 || C0 || D0 || E0) {
              showCard = A1 || B1 || C1 || D1 || E1;
            }

            // Two Filters (10 combinations)
            if (A0 && B0) {
              showCard = A1 && B1;
            }
            if (A0 && C0) {
              showCard = A1 && C1;
            }
            if (A0 && D0) {
              showCard = A1 && D1;
            }
            if (A0 && E0) {
              showCard = A1 && E1;
            }
            if (B0 && C0) {
              showCard = B1 && C1;
            }
            if (B0 && D0) {
              showCard = B1 && C1;
            }
            if (B0 && E0) {
              showCard = B1 && E1;
            }
            if (C0 && D0) {
              showCard = C1 && D1;
            }
            if (C0 && E0) {
              showCard = C1 && E1;
            }
            if (D0 && E0) {
              showCard = D1 && E1;
            }

            // Three Filters (10 combinations)
            if (A0 && B0 && C0) {
              showCard = A1 && B1 && C1;
            }
            if (A0 && B0 && D0) {
              showCard = A1 && B1 && D1;
            }
            if (A0 && B0 && E0) {
              showCard = A1 && B1 && E1;
            }
            if (A0 && C0 && D0) {
              showCard = A1 && D1 && D1;
            }
            if (A0 && C0 && E0) {
              showCard = A1 && C1 && E1;
            }
            if (A0 && D0 && E0) {
              showCard = A1 && D1 && E1;
            }
            if (B0 && C0 && D0) {
              showCard = B1 && C1 && D1;
            }
            if (B0 && C0 && E0) {
              showCard = B1 && C1 && E1;
            }
            if (B0 && D0 && E0) {
              showCard = B1 && D1 && E1;
            }
            if (C0 && D0 && E0) {
              showCard = C1 && D1 && E1;
            }

            // Four Filters (5 combinations)
            if (A0 && B0 && C0 && D0) {
              showCard = A1 && B1 && C1 && D1;
            }
            if (A0 && B0 && C0 && E0) {
              showCard = A1 && B1 && C1 && E1;
            }
            if (A0 && B0 && D0 && E0) {
              showCard = A1 && B1 && D1 && E1;
            }
            if (A0 && C0 && D0 && E0) {
              showCard = A1 && C1 && D1 && E1;
            }
            if (B0 && C0 && D0 && E0) {
              showCard = B1 && C1 && D1 && E1;
            }

            // Five Filters
            if (A0 && B0 && C0 && D0 && E0) {
              showCard = A1 && B1 && C1 && D1 && E1;
            }

            return (
              showCard && (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {`${card.issuer} ${card.name}`}
                  </TableCell>
                  <TableCell align="right">{card.type}</TableCell>
                  <TableCell align="right">
                    {card.rewards.map(
                      (reward, i) =>
                        i > 0 ? (
                          <span>
                            <br />
                            {reward.type} ({reward.fee})
                          </span>
                        ) : (
                          `${reward.type} (${reward.fee})`
                        )
                    )}
                  </TableCell>
                  <TableCell align="right">{card.promotion.points}</TableCell>
                  <TableCell align="right">{card.promotion.spend}</TableCell>
                  <TableCell align="right">{card.promotion.dayLimit}</TableCell>
                  <TableCell align="right">
                    <span
                      className={
                        card.annual.waived ? classes.waived : undefined
                      }
                    >
                      {card.annual.fee}
                    </span>
                    {card.annual.waived && " (0)"}
                  </TableCell>
                  <TableCell align="right">
                    {card.foreign === 0 ? "Waived" : card.foreign}
                  </TableCell>
                  <TableCell align="right">{card.income}</TableCell>
                  <TableCell align="right">{card.previous}</TableCell>
                  <TableCell align="right">
                    {Moment(card.promotion.endDate).format("ll")}
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
              )
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  </Grid>
);

const styles = theme => ({
  paper: {
    width: "100%",
    overflowX: "auto",
    margin: theme.spacing.unit * 3
  },
  table: {
    minWidth: 700
  },
  waived: {
    textDecoration: "line-through"
  }
});

export default compose(
  withStyles(styles),
  withProps(({ filters }) => {
    const filteredIssuer = new Set(
      Object.entries(filters.issuer)
        .filter(([key, value]) => value)
        .map(([key]) => key)
    );
    const filteredType = new Set(
      Object.entries(filters.type)
        .filter(([key, value]) => value)
        .map(([key]) => key)
    );
    const filteredRewards = new Set(
      Object.entries(filters.rewards)
        .filter(([key, value]) => value)
        .map(([key]) => key)
    );

    return {
      filteredIssuer,
      filteredType,
      filteredRewards
    };
  })
)(ResultsTable);
