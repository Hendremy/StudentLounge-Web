import MenuNav from '../molecules/MenuNav'
import {AppBar, Box, Toolbar} from "@mui/material";
import AuthNav from '../molecules/AuthNav';
import {homePath} from "../../AppRouter";
import {NavLink} from "react-router-dom";

export default function AppHeader(){

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
            <NavLink to={homePath} component="div" style={{fontSize:30}}>Student Lounge</NavLink>
            <MenuNav/>
            <AuthNav/>
          </Box>
        </Toolbar>
      </AppBar>
  )
}