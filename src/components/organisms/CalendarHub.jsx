import { Box, Button, colors, Grid, Paper } from "@mui/material";
import {palette} from "../../AppTheme";
import HubHeader from "../molecules/HubHeader";
import { useState, useEffect } from "react";
import ScheduleEvent from "../../models/scheduleEvent";
import UploadCalendarButton from './UploadCalendarButton';
import Schedule from "../molecules/Schedule";
export default function CalendarHub({agendaRepository, appointmentRepository}){
    const [agendas, setAgendas] = useState([]);
    const [scheduleEvents, setScheduleEvents] = useState([]);

    const updateAgendas = (agendas) => setAgendas(agendas);

    useEffect(() => {
        agendaRepository.getUserAgendas()
            .then(agendas => setAgendas(agendas));
    },[])

    useEffect(() => {
        let agendaIndex = 0;
        let colors = ['purple','blue','primary','green'];
        var allScheduleEvents = agendas.map(
            agenda => {
                let color = colors[agendaIndex % colors.length];
                agendaIndex++;
                return agenda.agendaEvents.map(event => new ScheduleEvent({
                    agendaEvent: event, groupName: agenda.name, color: color
                }));
            }
        );
        var calendarEvents = allScheduleEvents.length > 0 ? allScheduleEvents.reduce((events = [], scheduleEvents) => events.push(...scheduleEvents)) : [];
        setScheduleEvents(calendarEvents);
    },[agendas])

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