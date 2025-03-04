import {Alert, Button, Grid, TextField} from "@mui/material";
import {palette} from "../../AppTheme";
import {useState} from "react";
import SendFormButton from "../atoms/SendFormButton";

export default function RegisterForm({onAuthenticated, authRepository}){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const fieldStyle = {
        backgroundColor:palette.secondary,
        borderRadius:25,
        marginTop: 20,

    };
    const buttonStyle = {
        backgroundColor:'white',
        marginTop: 20,
        color: palette.secondary,
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

    function handleClick(event) {
        event.preventDefault();
        checkResult(password, email, firstname, lastname, confirmPassword);
    }

    async function checkResult(password, email, firstname, lastname, confirmPassword) {
        if (password === '' || email === '' || firstname === '' || lastname === '' || confirmPassword === '') {
            setMessage("Remplissez tous les champs");
            return null;
        } else {
            if(password === confirmPassword){
                try{
                    const user = await authRepository.register({
                        email: email,
                        password: password,
                        firstname: firstname,
                        lastname: lastname,
                        confirmPassword: confirmPassword});
                    setMessage("Inscription effectuée !");
                    onAuthenticated(user);
                }catch (e){
                    setMessage("Une erreur est survenue, veuillez reessayer plus tard.")
                    return null;
                }
            }else{
                setMessage("Le mot de passe et la confirmation du mot de passe ne sont pas identique");
                return null;
            }
        }
    }

    return (
        <form onSubmit={handleClick}>
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
                <SendFormButton text={"Enregistrer"}/>
            </Grid>
        </form>
    );
}