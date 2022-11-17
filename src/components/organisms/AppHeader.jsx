import NavMenu from '../molecules/NavMenu'
import Title from '../atoms/Title'
import { AppBar, Container } from "@mui/material";

export default function AppHeader(appName){

  return (
      <AppBar position="static" color="secondary">
        <Container maxwidth="x1">
          
          <NavMenu></NavMenu>
        </Container>
      </AppBar>
  )
}