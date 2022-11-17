import AppHeader from './components/organisms/AppHeader'
import AppMain from './components/organisms/AppMain'
import {createTheme, ThemeProvider} from '@mui/material'

export default function App() {
  const appName = "Student Lounge";

  const theme = createTheme({
    palette: {
      primary: {
        main: "#5842DE"
      },
      secondary: {
        main: "#24119A"
      }
    },
    typography: {
      fontFamily: [
        'Gugi','Exo 2'
      ]
    }
  });

  return (
      <>
      <ThemeProvider theme={theme}>
        <AppHeader appName={appName} />
        <AppMain />
      </ThemeProvider>
      </>
  );
}

