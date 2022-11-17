import AppHeader from './components/organisms/AppHeader'
import AppMain from './components/organisms/AppMain'
import {createTheme, ThemeProvider} from '@mui/material'

export default function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#5842DE"
      },
      secondary: {
        main: "#24119A"
      }
    }
  });

  return (
      <>
      <ThemeProvider theme={theme}>
        <AppHeader appName='Student Lounge' />
        <AppMain />
      </ThemeProvider>
      </>
  );
}

