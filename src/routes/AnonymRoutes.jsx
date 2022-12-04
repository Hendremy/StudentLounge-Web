import { Route } from 'react-router-dom';
import {ContactRoute, HomeRoute} from './SharedRoutes';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';

const loginPath = '/login';
const registerPath = '/register';

const AnonymRoutes = [
    ContactRoute(),
    <Route key={'login'} path={loginPath} element={<LoginPage/>}/>,
    <Route key={'register'} path={registerPath} element={<RegisterPage/>}/>,
    HomeRoute()
];

export {loginPath, registerPath, AnonymRoutes};