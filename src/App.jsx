import AppHeader from './components/organisms/AppHeader';
import AppRouter from './AppRouter';
import GoogleAuth from "./GoogleAuth";
import {ThemeProvider} from '@mui/material';
import {theme} from './appTheme';
import { useEffect } from 'react';
import { googleLogout } from '@react-oauth/google';
import { connectByGoogle } from './repositories/StudentLoungeAPI';

export default function App() {

  return (
    <ThemeProvider theme={theme}>
      <AppRouter>
          <AppHeader/>
      </AppRouter>
    </ThemeProvider>
  );
}

