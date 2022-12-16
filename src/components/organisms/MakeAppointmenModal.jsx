import { useState } from "react";
import CenteredModal from "../atoms/CenteredModal";
import Title from "../atoms/Title";
import { palette } from '../../AppTheme';
import { Box, List, Alert} from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import SelectTutoringField from "../molecules/SelectTutoringField";
import SendFormButton from '../atoms/SendFormButton';

export default function MakeAppointmentModal({open, onClose, repository, data}){
    const [error, setError] = useState(null);
    const availableTutorings = data;
    const boxStyle = {
        backgroundColor: palette.secondary,
        minHeight:'10vh',
        borderRadius: '5px'
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let form = event.target;
    };

    return(
        <CenteredModal open={open} onClose={onClose}>
            <Title text={'Ajouter un rendez-vous'}/>
            {error && (<Alert style={{marginTop:15}} severity="error">{error.message}</Alert>)}
            <form onSubmit={handleSubmit}>
                <SelectTutoringField tutorings={availableTutorings}/>
                <DateTimePicker 
                />
                <SendFormButton text={'Confirmer'}/>
            </form>
        </CenteredModal> 
    );
}