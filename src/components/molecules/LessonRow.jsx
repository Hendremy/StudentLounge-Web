import { ListItemText, ListItemButton } from "@mui/material";
import { lessonsPath } from "../../routes/StudentRoutes";
import {palette} from '../../AppTheme';
import { NavLink } from "react-router-dom";

export default function LessonRow(props){
    let lesson = props.lesson;

    const style= {
        backgroundColor: palette.secondary,
        color: "white",
        borderRadius: 3
    };

    const activeStyle = {
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