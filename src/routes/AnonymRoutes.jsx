import { Route } from 'react-router-dom';
import {ContactRoute, HomeRoute, NotFound} from './SharedRoutes';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';

const loginPath = '/login';
const registerPath = '/register';

const AnonymRoutes = [
    HomeRoute(),
    ContactRoute(),
    NotFound(),
    <Route key={'login'} path={loginPath} element={<LoginPage/>}/>,
    <Route key={'register'} path={registerPath} element={<RegisterPage/>}/>,
];

export {loginPath, registerPath, AnonymRoutes};