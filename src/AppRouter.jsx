import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from './pages/LoginPage';
import RegisterPage from "./pages/RegisterPage";
import ContactPage from "./pages/ContactPage";
import LessonsPage from "./pages/LessonsPage";
import CalendarPage from "./pages/CalendarPage";
import MessagesPage from "./pages/MessagesPath";

const homePath = '/';
const loginPath = '/login';
const registerPath = '/register';
const contactPath = '/contact';
const messagesPath = '/messages';
const calendarPath = '/calendar';
const lessonPath = '/lesson';
const lessonWithIdPath = '/lesson/:id'

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
                    <Route path={lessonPath} element={<LessonsPage/>}/>
                    <Route path={lessonWithIdPath} element={<LessonsPage/>}/>
                    <Route path={calendarPath} element={<CalendarPage/>}/>
                    <Route path={messagesPath} element={<MessagesPage/>}/>
                </Routes>
            </main>
        </HashRouter>
    );
}

export {homePath, loginPath, registerPath, contactPath, messagesPath, calendarPath, lessonPath};