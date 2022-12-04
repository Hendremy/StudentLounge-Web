import {Paper, Stack} from "@mui/material";
import Title from "../components/atoms/Title";
import {palette} from "../appTheme";
import React, {useContext} from "react";
import GridCentered from "../components/atoms/GridCentered";
import AuthenticationForm from "../components/organisms/AuthenticationForm";
import { useAtom } from "jotai";
import { userAtom } from "../stores/userStore";
import { useNavigate } from "react-router-dom";
import { ApiServicesContext } from "../App";

import GoogleLogin from "../components/organisms/GoogleLogin";

export default function LoginPage() {
    const apiServices = useContext(ApiServicesContext);
    const authRepository = apiServices.authenticationRepository;
    const [, setUser] = useAtom(userAtom);
    const navigate = useNavigate();

    console.log(apiServices);
    console.log(authRepository);
    
    const paperStyle = {
        padding: 20,
        height:'auto',
        width:280,
        margin:"20vh auto",
        backgroundColor: palette.primary,
        color:'white',
        borderRadius:25
    };

    const onAuthenticated = (user) => {
        setUser(user);
        navigate('/');
    }

    return (
    <GridCentered>
        <Paper elevation ={10} style={paperStyle}>
            <Title text={"Connexion"}/>
            <Stack align={'center'} spacing={1}>
                <AuthenticationForm onAuthenticated={onAuthenticated} basicLogin={authRepository.login} />
                <GoogleLogin onAuthenticated={onAuthenticated} googleLogin={authRepository.googleLogin}/>
            </Stack>
        </Paper>
    </GridCentered>);
}