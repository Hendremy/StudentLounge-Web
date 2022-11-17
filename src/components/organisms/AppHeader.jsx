import MenuNav from '../molecules/MenuNav'
import { AppBar, Box, Toolbar } from "@mui/material";
import Title from '../atoms/Title';
import AuthNav from '../molecules/AuthNav';

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
            <MenuNav/>
            <AuthNav/>
          </Box>
        </Toolbar>
      </AppBar>
  )
}