import {NotFoundRoute} from './SharedRoutes';
import { Route } from "react-router-dom";
import AdminPage  from './../pages/AdminPage';

const adminPath = '/';

const AdminRoutes = [
    <Route key={'admin'} path={adminPath} element={<AdminPage/>}/>,
    NotFoundRoute
]

export {AdminRoutes};