import AppointmentList from "../components/organisms/AppointmentList";
import {useContext, useState} from 'react';
import { ApiServicesContext } from "../App";
import CalendarHub from "../components/organisms/CalendarHub";

export default function CalendarPage(){
    const studentApiServices = useContext(ApiServicesContext)[roles.student];
    const appointmentRepository = studentApiServices.appointmentRepository;
    const agendaRepository = studentApiServices.agendaRepository;

    return (
        <Grid container spacing={2} sx={gridStyle}>
            <Grid item xs={2}>
                <AppointmentList appointmentRepository={appointmentRepository}/>
            </Grid>
            <Grid item xs={10}>
                <CalendarHub
                    agendaRepository={agendaRepository}
                />
            </Grid>
        </Grid>
    );
}