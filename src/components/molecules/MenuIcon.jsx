import { NavLink } from 'react-router-dom';
import {palette} from '../../appTheme';

const activeStyle = {
    borderBottom: `5px solid ${palette.iconActive}`,
    color: palette.iconActive
}

export default function MenuIcon({path, icon:Icon}){
    return (
        <NavLink to={path} style={({ isActive }) => isActive ? activeStyle : undefined}>
                <Icon sx={{fontSize: 37}}/>
        </NavLink>
    );
}