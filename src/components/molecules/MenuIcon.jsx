import { NavLink } from 'react-router-dom';

const activeStyle = {}

export function MenuIcon({path, icon: Icon}){
    return (
        <NavLink to={path} style={({ isActive }) => isActive ? activeStyle : undefined}>
            <Icon/>
        </NavLink>
    );
}