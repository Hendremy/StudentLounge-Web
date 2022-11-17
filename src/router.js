import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import LoginPage from './components/pages/LoginPage';
import RegisterPage from "./components/pages/RegisterPage";
import ContactPage from "./components/pages/ContactPage";

export default function AppRouter(){
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/register" element={<RegisterPage/>}/>
                <Route path="/contact" element={<ContactPage/>}/>
            </Routes>
        </HashRouter>
    );
}