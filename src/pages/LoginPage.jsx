import { GoogleOAuthProvider } from "@react-oauth/google";
import Authentication from "../components/organisms/Authentication";

export default function LoginPage(){

    return (
        <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
            <Authentication/>
        </GoogleOAuthProvider>
    );
}