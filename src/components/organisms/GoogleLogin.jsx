import { GoogleOAuthProvider } from "@react-oauth/google"
import GoogleButtonLogin from "../molecules/GoogleButtonLogin"

export default function GoogleLogin({onAuthenticated, authRepo}){
    const onJwtReceived = async (googleJwt) => {
        var user = await authRepo.googleLogin(googleJwt);
        if(user){
            onAuthenticated(user);
        }
    };

    return (
        <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
            <GoogleButtonLogin onTokenReceived={onJwtReceived}/>
        </GoogleOAuthProvider>
    )
}