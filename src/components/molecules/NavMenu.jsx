import { MenuIcon } from "./MenuIcon";
import HomeIcon from '@mui/icons-material/Home'

export default function Menu(){
    let menu = [];
    
    let links = [
        {path: '/', icon: HomeIcon}
    ];

    links.forEach(link => {
        menu.push(
            <MenuIcon path={link.path} icon={link.icon}/>
        );
    });

    return (
        <div>
            {menu}
        </div>
    );
};