import { useState } from "react";
import CenteredModal from "../atoms/CenteredModal";
import Title from "../atoms/Title";
import { palette } from '../../AppTheme';
import { Box, List, Alert} from '@mui/material';

export default function MakeAppointmentModal({open, onClose, repository, data}){
    const [error, setError] = useState(null);
    const availableTutorings = data;
    const boxStyle = {
        backgroundColor: palette.secondary,
        minHeight:'10vh',
        borderRadius: '5px'
    };

    return(
        <CenteredModal open={open} onClose={onClose}>
            <Title text={'Ajouter un rendez-vous'}/>
            {error && (<Alert style={{marginTop:15}} severity="error">{error.message}</Alert>)}
            <Box sx={boxStyle}>
                
            </Box>
        </CenteredModal> 
    );
}