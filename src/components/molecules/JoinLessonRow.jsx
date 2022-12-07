import { ListItemText, ListItem, IconButton } from "@mui/material";
import {palette} from '../../appTheme';
import { Remove, Add, Dangerous } from "@mui/icons-material";
import { useState } from "react";

export default function LessonRow({lesson, isJoined, repository}){
    const [joined, setJoined] = useState(isJoined);
    const [error, setError] = useState(null);
    const style = {
        color: 'white'
    }
    const ActionIcon = error ? Dangerous
                             : joined ? Remove 
                                      : Add;

    const joinOrLeave = () => {
        if(joined){
            repository.leaveLesson({lessonId: lesson.id})
                .then(
                    () => setJoined(false)
                )
                .catch(
                    error => setError(error)
                );
        }else{
            repository.joinLesson({lessonId: lesson.id})
                .then(
                    () => setJoined(true)
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