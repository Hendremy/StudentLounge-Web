import { ListItemText, ListItem, IconButton } from "@mui/material";
import {palette} from '../../appTheme';
import { Done, PersonAdd, Dangerous } from "@mui/icons-material";
import { useState } from "react";

export default function TutoringRequestRow({lesson, isJoined, repository}){
    const [accepted, setAccepted] = useState(isJoined);
    const [error, setError] = useState(null);
    const style = {
        color: 'white'
    }
    const ActionIcon = error ? Dangerous
                             : accepted ? Done
                                      : PersonAdd;

    const joinOrLeave = () => {
        if(accepted){
            repository.leaveLesson({lessonId: lesson.id})
                .then(
                    () => setAccepted(false)
                )
                .catch(
                    error => setError(error)
                );
        }else{
            repository.joinLesson({lessonId: lesson.id})
                .then(
                    () => setAccepted(true)
                )
                .catch(
                    error => setError(error)
                );
        }
    };

    return (
        <ListItem
        key={lesson.id}
        sx={style}
        secondaryAction={
            <IconButton sx={style} onClick={() => joinOrLeave()} disabled={error}>
                <ActionIcon />
            </IconButton>
        }>
            <ListItemText primary={lesson.name} />
        </ListItem>
    );
}