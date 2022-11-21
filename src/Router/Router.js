import { HashRouter, Routes, Route } from "react-router-dom"
import LoginPage from "../components/pages/LoginPage";
import NavBar from "../components/organisms/NavBar";

export default function Router(){
    return (
        <HashRouter>
            <NavBar/>
            <Routes>
                <Route path="/LoginPage" element={< LoginPage />}/>
            </Routes>
        </HashRouter>
    );
}