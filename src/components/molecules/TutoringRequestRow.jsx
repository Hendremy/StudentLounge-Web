import { ListItemText, ListItem, IconButton } from "@mui/material";
import {palette} from '../../appTheme';
import { Done, PersonAdd, Dangerous, WarningAmberRounded } from "@mui/icons-material";
import { useState } from "react";
import LabelIconButton from '../atoms/LabelIconButton'
 
export default function TutoringRequestRow({request, repository}){
    const [accepted, setAccepted] = useState(false);
    const [requestRows, setRequestRows] = useState([])
    const [error, setError] = useState(null);
    const style = {
        color: 'white'
    }
    const disabled = error || accepted;
    const ActionIcon = error ? WarningAmberRounded
                             : accepted ? Done
                                      : PersonAdd;
    const message = error ? error.message
                          : accepted ? 'Tutorat accepté !'
                                     : 'Accepter'

    const acceptRequest = () => {
        if(!accepted){

        }
    };

    return (
        <ListItem
        key={request.id}
        sx={style}
        secondaryAction={
            <LabelIconButton 
                icon={ActionIcon} 
                text={message} 
                onClick={() => acceptRequest()}
                disabled={disabled}/>
        }>
            <ListItemText primary={request.username} />
        </ListItem>
    );
}