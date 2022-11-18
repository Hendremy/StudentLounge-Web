import LinkText from '../atoms/LinkText'
import { NavLink } from 'react-router-dom';
import { linkActive } from '../../AppTheme';

const activeStyle = {
    color: linkActive,
    borderBottom: `2px solid ${linkActive}`
}

export default function MenuLink({path, text}){
    return (
        <NavLink to={path} style={({ isActive }) => isActive ? activeStyle : undefined}>
            <LinkText text={text}/>
        </NavLink>
    );
}