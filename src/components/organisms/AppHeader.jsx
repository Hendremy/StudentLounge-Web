import NavMenu from '../molecules/NavMenu'
import { AppBar, Toolbar } from "@mui/material";
import Title from '../atoms/Title';
import Profile from '../molecules/Profile';

export default function AppHeader({appName}){

  return (
      <AppBar position="static" color="primary">
        <Toolbar maxwidth="x1">
          <Title text={appName} />
          <NavMenu/>
          <Profile/>
        </Toolbar>
      </AppBar>
  )
}