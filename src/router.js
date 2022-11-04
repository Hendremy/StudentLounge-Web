import { HashRouter, Routes, Route } from "react-router-dom"

export default function Router(){
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<LoginPage/>}/>
            </Routes>
        </HashRouter>
    );
}