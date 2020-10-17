import { createMuiTheme } from "@material-ui/core";
import {
  indigo,
  pink,
  red,
  orange,
  blue,
  green,
  grey,
  amber,
  deepOrange,
} from "@material-ui/core/colors";

const theme = createMuiTheme({
  overrides: {
    MuiAlert: {
      standardSuccess: {
        background: "linear-gradient(45deg, #FF512F 30%, #F50057 90%)",
        borderRadius: 0
      },
      message: {
          marginLeft: 'auto',
      },
      icon: {
        // display: 'none',
        opacity: 0
      }
    },
    MuiButton: {
      root: {
        fontWeight: 500,
      },
      label: {
        textTransform: "capitalize",
      }
    },
    MuiContainer: {
      maxWidthLg: {
        maxWidth: "1440px !important",
      }
    },
    MuiPaper: {
      elevation4: {
        boxShadow: 'none',
      }
    },
    MuiAppBar: {
      colorPrimary: {
        color: '#000',
        backgroundColor: grey[400],
        marginTop: '18px',
      }
    },
    PrivateTabIndicator: {
      colorSecondary: {
        backgroundColor: 'red',
      }
    },
    MuiTab: {
      root: {
        textTransform: 'none',
      },
      textColorInherit: {
        '&:focus': {
          color: 'red',
        },
      }
    },
    MuiTabPanel: {
      root: {
        padding: 0,
      }
    },
  },
  palette: {
    common: {
      black: "#000",
      white: "#fff",
    },
    type: "light",
    primary: {
      light: deepOrange[300],
      main: deepOrange[500],
      dark: deepOrange[700],
      contrastText: "#fff",
    },
    secondary: {
      light: amber["A200"],
      main: amber["A400"],
      dark: amber["700"],
      contrastText: "#fff",
    },
    error: {
      light: red[300],
      main: red[500],
      dark: red[700],
      contrastText: "#fff",
    },
    warning: {
      light: orange[300],
      main: orange[500],
      dark: orange[700],
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
    info: {
      light: blue[300],
      main: blue[500],
      dark: blue[700],
      contrastText: "#fff",
    },
    success: {
      light: green[300],
      main: green[500],
      dark: green[700],
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
    grey: {
      50: grey[50],
      100: grey[100],
      200: grey[200],
      300: grey[300],
      400: grey[400],
      500: grey[500],
      600: grey[600],
      700: grey[700],
      800: grey[800],
      900: grey[900],
      A100: grey["A100"],
      A200: grey["A200"],
      A400: grey["A400"],
      A700: grey["A700"],
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)",
    },
    divider: "rgba(0, 0, 0, 0.12)",
    background: {
      paper: "#fff",
      default: grey[50],
    },
    action: {
      active: "rgba(0, 0, 0, 0.54)",
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: "0.04",
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: "0.08",
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: "0.38",
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: "0.12",
      activatedOpacity: "0.12",
    },
  },
  typography: {
    htmlFontSize: 16,
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
      fontWeight: 300,
      fontSize: "6rem",
      lineHeight: "1.167",
      letterSpacing: "-0.01562em",
    },
    h2: {
      fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
      fontWeight: 300,
      fontSize: "3.75rem",
      lineHeight: "1.2",
      letterSpacing: "-0.00833em",
    },
    h3: {
      fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
      fontWeight: 400,
      fontSize: "3rem",
      lineHeight: "1.167",
      letterSpacing: "0em",
    },
    h4: {
      fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
      fontWeight: 400,
      fontSize: "2.125rem",
      lineHeight: "1.235",
      letterSpacing: "0.00735em",
    },
    h5: {
      fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
      fontWeight: 400,
      fontSize: "1.5rem",
      lineHeight: "1.334",
      letterSpacing: "0em",
    },
    h6: {
      fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
      fontWeight: 500,
      fontSize: "1.25rem",
      lineHeight: "1.6",
      letterSpacing: "0.0075em",
    },
    subtitle1: {
      fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: "1.75",
      letterSpacing: "0.00938em",
    },
    subtitle2: {
      fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
      fontWeight: 500,
      fontSize: "0.875rem",
      lineHeight: "1.57",
      letterSpacing: "0.00714em",
    },
    body1: {
      fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: "1.5",
      letterSpacing: "0.00938em",
    },
    body2: {
      fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
      fontWeight: 400,
      fontSize: "0.875rem",
      lineHeight: "1.43",
      letterSpacing: "0.01071em",
    },
    button: {
      fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
      fontWeight: 500,
      fontSize: "0.875rem",
      lineHeight: "1.75",
      letterSpacing: "0.02857em",
      textTransform: "uppercase",
    },
    caption: {
      fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
      fontWeight: 400,
      fontSize: "0.75rem",
      lineHeight: "1.66",
      letterSpacing: "0.03333em",
    },
    overline: {
      fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
      fontWeight: 400,
      fontSize: "0.75rem",
      lineHeight: "2.66",
      letterSpacing: "0.08333em",
      textTransform: "uppercase",
    },
  },
  spacing: 10,
  shape: {
    borderRadius: 4,
  },
  zIndex: {
    mobileStepper: 1000,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
});

export default theme;
