import { Box, Alert, Paper, TextField } from "@mui/material";
import React,{ useState, useRef } from "react";
import {palette} from "../AppTheme";
import Title from "../components/atoms/Title";
import SendFormButton from "../components/atoms/SendFormButton";
import emailjs from '@emailjs/browser';

export default function ContactPage(){
    const paperStyle = {
        padding: 20,
        height:'auto',
        backgroundColor:palette.primary,
        color:'white',
        borderRadius:25,
        margin:"10vh auto",
        width:'50vw'
    };

    const boxStyle = {
        height: '100%',
        backgroundColor: palette.primary,
        minHeight:'70vh',
        padding: '1%',
    };
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

    const [message, setMessage] = useState('');
    const [sujet, setSujet] = useState('');
    const [mail, setMail] = useState('');
    const [error, setError] = useState();
    const [result, setResult] = useState();
    const form = useRef();

    async function handleClick(event) {
        event.preventDefault();
        if (sujet === '' || mail === '' || message === '') {
            setError("Remplissez tous les champs");
        }else{
            emailjs.sendForm('service_lhmekvj', "template_eio0jl8", form.current, 'WVLgIiNQbs2mLhRwt')
            .then((result) => {
                console.log(result.text);
                setError(null);
                setResult('Message envoyé ! Nous vous répondrons par mail dans les plus brefs délais.')
            }, (error) => {
                console.log(error.text);
                setError('Une erreur est survenue, veuillez réessayer plus tard.')
            });
        }
    }

    return (
        <Paper elevation ={10} style={paperStyle}>
            <Box sx={boxStyle}>
                <Title text={"Contacter les administrateurs"}/>
                <form onSubmit={handleClick} ref={form}>
                    <TextField
                        label={"Adresse e-mail"}
                        value={mail}
                        name={"mail"}
                        onChange={(event) => setMail(event.target.value)}
                        placeholder={'Entrez votre messages ici...'}
                        style={fieldStyle}
                        InputLabelProps={whiteColor}
                        InputProps={whiteColor}
                        sx={focusColor}
                        autoComplete='off'
                        fullWidth/>
                    <TextField
                        label={"Sujet"}
                        value={sujet}
                        name={"sujet"}
                        onChange={(event) => setSujet(event.target.value)}
                        placeholder={'Entrez votre messages ici...'}
                        style={fieldStyle}
                        InputLabelProps={whiteColor}
                        InputProps={whiteColor}
                        sx={focusColor}
                        autoComplete='off'
                        fullWidth/>
                    <TextField
                        multiline
                        rows={13}
                        label={"Message"}
                        value={message}
                        name={"message"}
                        onChange={(event) => setMessage(event.target.value)}
                        placeholder={'Entrez votre messages ici...'}
                        style={fieldStyle}
                        InputLabelProps={whiteColor}
                        InputProps={whiteColor}
                        sx={focusColor}
                        autoComplete='off'
                        fullWidth/>
                    {error && (<Alert style={{marginTop:15}} severity="error">{error}</Alert>)}
                    {result && (<Alert style={{marginTop:15}} severity="success">{result}</Alert>)}
                    <SendFormButton text={"Envoyer"} />
                </form>
            </Box>
        </Paper>
    );
}