import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  paper: {
    width: '100%',
    overflowX: 'auto',
    margin: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
  },
  button: {
    '&:focus': {
      backgroundColor: 'inherit',
    },
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.08)',
    },
  },
  listItemTextRoot: {
    display: 'flex',
    alignItems: 'center',
  },
  listItemTextSecondary: {
    flex: 1,
    textAlign: 'right',
  },
  waived: {
    textDecoration: 'line-through',
  },
}));

export default useStyles;
