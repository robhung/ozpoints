import { createMuiTheme } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';
import grey from '@material-ui/core/colors/grey';
import red from '@material-ui/core/colors/red';

// All the following keys are optional.
// We try our best to provide a great default value.

// eslint-disable-next-line no-unused-vars
const ozbargainOrange = '#CC6703';

const theme = createMuiTheme({
  palette: {
    primary: orange,
    secondary: grey,
    error: red,
    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexis within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2
  }
});

export default theme;
