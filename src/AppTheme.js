import {createTheme} from '@mui/material'
import { fontFamily } from '@mui/system';

const primary = "#5842DE";
const secondary = "#241292";
const iconActive = "#8aeaff";

const palette = {
  primary: "#5842DE",
  secondary: "#241292",
  iconActive: "#8aeaff"
};

const theme = createTheme({
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
      // h4: {
      //   fontFamily: ['Gugi','"Segoe UI']
      // }
    }
});

export {palette, theme};

