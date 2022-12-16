import React from 'react';
import AppHeader from './components/organisms/AppHeader';
import AppRouter from './AppRouter';
import {ThemeProvider} from '@mui/material';
import {theme} from './AppTheme';
import AnonymServices from './repositories/anonymServices';
import AdminServices from './repositories/adminServices';
import StudentServices from './repositories/studentServices';
import { useAtom } from 'jotai';
import { userAtom } from './stores/userStore';
import AppUser from './models/appUser';
import roles from './models/roles';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers';

export const ApiServicesContext = React.createContext();
export const AppUserContext = React.createContext();

export default function App() {
  const apiUrl = "https://localhost:44321";
  //const apiUrl = "https://porthos-intra.cg.helmo.be/e190449";
  const [storedUser] = useAtom(userAtom);
  const user = storedUser !== null ? new AppUser(storedUser) : null;

  let apiServices = {
    [roles.anonym] : new AnonymServices({apiUrl: apiUrl})
  };

  if(user){
    if(user.isAdmin){
      apiServices[roles.admin] = new AdminServices({apiUrl: apiUrl, token: user.token});
    }
    if(user.isStudent){
      apiServices[roles.student] = new StudentServices({apiUrl: apiUrl, token: user.token});
    }
  }
  
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <ThemeProvider theme={theme}>
        <ApiServicesContext.Provider value={apiServices}>
          <AppUserContext.Provider value={user}>
            <AppRouter>
              <AppHeader/>
            </AppRouter>
          </AppUserContext.Provider>
        </ApiServicesContext.Provider>
      </ThemeProvider>
    </LocalizationProvider>
  );
}

