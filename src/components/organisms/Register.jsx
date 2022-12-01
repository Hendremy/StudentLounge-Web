import {Paper, ThemeProvider} from "@mui/material";
import {primary, theme} from "../../AppTheme";
import Title from "../atoms/Title";
import GridCentered from "../atoms/GridCentered";
import RegisterForm from "../molecules/RegisterForm";

export default function Register() {
    const paperStyle = {
        padding: 20,
        height:'auto',
        width:280,
        backgroundColor:primary,
        color:'white',
        borderRadius:25
    };


    return (
        <GridCentered>
            <Paper elevation ={10} style={paperStyle}>
                <ThemeProvider theme={theme}>
                    <Title text={"Inscription"}/>
                </ThemeProvider>
                <RegisterForm/>
            </Paper>
        </GridCentered>
    );
}