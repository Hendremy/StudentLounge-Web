import HelpIcon from '@mui/icons-material/LiveHelpRounded';
import MenuIcon from './MenuIcon';
import {contactPath, homePath} from '../../routes/SharedRoutes';

export {ContactNav}

function ContactNav(){
    return(
        <MenuIcon key={'contact_nav'} path={contactPath} icon={HelpIcon}/>
    );
}

// function HomePath(){
//     return(
//         <MenuIcon path={homePath} icon={HelpIcon}/>
//     );
// }
