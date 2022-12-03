import {Box, Button, ThemeProvider} from "@mui/material";
import {palette, theme} from "../../appTheme";
import GoogleIcon from "@mui/icons-material/Google";
import GoogleLogin from "react-google-login";
import React from "react";
import {connectByGoogle} from "../../repositories/StudentLoungeAPI";

export default function GoogleButtonLogin(props){
    const onSuccess =  (res) => {
            connectByGoogle(res.tokenId).then(
                result => {
                    props.setMessage("Connexion validée !");
                    props.setState({token: result.token, name: result.name, image: result.image, role: result.role});
                    props.navigate("/");
                }
            ).catch( error => {
                props.setMessage("Erreur de token : " +error);
            });
    };

    const onFailure = (err) => {
        console.log('failed:', err);
    };

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
        <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            render={(renderProps) => (
                <Box display={"flex"} flexDirection={"row"}>
                    <ThemeProvider theme={theme}>
                        <Button onClick={renderProps.onClick} style={googleStyle} fontSize={15}>
                            <GoogleIcon style={{margin:10}}/>
                            Continuer avec Google
                        </Button>
                    </ThemeProvider>
                </Box>)
            }
        />
    );
}