import AppHeader from './components/organisms/AppHeader';
import AppRouter from './AppRouter.jsx';
import {ThemeProvider} from '@mui/material';
import {theme} from './AppTheme'

export default function App() {
  return (
      <>
        <AppRouter>
          <ThemeProvider theme={theme}>
            <AppHeader/>
          </ThemeProvider>
        </AppRouter>
      </>
  );
}

