import { Box } from '@mui/material';
import MenuItem from './MenuItem';
import {homePath, loginPath, profilePath, registerPath} from '../../AppRouter';
import {useAtom} from "jotai";
import {connectedUser} from "../../AccountStore";
import {useNavigate} from "react-router-dom";
import {useGoogleLogout} from "react-google-login";

export default function AuthNav(){
    const [state, setState] = useAtom(connectedUser);
    const navigate = useNavigate();
    const style = {
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems:'center',
        width: 1/7
    }

    function onLogoutSuccess() {
        alert("Déconnexion effectué ! 👌");
    }

    const {signOut} = useGoogleLogout({clientId : process.env.REACT_APP_GOOGLE_CLIENT_ID, onLogoutSuccess});

    const HandleDeconnexion = (event) => {
        event.preventDefault();
        setState(null);
        localStorage.clear();
        sessionStorage.clear();
        signOut();
        navigate("/");
    }

    if(state !== null){
        return (
            <Box sx={style}>
                <MenuItem path={homePath} text="Se deconnecter" event={HandleDeconnexion}/>
                <MenuItem path={profilePath} text="profile"/>
            </Box>
        );
    }else{
        return (
            <Box sx={style}>
                <MenuItem path={loginPath} text="Se connecter"/>
                <MenuItem path={registerPath} text="S'inscrire"/>
            </Box>
        );
    }
}