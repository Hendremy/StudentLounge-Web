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
import AppUser from './models/appUser';

export const ApiServicesContext = React.createContext();
export const AppUserContext = React.createContext();

export default function App() {
  //const apiUrl = "https://localhost:44321";
  const apiUrl = "https://porthos-intra.cg.helmo.be/e190449";
  const [storedUser] = useAtom(userAtom);
  const user = storedUser !== null ? new AppUser(storedUser) : null;

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
      <ApiServicesContext.Provider value={apiServices}>
        <AppUserContext.Provider value={user}>
          <AppRouter>
            <AppHeader/>
          </AppRouter>
        </AppUserContext.Provider>
      </ApiServicesContext.Provider>
    </ThemeProvider>
  );
}

