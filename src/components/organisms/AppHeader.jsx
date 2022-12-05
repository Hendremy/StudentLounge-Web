import MenuNav from './MenuNav'
import {AppBar, Box, Toolbar, Typography} from "@mui/material";
import AuthNav from '../molecules/AuthNav';
import {homePath} from "../../routes/SharedRoutes";
import {NavLink} from "react-router-dom";
import { AppUserContext } from '../../App';
import { useContext } from 'react';

export default function AppHeader(){
  const user = useContext(AppUserContext);

  const style = {
    display: "flex",
    flex: 1,
    flexDirection:"row", 
    alignItems: "center", 
    justifyContent:"space-between",
  };

  return (
      <AppBar position="fixed" color="primary">
        <Toolbar variant={"dense"}>
          <Box sx={style}>
            <NavLink key={'home'} to={homePath} >
              <Typography variant={'h1'} component={'h1'} sx={{fontSize: 30}}>
                Student Lounge
              </Typography>
            </NavLink>
            <MenuNav user={user}/>
            <AuthNav user={user}/>
          </Box>
        </Toolbar>
      </AppBar>
  )
}