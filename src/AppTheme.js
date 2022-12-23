import {createTheme} from '@mui/material/styles'

const palette = {
  primary: "#5842DE",
  secondary: "#241292",
  iconActive: "#8aeaff",
  blue: "#218aff",
  grey: "#808080",
  white:'#FFFFFF',
  calendars : ['purple','blue','primary','green']
};

const theme = createTheme({
  status: {
    tamere: '#FFFFFF'
  },
  palette: {
    primary: {
      main: palette.primary,
      dark: palette.secondary
    },
    secondary: {
      main: palette.secondary
    }
  },
  typography: {
    fontFamily: [
      'Exo 2','"Segoe UI"'
    ],
  }
});

export {palette, theme};

