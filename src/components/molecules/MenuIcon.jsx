import { IconButton } from '@mui/material';
import { NavLink } from 'react-router-dom';

const activeStyle = {color: "green"}


export function MenuIcon({path, icon:Icon}){
    return (
        <NavLink to={path} style={({ isActive }) => isActive ? activeStyle : undefined}>
            <IconButton sx={{"&:hover": {color: "green"}}}>
                <Icon color="primary" sx={{fontSize: 50}}/>
            </IconButton>
        </NavLink>
    );
}