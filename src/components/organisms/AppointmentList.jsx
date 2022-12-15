import { Box, List, Paper } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import {palette} from "../../AppTheme";
import ListHeader from '../molecules/ListHeader';

export default function AppointmentList({appointmentRepository}){

    const paperStyle = {
        padding: 20,
        height:'auto',
        backgroundColor:palette.primary,
        color:'white',
        borderRadius:25
    };

    const boxStyle = {
        height: '100%',
        backgroundColor: palette.secondary,
        minHeight:'80vh',
        borderRadius: '5px'
    };

    return(
        <Paper elevation ={10} style={paperStyle}>
            <ListHeader title='Rendez-vous'>
            </ListHeader>
            <Box sx={boxStyle}>
                <List>
                </List>
            </Box>
        </Paper>
    );
}