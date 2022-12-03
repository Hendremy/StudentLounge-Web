import AppHeader from './components/organisms/AppHeader';
import AppRouter from './AppRouter';
import GoogleAuth from "./GoogleAuth";
import {ThemeProvider} from '@mui/material';
import {theme} from './appTheme';

export default function App() {
  return (
        <GoogleAuth>
          <ThemeProvider theme={theme}>
            <AppRouter>
                <AppHeader/>
            </AppRouter>
          </ThemeProvider>
        </GoogleAuth>
  );
}

