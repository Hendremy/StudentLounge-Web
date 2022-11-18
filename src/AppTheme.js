import {createTheme} from '@mui/material'

const primary = "#5842DE";
const secondary = "#241292";
const iconActive = "#8349FF";
const linkActive = "#68FFF6";

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

export {primary, secondary, theme, iconActive, linkActive};

