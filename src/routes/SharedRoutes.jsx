import { Route } from "react-router-dom";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";

const contactPath = '/contact';
const homePath = '/';
const notFoundPath = '*';

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

function NotFoundRoute(){
    return(
        <Route key={'notfound'} path={notFoundPath} element={<NotFoundPage />} />
    );
}

export {contactPath, ContactRoute, homePath, HomeRoute, notFoundPath, NotFoundRoute};

