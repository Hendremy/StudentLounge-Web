import { Box } from '@mui/material';
import MenuLink from '../molecules/MenuLink';
import {loginPath, registerPath} from '../../AppRouter';

export default function AuthNav(){
    const style = {display: 'flex', justifyContent: 'space-between', alignItems:'center'}
    return (
        <Box sx={style}>
            <MenuLink path={loginPath} text="Se connecter"/>
            <MenuLink path={registerPath} text="S'inscrire"/>
        </Box>
    );
}