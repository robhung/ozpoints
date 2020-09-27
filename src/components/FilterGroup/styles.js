import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.up('xs')]: {
      margin: theme.spacing(0),
    },
    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing(1),
      borderRadius: 5,
    },
    background: theme.palette.primary.lighter,
  },
  header: {
    width: '100%',
    background: theme.palette.primary.light,
    [theme.breakpoints.up('sm')]: {
      borderRadius: 5,
    },
  },
  headerText: {
    [theme.breakpoints.up('xs')]: {
      textAlign: 'center',
    },
    [theme.breakpoints.up('sm')]: {
      textAlign: 'left',
    },
    fontWeight: theme.typography.fontWeightMedium,
    padding: theme.spacing(0.25, 1.25),
  },
}));

export default useStyles;
