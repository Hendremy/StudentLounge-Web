import { Box, Button, colors, Grid, Paper } from "@mui/material";
import {palette} from "../../AppTheme";
import HubHeader from "../molecules/HubHeader";
import { useState, useEffect } from "react";
import ScheduleEvent from "../../models/scheduleEvent";
import UploadCalendarButton from './UploadCalendarButton';
import Schedule from "../molecules/Schedule";
import { appointmentsAtom } from "../../stores/userStore";
import { useAtom } from "jotai";
import Agenda from "../../models/agenda";

export default function CalendarHub({agendaRepository}){
    const [agendas, setAgendas] = useState([]);
    const [scheduleEvents, setScheduleEvents] = useState([]);
    const [appointments] = useAtom(appointmentsAtom);

    const updateAgendas = (agendas) => setAgendas(agendas);

    useEffect(() => {
        agendaRepository.getUserAgendas()
            .then(agendas => setAgendas(agendas));
    },[])

    useEffect(() => {
        let allAgendas = [...agendas, Agenda.fromAppointments(appointments)];
        let agendaIndex = 0;
        let colors = ['purple','blue','primary','green'];
        var allScheduleEvents = allAgendas.map(
            agenda => {
                let color = colors[agendaIndex % colors.length];
                agendaIndex++;
                return agenda.agendaEvents.map(event => new ScheduleEvent({
                    agendaEvent: event, groupName: agenda.name, color: color
                }));
            }
        );
        var calendarEvents = allScheduleEvents.length > 0 ? allScheduleEvents.reduce((events = [], scheduleEvents) => {
            events.push(...scheduleEvents);
            return events;
        }) : [];
        setScheduleEvents(calendarEvents);
    },[agendas, appointments])

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
                <Schedule
                    scheduleEvents={scheduleEvents}
                />
            </Box>
        </Paper>
    );
}