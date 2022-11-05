import NavMenu from '../molecules/NavMenu'
import Title from '../atoms/Title'
import { AppBar, Container } from "@mui/material";

export default function AppHeader(appName){

  return (
      <AppBar position="static">
        <Container maxwidth="x1">
          <Title text={appName}/>
          <NavMenu></NavMenu>
        </Container>
      </AppBar>
  )
}