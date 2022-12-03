import {Box, Button} from "@mui/material";
import {palette} from "../../appTheme";
import GoogleIcon from "@mui/icons-material/Google";
import React from "react";
import { GoogleOAuthProvider, useGoogleOneTapLogin, Googlelogin, GoogleLogin } from "@react-oauth/google";
import {connectByGoogle} from "../../repositories/StudentLoungeAPI";

export default function GoogleButtonLogin(props){

    const onSuccess = async (res) => {
        console.log(res);
    }

    const onError = (err) => {
        console.log('failed:', err);
    };

    //Pas ouf, useGoogleLogin ok mais renvoie un access token, pas un JWT
    //Google one tap renvoie jwt mais c'est nul
    const login = useGoogleOneTapLogin({
        onSuccess: (res) => console.log(res),
        onError: onError
    });

    const googleStyle = {
        backgroundColor:'white',
        marginTop: 10,
        color: palette.secondary,
        borderRadius:10,
        border: 0,
        width: 280,
        height: 35,
        justifyContent:'flex-start'
    };

    return(
        <Button onClick={() => login()} style={googleStyle} fontSize={15}>
            <GoogleIcon style={{margin:10}}/>
            Continuer avec Google
        </Button>
    );
}
