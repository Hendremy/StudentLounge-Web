import { Box } from '@mui/material';
import MenuLink from '../molecules/MenuLink';
import {homePath, loginPath, profilePath, registerPath} from '../../AppRouter';
import {useAtom} from "jotai";
import {connectedUser} from "../../AccountStore";
import {useNavigate} from "react-router-dom";

export default function AuthNav(){
    const [state, setState] = useAtom(connectedUser);
    const navigate = useNavigate();
    const style = {
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems:'center',
        width: 1/8
    }

    const HandleDeconnexion = (event) => {
        event.preventDefault();
        setState(null);
        navigate("/");
    }

    if(state !== null){
        return (
            <Box sx={style}>
                <MenuLink path={homePath} text="Se deconnecter" event={HandleDeconnexion}/>
                <MenuLink path={profilePath} text="profile"/>
            </Box>
        );
    }else{
        return (
            <Box sx={style}>
                <MenuLink path={loginPath} text="Se connecter"/>
                <MenuLink path={registerPath} text="S'inscrire"/>
            </Box>
        );
    }
}