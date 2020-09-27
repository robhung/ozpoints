import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import red from '@material-ui/core/colors/red';

const ozBargainTheme = {
  lighter: '#FFFAE8',
  light: '#FFF0C0',
  mainLightest: '#F7A859',
  mainLighter: '#E69C53',
  mainLight: '#D9934E',
  main: '#CD6702',
  dark: '#8F4801',
};

const theme = createMuiTheme({
  palette: {
    common: {
      black: '#333',
      white: '#F8F8FF',
    },
    primary: ozBargainTheme,
    secondary: grey,
    error: red,
  },
});

export default responsiveFontSizes(theme);
