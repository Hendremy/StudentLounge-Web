import { NavLink } from 'react-router-dom';
import {iconActive} from '../../AppTheme';

const activeStyle = {
    borderBottom: `5px solid ${iconActive}`
}

export function MenuIcon({path, icon:Icon}){
    return (
        <NavLink to={path} style={({ isActive }) => isActive ? activeStyle : undefined}>
                <Icon sx={{fontSize: 37}}/>
        </NavLink>
    );
}