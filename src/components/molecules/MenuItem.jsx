import LinkText from '../atoms/LinkText'
import { NavLink } from 'react-router-dom';

const activeStyle = {
    borderBottom: `2px solid`
}

export default function MenuItem({path, text, event}){
    return (
        <NavLink to={path} style={({ isActive }) => isActive ? activeStyle : undefined}>
            <LinkText text={text} event={event}/>
        </NavLink>
    );
}