import { AppBar } from "@mui/material";

export default function NavBar(appName){

  return (
      <AppBar position="static">
        <Container maxwidth="x1">
          <Title text={appName}/>
          <NavMenu></NavMenu>
        </Container>
      </AppBar>
  )
}