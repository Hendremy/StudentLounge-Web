import {NotFoundRoute} from './SharedRoutes';
import { Route } from "react-router-dom";
import AdminPage  from './../pages/AdminPage';
import AddUserPage from '../pages/AddUserPage';


const adminPath = '/';
const addUserPath = '/addUser';

const AdminRoutes = [
    <Route key={'admin'} path={adminPath} element={<AdminPage/>}/>,
    <Route key={'addUser'} path={addUserPath} element={<AddUserPage/>}/>,
    NotFoundRoute
]

export {AdminRoutes};