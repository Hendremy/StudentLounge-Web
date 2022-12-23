import { ListItemText, ListItemButton, Box } from "@mui/material";
import { messagesPath } from "../../routes/StudentRoutes";
import {palette} from '../../AppTheme';
import { NavLink } from "react-router-dom";

export default function ChatRow(props){
    let chat = props.chat;

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
            <NavLink to={`${messagesPath}/${chat.id}`} style={({ isActive }) => isActive ? activeStyle : undefined}>
                <ListItemText primary={chat.name}/>
            </NavLink>
        </ListItemButton>
    );
}