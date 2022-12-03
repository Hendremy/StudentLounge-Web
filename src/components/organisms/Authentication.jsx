import {Paper} from "@mui/material";
import Title from "../atoms/Title";
import {palette} from "../../appTheme";
import React from "react";
import GridCentered from "../atoms/GridCentered";
import AuthenticationForm from "../molecules/AuthenticationForm";

export default function Authentication() {
    const paperStyle = {
        padding: 20,
        height:'auto',
        width:280,
        margin:"20vh auto",
        backgroundColor: palette.primary,
        color:'white',
        borderRadius:25
    };

    return (
    <GridCentered>
        <Paper elevation ={10} style={paperStyle}>
            <Title text={"Connexion"}/>
            <AuthenticationForm/>
        </Paper>
    </GridCentered>);
}