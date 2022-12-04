import { Route } from "react-router-dom";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";

const contactPath = '/contact';
const homePath = '/';

function ContactRoute(){
    return (
        <Route key={'contact'} path={contactPath} element={<ContactPage/>}/>
    );
}

function HomeRoute(){
    return(
        <Route key={'home'} path={homePath} element={<HomePage/>}/>
    );
}


export {contactPath, ContactRoute, homePath, HomeRoute};

