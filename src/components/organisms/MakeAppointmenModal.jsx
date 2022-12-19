import { useState } from "react";
import CenteredModal from "../atoms/CenteredModal";
import Title from "../atoms/Title";
import { palette } from '../../AppTheme';
import { Box, List, Alert, TextField} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import SelectTutoringField from "../molecules/SelectTutoringField";
import SendFormButton from '../atoms/SendFormButton';
import LocationPicker from "./LocationPicker";
import { Stack } from "@mui/system";
import { TimePicker } from "@mui/x-date-pickers";
import AppointmentRequest from "../../models/appointmentRequest";

export default function MakeAppointmentModal({open, onClose, repository, data}){
    const [message, setMessage] = useState(null);
    const [date, setDate] = useState();
    const [startHour, setStartHour] = useState();
    const [endHour, setEndHour] = useState();

    const availableTutorings = data;
    const boxStyle = {
        minHeight:'10vh',
        minWidth:'70vw',
        borderRadius: '5px'
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let form = event.target;
        console.log(form)
        let request = new AppointmentRequest({
            tutoringId: form.tutoring.value,
            start: form.startHour.value,
            end: form.endHour.value,
            date: form.date.value,
            location: form.location.value
        });

        repository.makeAppointment(request)
            .then(
                appointment => {
                    setMessage({error: false, text: "Rendez-vous confirmé !"})
                }
            )
            .catch(
                apiError => setMessage({error: true, text: "Erreur lors de la prise de rendez-vous"})
            );
    };

    return(
        <CenteredModal open={open} onClose={onClose}>
            <Title text={'Ajouter un rendez-vous'}/>
            <Stack sx={boxStyle}>
                <form onSubmit={handleSubmit}>
                    <SelectTutoringField name="tutoring" tutorings={availableTutorings}/>
                    <DatePicker 
                        inputFormat="DD/MM/YYYY"
                        label="Date"
                        value={date}
                        onChange={(val) => setDate(val)}
                        renderInput={(params) => <TextField name="date" {...params} />}
                    />
                    <TimePicker 
                        label="Début"
                        ampm={false}
                        value={startHour}
                        onChange={(val) => setStartHour(val)}
                        renderInput={(params) => <TextField name="startHour" {...params} />}
                    />
                    <TimePicker 
                        label="Fin"
                        ampm={false}
                        value={endHour}
                        onChange={(val) => setEndHour(val)}
                        renderInput={(params) => <TextField name="endHour" {...params} />}
                    />
                    <LocationPicker name={"location"} />
                    <SendFormButton text={'Confirmer'}/>
                </form>
                {message && !message.error && (<Alert style={{marginTop:15}} severity="success">{message.text}</Alert>)}
                {message && message.error && (<Alert style={{marginTop:15}} severity="error">{message.text}</Alert>)}
            </Stack>
        </CenteredModal> 
    );
}