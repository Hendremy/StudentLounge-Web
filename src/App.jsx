import AppHeader from './components/organisms/AppHeader'
import AppRouter from './AppRouter.jsx';
import {createTheme, ThemeProvider} from '@mui/material'

export default function App() {
  const appName = "Student Lounge";

  const theme = createTheme({
    palette: {
      primary: {
        main: "#FFFFFF",
        dark: "#241292"
      },
      secondary: {
        main: "#5842DE"
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
        <AppRouter>
          <ThemeProvider theme={theme}>
            <AppHeader appName={appName} />
          </ThemeProvider>
        </AppRouter>
      </>
  );
}

