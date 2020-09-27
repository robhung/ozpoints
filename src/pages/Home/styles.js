import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  main: {
    minHeight: '100vh',
    background: theme.palette.common.white,
  },
  headerWrapper: {
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(4, 0),
    },
  },
  header: {
    padding: theme.spacing(1.5, 1),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    [theme.breakpoints.only('xs')]: {
      width: '100%',
    },
    [theme.breakpoints.up('sm')]: {
      borderRadius: 5,
    },
    background: theme.palette.primary.main,
  },
  oz: {
    border: `${theme.palette.common.white} 5px solid`,
    borderRadius: 5,
    color: theme.palette.common.white,
    fontWeight: theme.typography.fontWeightMedium,
    [theme.breakpoints.only('xs')]: {
      border: `${theme.palette.common.white} 2.5px solid`,
      lineHeight: theme.typography.h5.lineHeight,
      fontSize: theme.typography.h5.fontSize,
      letterSpacing: theme.typography.h5.letterSpacing,
    },
  },
  points: {
    color: theme.palette.common.white,
    fontWeight: theme.typography.fontWeightMedium,
    [theme.breakpoints.only('xs')]: {
      lineHeight: theme.typography.h5.lineHeight,
      fontSize: theme.typography.h5.fontSize,
      letterSpacing: theme.typography.h5.letterSpacing,
    },
  },
  about: {
    marginTop: 'auto',
    marginLeft: '10%',
    marginRight: '10%',
    [theme.breakpoints.up('lg')]: {
      textAlign: 'center',
    },
  },
  footer: {
    marginBottom: theme.spacing(3),
  },
}));

export default useStyles;
