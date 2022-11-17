import { Icon } from '@mui/material';
import { NavLink } from 'react-router-dom';

const activeStyle = {}

export function MenuLink({path, text}){
    return (
        <NavLink to={path} style={({ isActive }) => isActive ? activeStyle : undefined}>
            <LinkText text={text}/>
        </NavLink>
    );
}