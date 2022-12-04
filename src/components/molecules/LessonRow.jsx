import { ListItemText, ListItemButton } from "@mui/material";
import { lessonsPath } from "../../routes/StudentRoutes";
import {palette} from '../../appTheme';
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
            <NavLink to={`${lessonsPath}/${lesson.id}`} style={({ isActive }) => isActive ? activeStyle : undefined}>
                <ListItemText primary={lesson.name}/>
            </NavLink>
        </ListItemButton>
    );
}