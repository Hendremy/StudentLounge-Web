import { Route } from 'react-router-dom';
import {ContactRoute, HomeRoute} from './SharedRoutes';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';

const loginPath = '/login';
const registerPath = '/register';

export default function AnonymRoutes(){
    return(
        <>
            <HomeRoute />
            <Route path={loginPath} element={<LoginPage/>}/>
            <Route path={registerPath} element={<RegisterPage/>}/>
            <ContactRoute />
        </>
    );
}

export {loginPath, registerPath}