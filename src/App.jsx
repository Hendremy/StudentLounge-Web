import AppHeader from './components/organisms/AppHeader';
import AppRouter from './AppRouter';
import GoogleAuth from "./GoogleAuth";
import {ThemeProvider} from '@mui/material';
import {theme} from './AppTheme';

export default function App() {
  return (
        <GoogleAuth>
            <AppRouter>
              <ThemeProvider theme={theme}>
                <AppHeader/>
              </ThemeProvider>
            </AppRouter>
        </GoogleAuth>
  );
}

