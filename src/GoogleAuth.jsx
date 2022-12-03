/*import {useEffect} from "react";
import {gapi} from "gapi-script";

export default function GoogleAuth({children}) {
    useEffect(() => {
        gapi.load('client:auth2', () => {
            gapi.auth2.init({clientId:process.env.REACT_APP_GOOGLE_CLIENT_ID})
        });
    },[]);

    return (children);
}*/