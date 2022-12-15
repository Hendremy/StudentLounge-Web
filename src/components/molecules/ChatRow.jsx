import { ListItemText, ListItemButton } from "@mui/material";
import { messagesPath } from "../../routes/StudentRoutes";
import {palette} from '../../AppTheme';
import { NavLink } from "react-router-dom";

export default function ChatRow(props){
    let chat = props.chat;

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
            <NavLink to={`${messagesPath}/${chat.id}`} style={({ isActive }) => isActive ? activeStyle : undefined}>
                <ListItemText primary={chat.name}/>
            </NavLink>
        </ListItemButton>
    );
}