import { Box, Button, CircularProgress, colors, Grid, Paper } from "@mui/material";
import {palette} from "../../AppTheme";
import HubHeader from "../molecules/HubHeader";
import { useState, useEffect } from "react";
import UploadCalendarButton from './UploadCalendarButton';
import { agendasAtom, appointmentsAtom } from "../../stores/userStore";
import { useAtom } from "jotai";
import Schedule from '../molecules/Schedule';
import Calendar from "../../models/calendar";
import HubProgress from "../atoms/HubProgress";

export default function CalendarHub({agendaRepository}){
    const [appointments] = useAtom(appointmentsAtom);
    const [agendas, setAgendas] = useAtom(agendasAtom);
    const [calendar, setCalendar] = useState({
        agendas: agendas,
        appointments: appointments,
        calendarPalette: palette.calendars
    });

    const updateAgendas = (agendas) => {
        setAgendas(agendas);
    }

    useEffect(() => {
        agendaRepository.getUserAgendas()
            .then(agendas => setAgendas(agendas));
    },[])

    useEffect(() => {
        let copyCal = {...calendar};
        copyCal.agendas = agendas;
        setCalendar(copyCal);
    },[agendas])

    useEffect(() => {
        let copyCal = {...calendar};
        copyCal.appointments = appointments;
        setCalendar(copyCal);
    },[appointments])

    const paperStyle = {
        padding: 20,
        height:'auto',
        backgroundColor:palette.primary,
        color:'white',
        borderRadius:25
    };

    const boxStyle = {
        height: '100%',
        backgroundColor: palette.primary,
        minHeight:'80vh',
        padding: '1%'
    };

    return(
        <Paper elevation ={10} style={paperStyle}>
            <HubHeader title={"Horaire"}>
                <UploadCalendarButton agendaRepository={agendaRepository} onCalendarUpdated={updateAgendas} />
            </HubHeader>
            <Box sx={boxStyle}>
                <Schedule scheduleEvents={Calendar.allEvents(calendar)}/>
            </Box>
        </Paper>
    );
}