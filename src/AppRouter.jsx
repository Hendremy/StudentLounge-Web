import { HashRouter, Routes } from "react-router-dom";
import { AnonymRoutes } from "./routes/AnonymRoutes";
import { AdminRoutes } from './routes/AdminRoutes';
import { StudentRoutes } from './routes/StudentRoutes';
import { useContext } from "react";
import { AppUserContext } from "./App";

export default function AppRouter({children}){
    const user = useContext(AppUserContext);
    let routes = [];

    if(user){
        if(user.isAdmin){
            routes.push(AdminRoutes);
        }
        if(user.isStudent){
            routes.push(StudentRoutes);
        }
    }else{
        routes = AnonymRoutes;
    }

    return (
        <HashRouter>
            {children}
            <main>
                <Routes>
                    {routes}
                </Routes>
            </main>
        </HashRouter>
    );
}