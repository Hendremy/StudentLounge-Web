import {Box} from "@mui/material";
import MenuItem from "./MenuItem";
import {loginPath, registerPath} from '../../routes/AnonymRoutes';
import AuthNavStyle from "../atoms/AuthNavStyle";

export default function AuthNavPublic(){
    return (
        <AuthNavStyle>
            <Box style={{margin:10}}>
                <MenuItem path={loginPath} text="Se connecter"/>
            </Box>
            <Box style={{margin:10}}>
                <MenuItem path={registerPath} text="S'inscrire"/>
            </Box>
        </AuthNavStyle>
    );
}