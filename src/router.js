import { HashRouter, Routes, Route } from "react-router-dom"
import LoginPage from './components/pages/LoginPage'

export default function AppRouter(){
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<LoginPage/>}/>
            </Routes>
        </HashRouter>
    );
}