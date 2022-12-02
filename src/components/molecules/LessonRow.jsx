import { ListItemText, ListItemButton } from "@mui/material";
import {palette} from '../../AppTheme';

export default function LessonRow(props){
    let lesson = props.lesson;

    const style= {
        backgroundColor: palette.primary,
        color: "white"
    };

    return (
        <ListItemButton sx={style}>
            <ListItemText primary={lesson.name}/>
        </ListItemButton>
    );
}