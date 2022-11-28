import {Alert, Box, Button, Grid, Paper, TextField, ThemeProvider, Typography} from "@mui/material";
import Title from "../atoms/Title";
import {primary, secondary, theme} from "../../AppTheme";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useAtom} from "jotai";
import {connectedUser} from "../../AccountStore";
import {Error} from "@mui/icons-material";
import GoogleLogin from "react-google-login";
import GoogleIcon from '@mui/icons-material/Google';
import GridCentered from "../atoms/GridCentered";

const clientId = '617490373514-lhgvu18qd1vurcghsvr6mo1336fdpvki.apps.googleusercontent.com';

function checkResult(password, email, setMessage, setState, navigate) {
    if (password === null || email === null || password === '' || email === '') {
        setMessage("Remplissez tous les champs");
        return null;
    } else {
        GetAccount({email: email, password: password, setMessage: setMessage, setState: setState, navigate: navigate})
    }
}

function GetAccount({email, password, setMessage, setState, navigate}) {
    const url = "https://porthos-intra.cg.helmo.be/e190449/Auth/Login";
    const data = JSON.stringify({username: email, password: password});

    fetch(url, {
        method: "POST",
        body: data,
        mode: "cors",
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            setMessage("L'email ou le mot de passe est incorrect")
            return new Error();
        }
        return response;
    })
    .then(response => response.json())
    .then(
        (result) => {
            setMessage("Connexion validée !");
            setState(result);
            navigate("/");
        })
    .catch((error) => {
        console.log(error)
    });

}

export default function Authentication() {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    const [state, setState] = useAtom(connectedUser);

    async function HandleClick(event) {
        event.preventDefault();
        checkResult(password, email, setMessage, setState, navigate);
    }

    const paperStyle = {
        padding: 20,
        height:'auto',
        width:280,
        margin:"20vh auto",
        backgroundColor:primary,
        color:'white',
        borderRadius:25
    };
    const fieldStyle = {
        backgroundColor:secondary,
        borderRadius:25,
        marginTop: 20,
    };
    const buttonStyle = {
        backgroundColor:'white',
        marginTop: 20,
        color:secondary,
        borderRadius:10
    };
    const whiteColor = {
        style:{color:'white'}
    };
    const focusColor = {
        "& .MuiOutlinedInput-root": {
            "& > fieldset": { border: 0 },
            "&.Mui-focused fieldset": {
                borderRadius:6,
                borderColor:"#8aeaff"
            }
        }
    }

    const onSuccess = (res) => {
        setMessage("Connexion validée !");
        setState(res.profileObj);
        navigate("/");
    };
    const onFailure = (err) => {
        console.log('failed:', err);
    };

    const googleStyle = {
        backgroundColor:'white',
        marginTop: 10,
        color:secondary,
        borderRadius:10,
        border: 0,
        width: 280,
        height: 35,
        justifyContent:'flex-start'
    };
    const form = <Paper elevation ={10} style={paperStyle}>
    <ThemeProvider theme={theme}>
        <Title text={"Connexion"}/>
    </ThemeProvider>
    <form onSubmit={HandleClick}>
        <TextField
            value={email}
            name={"email"}
            type={"email"}
            onChange={(event) => setEmail(event.target.value)}
            label={'Adresse e-mail'}
            placeholder={'Entrez l\'addresse e-mail'}
            style={fieldStyle}
            InputLabelProps={whiteColor}
            InputProps={whiteColor}
            sx={focusColor}
            fullWidth/>
        <TextField
            value={password}
            name={"password"}
            onChange={(event) => setPassword(event.target.value)}
            label={'Mot de passe'}
            placeholder={'Entrez le mot de passe'}
            type={"password"}
            style={fieldStyle}
            InputLabelProps={whiteColor}
            InputProps={whiteColor}
            sx={focusColor}
            fullWidth/>
        {message && (<Alert style={{marginTop:15}} severity="error">{message}</Alert>)}
        <Grid align={'center'}>
            <ThemeProvider theme={theme}>
                <Button type='submit' color='primary' style={buttonStyle} fullWidth>
                    <Typography fontSize={15} margin={"auto"}>Connexion</Typography>
                </Button>
            </ThemeProvider>
            <GoogleLogin
                clientId={clientId}
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
                render={renderProps => (
                        <Box display={"flex"} flexDirection={"row"}>
                            <ThemeProvider theme={theme}>
                                <Button style={googleStyle} onClick={renderProps.onClick} fontSize={15}>
                                    <GoogleIcon style={{margin:10}}/>
                                    Continuer avec Google
                                </Button>
                            </ThemeProvider>
                        </Box>
                )}
            />
        </Grid>
    </form>
</Paper>

    return (<GridCentered component={form}/>);
}