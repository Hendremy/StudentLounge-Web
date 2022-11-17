import LinkText from '../atoms/LinkText'
import { NavLink } from 'react-router-dom';

const activeStyle = {}

export default function MenuLink({path, text}){
    return (
        <NavLink to={path} style={({ isActive }) => isActive ? activeStyle : undefined}>
            <LinkText text={text}/>
        </NavLink>
    );
}