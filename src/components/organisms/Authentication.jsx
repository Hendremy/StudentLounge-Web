import {Paper, ThemeProvider} from "@mui/material";
import Title from "../atoms/Title";
import {primary, theme} from "../../AppTheme";
import React from "react";
import GridCentered from "../atoms/GridCentered";
import AuthenticationForm from "../molecules/AuthenticationForm";

export default function Authentication() {
    const paperStyle = {
        padding: 20,
        height:'auto',
        width:280,
        margin:"20vh auto",
        backgroundColor:primary,
        color:'white',
        borderRadius:25
    };

    return (
    <GridCentered>
        <Paper elevation ={10} style={paperStyle}>
            <ThemeProvider theme={theme}>
                <Title text={"Connexion"}/>
            </ThemeProvider>
            <AuthenticationForm/>
        </Paper>
    </GridCentered>);
}