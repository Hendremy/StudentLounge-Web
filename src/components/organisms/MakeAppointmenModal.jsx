import { useState } from "react";
import CenteredModal from "../atoms/CenteredModal";
import Title from "../atoms/Title";
import { palette } from '../../AppTheme';
import { Box, List, Alert, TextField} from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import SelectTutoringField from "../molecules/SelectTutoringField";
import SendFormButton from '../atoms/SendFormButton';
import LocationPicker from "./LocationPicker";
import { Stack } from "@mui/system";

export default function MakeAppointmentModal({open, onClose, repository, data}){
    const [error, setError] = useState(null);
    const availableTutorings = data;
    const boxStyle = {
        minHeight:'10vh',
        minWidth:'70vw',
        borderRadius: '5px'
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let form = event.target;
    };

    const handleChange = () => {

    }

    //TODO: Picker le lieu avec gmaps
    return(
        <CenteredModal open={open} onClose={onClose}>
            <Title text={'Ajouter un rendez-vous'}/>
            <Stack sx={boxStyle}>
                {error && (<Alert style={{marginTop:15}} severity="error">{error.message}</Alert>)}
                <form onSubmit={handleSubmit}>
                    <SelectTutoringField tutorings={availableTutorings}/>
                    <DateTimePicker 
                        label="Début"
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} />}
                    />
                    <DateTimePicker 
                        label="Fin"
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} />}
                    />
                    <LocationPicker />
                    <SendFormButton text={'Confirmer'}/>
                </form>
            </Stack>
        </CenteredModal> 
    );
}