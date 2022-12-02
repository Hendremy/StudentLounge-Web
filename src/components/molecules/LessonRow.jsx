import { ListItemText, ListItemButton } from "@mui/material";
import { lessonPath } from "../../AppRouter";
import {palette} from '../../AppTheme';
import { NavLink } from "react-router-dom";

export default function LessonRow(props){
    let lesson = props.lesson;

    const style= {
        backgroundColor: palette.primary,
        color: "white"
    };

    const activeStyle = {
        backgroundColor: palette.secondary,
        color: palette.iconActive
    }

    return (
        <ListItemButton sx={style}>
            <NavLink to={`${lessonPath}/${lesson.id}`} style={({ isActive }) => isActive ? activeStyle : undefined}>
                <ListItemText primary={lesson.name}/>
            </NavLink>
        </ListItemButton>
    );
}