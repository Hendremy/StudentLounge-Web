import {Button, Grid, Paper, TextField, ThemeProvider} from "@mui/material";
import Title from "../atoms/Title";
import {primary, secondary, theme} from "../../AppTheme";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useAtom} from "jotai";
import {connectedUser} from "../../AccountStore";

function checkResult(password, email, setMessage, setState, navigate) {
    if (password === null || email === null) {
        setMessage("Fields cannot be empty.");
        return null;
    } else {
        GetAccount({email: email, password: password, setMessage: setMessage, setState: setState, navigate: navigate})
    }
}

function GetAccount({email, password, setMessage, setState, navigate}) {
    const url = "https://porthos-intra.cg.helmo.be/e190449/Auth/Login";
    const data = JSON.stringify({username: email, password: password});

    console.log(data);
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
            setMessage("Incorrect Email or password ")
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

export default function AuthForm() {
    const [password, setPassword] = useState(null);
    const [email, setEmail] = useState(null)
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
                borderColor:"#FFB5FC"
            }
        }
    }

    return (
        <Grid>
        <Paper elevation ={10} style={paperStyle}>
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
                    fullWidth
                    required/>
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
                    fullWidth
                    required/>
                <p className="text-white font-weight-bold ml-5">{message}</p>
                <Grid align={'center'}>
                    <ThemeProvider theme={theme}>
                        <Button type='submit' color='primary' style={buttonStyle} fullWidth>Se connecter</Button>
                    </ThemeProvider>
                </Grid>
            </form>
        </Paper>
    </Grid>
    )
}