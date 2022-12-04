import { HashRouter, Routes } from "react-router-dom";
import { useAtom } from "jotai";
import { userAtom } from "./stores/userStore";
import AnonymRoutes from "./routes/AnonymRoutes";
import AdminRoutes from './routes/AdminRoutes';
import StudentRoutes from './routes/StudentRoutes';


export default function AppRouter({children}){
    const [user] = useAtom(userAtom);

    const routes = [];

    if(user){
        if(user.isAdmin){
            routes.push(<AdminRoutes/>);
        }
        if(user.isStudent){
            routes.push(<StudentRoutes/>);
        }
    }else{
        routes = <AnonymRoutes/>;
    }

    return (
        //On devrait p-e faire un routeur différent pour chaque role
        // => N'exposer que les routes propre aux roles de l'user
        // AnonymRouter = Login, Register, Contact, Home
        // StudentRouter = Lessons, Chat, Schedule, Home
        // AdminRouter = Users
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