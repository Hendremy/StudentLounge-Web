import AppHeader from './components/organisms/AppHeader';
import AppRouter from './AppRouter';
import {ThemeProvider} from '@mui/material';
import {theme} from './appTheme';

export default function App() {

  return (
    <ThemeProvider theme={theme}>
      <AppRouter>
          <AppHeader/>
      </AppRouter>
    </ThemeProvider>
  );
}

