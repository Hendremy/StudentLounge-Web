import React from 'react';
import AppHeader from './components/organisms/AppHeader';
import AppRouter from './AppRouter';
import {ThemeProvider} from '@mui/material';
import {theme} from './appTheme';
import AnonymServices from './repositories/anonymServices';
import AdminServices from './repositories/adminServices';
import StudentServices from './repositories/studentServices';
import { useAtom } from 'jotai';
import { userAtom } from './stores/userStore';

export const ApiContext = React.createContext();

export default function App() {
  const apiUrl = "https://porthos-intra.cg.helmo.be/e190449";
  const [user] = useAtom(userAtom);

  let apiServices;

  if(user){
    if(user.isAdmin){
      apiServices = new AdminServices({apiUrl: apiUrl, token: user.token});
    }else if(user.isStudent){
      apiServices = new StudentServices({apiUrl: apiUrl, token: user.token});
    }
  }else{
    apiServices = new AnonymServices({apiUrl: apiUrl});
  }

  return (
    <ThemeProvider theme={theme}>
      <ApiContext.Provider value={apiServices}>
          <AppRouter>
            <AppHeader/>
        </AppRouter>
      </ApiContext.Provider>
    </ThemeProvider>
  );
}

