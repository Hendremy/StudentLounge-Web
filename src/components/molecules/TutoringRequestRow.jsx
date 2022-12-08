import { ListItemText, ListItem, Avatar } from "@mui/material";
import {palette} from '../../appTheme';
import { Done, PersonAdd, WarningAmberRounded, AccountCircle } from "@mui/icons-material";
import { useState } from "react";
import LabelIconButton from '../atoms/LabelIconButton'
 
export default function TutoringRequestRow({request, repository}){
    const [accepted, setAccepted] = useState(false);
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
                                     : 'Accepter';

    const acceptRequest = () => {
        if(!accepted){
            repository.acceptRequest({tutoringId: request.id})
                .then(() => setAccepted(true))
                .then(error => setError(error));
        }
    };

    const UserImage = request.userimage 
        ? <Avatar alt={request.username} src={request.userimage} sx={{margin: '8px'}}/> 
        : <AccountCircle sx={{margin: '8px'}}/> ;

    return (
        <ListItem
        key={request.id}
        sx={style}
        secondaryAction={
            <LabelIconButton 
                icon={ActionIcon} 
                text={message}
                onClick={acceptRequest}
                disabled={disabled}/>
        }>
            {UserImage}
            <ListItemText primary={request.username} />
        </ListItem>
    );
}