import { Icon } from '@mui/material';
import { NavLink } from 'react-router-dom';

const activeStyle = {}

export function MenuIcon(props){
    return (
        <NavLink to={props.path} style={({ isActive }) => isActive ? activeStyle : undefined}>
            <Icon children={props.iconName} fontSize='large'/>
        </NavLink>
    );
}