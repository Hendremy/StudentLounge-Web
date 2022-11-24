import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import LoginPage from './components/pages/LoginPage';
import RegisterPage from "./components/pages/RegisterPage";
import ContactPage from "./components/pages/ContactPage";
import ProfilePage from "./components/pages/ProfilePage";

const homePath = '/';
const loginPath = '/login';
const registerPath = '/register';
const contactPath = '/contact';
const profilePath = '/profile';

export default function AppRouter({children}){
    return (
        <HashRouter>
            {children}
            <main>
                <Routes>
                    <Route path={homePath} element={<HomePage/>}/>
                    <Route path={loginPath} element={<LoginPage/>}/>
                    <Route path={registerPath} element={<RegisterPage/>}/>
                    <Route path={contactPath} element={<ContactPage/>}/>
                    <Route path={profilePath} element={<ProfilePage/>}/>
                </Routes>
            </main>
        </HashRouter>
    );
}

export {homePath, loginPath, registerPath, contactPath, profilePath};