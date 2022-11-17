import { IconButton } from '@mui/material';
import { NavLink } from 'react-router-dom';

const activeStyle = {}

//style={({ isActive }) => isActive ? activeStyle : undefined}

export function MenuIcon({path, icon:Icon}){
    return (
        <NavLink to={path}>
            <IconButton>
                <Icon color="primary" fontSize="large"/>
            </IconButton>
        </NavLink>
    );
}