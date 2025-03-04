import AppointmentList from "../components/organisms/AppointmentList";
import {useContext, useState} from 'react';
import { ApiServicesContext } from "../App";
import { Grid } from '@mui/material';
import roles from "../models/roles";
import CalendarHub from "../components/organisms/CalendarHub";

export default function CalendarPage(){
    const studentApiServices = useContext(ApiServicesContext)[roles.student];
    const appointmentRepository = studentApiServices.appointmentRepository;
    const agendaRepository = studentApiServices.agendaRepository;
    const tutoringRepository = studentApiServices.tutoringRepository;

    const gridStyle = {
        height: 'auto',
        margin:"5vh auto",
        minHeight:'80vh'
    }

    return (
        <Grid container spacing={2} sx={gridStyle}>
            <Grid item xs={2}>
                <AppointmentList
                    appointmentRepository={appointmentRepository} 
                    tutoringRepository={tutoringRepository}
                />
            </Grid>
            <Grid item xs={10}>
                <CalendarHub
                    agendaRepository={agendaRepository}
                    appointmentRepository={appointmentRepository}
                />
            </Grid>
        </Grid>
    );
}