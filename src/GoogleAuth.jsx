import {useEffect} from "react";
import {gapi} from "gapi-script";

export default function GoogleAuth({children}) {
    useEffect(() => {
        const initClient = () => {
            gapi.auth2.init({
                clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
                scope: ''
            });
        };
        gapi.load('client:auth2', initClient);
    });

    return (children);
}