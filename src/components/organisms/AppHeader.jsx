import NavMenu from '../molecules/NavMenu'
import { AppBar, Box, Toolbar } from "@mui/material";
import Title from '../atoms/Title';
import Profile from '../molecules/Profile';

export default function AppHeader({appName}){

  const style = {
    display: "flex",
    flex: 1,
    flexDirection:"row", 
    alignItems: "center", 
    justifyContent:"space-between",
  };


  return (
      <AppBar position="static" color="secondary">
        <Toolbar maxwidth="x1">
          <Box sx={style}>
            <Title text={appName} />
            <NavMenu/>
            <Profile/>
          </Box>
        </Toolbar>
      </AppBar>
  )
}