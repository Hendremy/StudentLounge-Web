import { NavLink } from 'react-router-dom';
import {palette} from '../../AppTheme';

const activeStyle = {
    borderBottom: `5px solid ${palette.iconActive}`,
    color: palette.iconActive
}

export default function MenuIcon({path, icon:Icon}){
    return (
        <NavLink key={'contact-nav-icon'} to={path} style={({ isActive }) => isActive ? activeStyle : undefined}>
                <Icon key={'icon-profile'} sx={{fontSize: 37}}/>
        </NavLink>
    );
}