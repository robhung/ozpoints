import { createMuiTheme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import red from '@material-ui/core/colors/red';

// All the following keys are optional.
// We try our best to provide a great default value.

const ozBargainTheme = {
  lighter: '#fffae8',
  light: '#fff0c0',
  mainLighest: '#f7a859',
  mainLighter: '#e69c53',
  mainLight: '#d9934e',
  main: '#cd6702',
  dark: '#8f4801',
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
    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexis within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
  typography: {
    useNextVariants: true,
    fontWeightHeavy: 600,
  },
});

export default theme;
