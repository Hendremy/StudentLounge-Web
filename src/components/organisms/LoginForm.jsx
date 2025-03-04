import {Alert, TextField} from "@mui/material";
import {palette} from "../../AppTheme";
import React, {useState} from "react";
import SendFormButton from "../atoms/SendFormButton";

export default function AuthenticationForm({onAuthenticated, authRepo}){
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("");

    const fieldStyle = {
        backgroundColor: palette.secondary,
        borderRadius:25,
        marginTop: 20,
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
    async function handleClick(event) {
        event.preventDefault();
        if (password === null || email === null || password === '' || email === '') {
            setMessage("Remplissez tous les champs");
        }else{
            try{
                const user = await authRepo.login({email: email, password: password});
                if(user){
                    onAuthenticated(user);
                    setMessage("Connexion validée !");
                }else{
                    setMessage("Erreur lors de la connexion");
                }
            }catch (e) {
                console.log(e);
                setMessage("L'email ou le mot de passe est incorrect");
            }
        }
    }

    return (
        <form onSubmit={handleClick}>
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
            <SendFormButton text={"Connexion"} />
        </form>
    );
}