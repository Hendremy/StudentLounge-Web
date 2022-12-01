import {createTheme} from '@mui/material'

const primary = "#5842DE";
const secondary = "#241292";
const iconActive = "#8aeaff";

const theme = createTheme({
    palette: {
      primary: {
        main: primary,
        dark: secondary
      },
      secondary: {
        main: secondary
      }
    },
    typography: {
      fontFamily: [
        'Gugi','Exo 2'
      ]
    }
});

export {primary, secondary, theme, iconActive};

