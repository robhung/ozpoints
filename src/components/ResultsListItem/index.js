import React, { useState } from 'react';
import { format } from 'date-fns';

import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import CreditCard from '@material-ui/icons/CreditCard';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Paper from '@material-ui/core/Paper';
import StarBorder from '@material-ui/icons/StarBorder';

import useStyles from './styles';

const ResultsListItem = ({ card }) => {
  const classes = useStyles();
  const [open, updateOpen] = useState(false);

  return (
    <Paper className={classes.paper}>
      <List>
        <ListItem
          button
          classes={{ button: classes.button }}
          onClick={() => updateOpen(!open)}
        >
          <ListItemIcon>
            <CreditCard />
          </ListItemIcon>
          <ListItemText inset primary={card.name} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem className={classes.nested}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText
                inset
                primary="Type"
                secondary={card.type}
                secondaryTypographyProps={{
                  className: classes.listItemTextSecondary,
                  variant: 'body1',
                }}
                classes={{
                  root: classes.listItemTextRoot,
                }}
              />
            </ListItem>

            <ListItem className={classes.nested}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText
                inset
                primary="Bonus Points"
                secondary={card.promotion.points.toLocaleString()}
                secondaryTypographyProps={{
                  className: classes.listItemTextSecondary,
                  variant: 'body1',
                }}
                classes={{
                  root: classes.listItemTextRoot,
                }}
              />
            </ListItem>

            <ListItem className={classes.nested}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText
                inset
                primary="Bonus Extras"
                secondary={
                  card.promotion.extras.length > 0
                    ? card.promotion.extras.map((extra, i) =>
                        i > 0 ? `, ${extra}` : extra
                      )
                    : '---'
                }
                secondaryTypographyProps={{
                  className: classes.listItemTextSecondary,
                  variant: 'body1',
                }}
                classes={{
                  root: classes.listItemTextRoot,
                }}
              />
            </ListItem>

            <ListItem className={classes.nested}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText
                inset
                primary="Spend Required"
                secondary={card.promotion.spend.toLocaleString()}
                secondaryTypographyProps={{
                  className: classes.listItemTextSecondary,
                  variant: 'body1',
                }}
                classes={{
                  root: classes.listItemTextRoot,
                }}
              />
            </ListItem>

            <ListItem className={classes.nested}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText
                inset
                primary="Days To Spend"
                secondary={card.promotion.dayLimit}
                secondaryTypographyProps={{
                  className: classes.listItemTextSecondary,
                  variant: 'body1',
                }}
                classes={{
                  root: classes.listItemTextRoot,
                }}
              />
            </ListItem>

            <ListItem className={classes.nested}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText
                inset
                primary="Annual Fee"
                secondary={
                  <>
                    <span
                      className={
                        card.annual.waived ? classes.waived : undefined
                      }
                    >
                      {card.annual.fee}
                    </span>
                    {card.annual.waived && ' (0)'}
                  </>
                }
                secondaryTypographyProps={{
                  className: classes.listItemTextSecondary,
                  variant: 'body1',
                }}
                classes={{
                  root: classes.listItemTextRoot,
                }}
              />
            </ListItem>

            <ListItem className={classes.nested}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText
                inset
                primary="Foreign Fee %"
                secondary={card.foreign === 0 ? 'Waived' : card.foreign}
                secondaryTypographyProps={{
                  className: classes.listItemTextSecondary,
                  variant: 'body1',
                }}
                classes={{
                  root: classes.listItemTextRoot,
                }}
              />
            </ListItem>

            <ListItem className={classes.nested}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText
                inset
                primary="Min. Income"
                secondary={card.income.toLocaleString()}
                secondaryTypographyProps={{
                  className: classes.listItemTextSecondary,
                  variant: 'body1',
                }}
                classes={{
                  root: classes.listItemTextRoot,
                }}
              />
            </ListItem>

            <ListItem className={classes.nested}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText
                inset
                primary="Previous Holder Limit (Months)"
                secondary={card.previous}
                secondaryTypographyProps={{
                  className: classes.listItemTextSecondary,
                  variant: 'body1',
                }}
                classes={{
                  root: classes.listItemTextRoot,
                }}
              />
            </ListItem>

            <ListItem className={classes.nested}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText
                inset
                primary="Promo Expiry"
                secondary={
                  card.promotion.endDate
                    ? format(card.promotion.endDate, 'PP')
                    : '---'
                }
                secondaryTypographyProps={{
                  className: classes.listItemTextSecondary,
                  variant: 'body1',
                }}
                classes={{
                  root: classes.listItemTextRoot,
                }}
              />
            </ListItem>

            <ListItem className={classes.nested}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText
                inset
                primary="Link"
                secondary={
                  <Button
                    variant="contained"
                    target="_blank"
                    color="secondary"
                    href={card.link}
                    size="small"
                  >
                    Apply
                  </Button>
                }
                secondaryTypographyProps={{
                  className: classes.listItemTextSecondary,
                  variant: 'body1',
                }}
                classes={{
                  root: classes.listItemTextRoot,
                }}
              />
            </ListItem>
          </List>
        </Collapse>
      </List>
    </Paper>
  );
};

export default ResultsListItem;
