import { AddLocation, AddLocationAlt, MoreTime } from "@mui/icons-material";
import { Box, List, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import {palette} from "../../AppTheme";
import { appointmentsAtom, tutoringsAtom } from "../../stores/userStore";
import ListHeader from '../molecules/ListHeader';
import OpenModalButton from "../molecules/OpenModalButton";
import MakeAppointmentModal from "./MakeAppointmenModal";
import AppointmentRow from "../molecules/AppointmentRow";

export default function AppointmentList({appointmentRepository, tutoringRepository}){
    const [tutorings, setTutorings] = useAtom(tutoringsAtom);
    const [appointments, setAppointments] = useAtom(appointmentsAtom);
    const now = new Date();

    const paperStyle = {
        padding: 20,
        height:'auto',
        backgroundColor:palette.primary,
        color:'white',
        borderRadius:25
    };

    const boxStyle = {
        height: '74vh',
        backgroundColor: palette.primary,
        borderRadius: '5px',
        overflow: 'auto'
    };

    const makeAptCallback = (appointment) => {
        let aptsCopy = [...appointments];
        aptsCopy.push(appointment);
        setAppointments(aptsCopy);
    };

    useEffect(() => {
        tutoringRepository.getUserValidatedTutorings()
            .then(
                validatedTutorings => setTutorings(validatedTutorings)
            );
        
        appointmentRepository.getAppointments()
            .then(
                userAppointments => setAppointments(userAppointments.sort((appA, appB) => appA.startDate - appB.startDate))
            );
    },[]);

    return(
        <Paper elevation ={10} style={paperStyle}>
            <ListHeader title='Rendez-vous'>
            <OpenModalButton 
                    icon={AddLocationAlt}
                    modal={MakeAppointmentModal}
                    onClose={() => {}}
                    data={tutorings}
                    repository={appointmentRepository}
                    callback={makeAptCallback}
                    />
            </ListHeader>
            <Box sx={boxStyle}>
                <List>
                    {
                        appointments
                            .filter(a => a.endDate >= now)
                            .map(a => <AppointmentRow key={a.id} appointment={a}/>)
                    }
                </List>
            </Box>
        </Paper>
    );
}