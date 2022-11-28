import {Alert, Button, Grid, Paper, TextField, ThemeProvider} from "@mui/material";
import {primary, secondary, theme} from "../../AppTheme";
import Title from "../atoms/Title";
import GridCentered from "../atoms/GridCentered";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useAtom} from "jotai";
import {connectedUser} from "../../AccountStore";

function checkResult(password, email, firstname, lastname, confirmPassword, setMessage, setState, navigate) {
    if (password === null ||
        email === null ||
        firstname === null ||
        lastname === null ||
        confirmPassword === null ||
        password === '' ||
        email === '' ||
        firstname === '' ||
        lastname === '' ||
        confirmPassword === '') {
        setMessage("Remplissez tous les champs");
        return null;
    } else {
        if(password === confirmPassword){
            CreateAccount({
                email: email,
                password: password,
                firstname: firstname,
                lastname: lastname,
                confirmPassword: confirmPassword,
                setMessage: setMessage,
                setState: setState,
                navigate: navigate});
        }else{
            setMessage("Le mot de passe et la confirmation du mot de passe ne sont pas identique");
            return null;
        }
    }
}

function CreateAccount({email, password, firstname, lastname, confirmPassword, setMessage, setState, navigate}) {
    const url = "https://porthos-intra.cg.helmo.be/e190449/Auth/Register";
    const data = JSON.stringify({email: email, password: password, firstname:firstname, lastname:lastname, passwordRep:confirmPassword});

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
                setMessage("Une erreur est survenue, veuillez reessayer plus tard.")
                return new Error();
            }
            return response;
        })
        .then(response => response.json())
        .then(
            (result) => {
                setMessage("Inscription effectuée !");
                setState(result);
                navigate("/");
            })
        .catch((error) => {
            console.log(error)
        });

}

export default function Register() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();
    const [state, setState] = useAtom(connectedUser);

    async function HandleClick(event) {
        event.preventDefault();
        checkResult(password, email, firstname, lastname, confirmPassword, setMessage, setState, navigate);
    }

    const paperStyle = {
        padding: 20,
        height:'auto',
        width:280,
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
                borderColor:"#00bbff"
            }
        }
    }

    const form = <Paper elevation ={10} style={paperStyle}>
        <ThemeProvider theme={theme}>
            <Title text={"Inscription"}/>
        </ThemeProvider>
        <form onSubmit={HandleClick}>
            <TextField
                value={lastname}
                name={"lastname"}
                type={"text"}
                onChange={(event) => setLastname(event.target.value)}
                label={'Nom'}
                placeholder={'Entrez votre nom'}
                style={fieldStyle}
                InputLabelProps={whiteColor}
                InputProps={whiteColor}
                sx={focusColor}
                fullWidth/>
            <TextField
                value={firstname}
                name={"firstname"}
                type={"text"}
                onChange={(event) => setFirstname(event.target.value)}
                label={'Prenom'}
                placeholder={'Entrez votre prenom'}
                style={fieldStyle}
                InputLabelProps={whiteColor}
                InputProps={whiteColor}
                sx={focusColor}
                fullWidth/>
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
            <TextField
                value={confirmPassword}
                name={"confirmPassword"}
                onChange={(event) => setConfirmPassword(event.target.value)}
                label={'Confirmation du mot de passe'}
                placeholder={'Entrez le mot de passe de nouveau'}
                type={"password"}
                style={fieldStyle}
                InputLabelProps={whiteColor}
                InputProps={whiteColor}
                sx={focusColor}
                fullWidth/>
            {message && (<Alert style={{marginTop:15}} severity="error">{message}</Alert>)}
            <Grid align={'center'}>
                <ThemeProvider theme={theme}>
                    <Button type='submit' color='primary' style={buttonStyle} fullWidth>S'inscrire</Button>
                </ThemeProvider>
            </Grid>
        </form>
    </Paper>

    return (
        <GridCentered component={form}/>
    );
}