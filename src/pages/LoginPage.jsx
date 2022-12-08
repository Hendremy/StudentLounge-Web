import {Paper, Stack} from "@mui/material";
import Title from "../components/atoms/Title";
import {palette} from "../appTheme";
import React, {useContext} from "react";
import GridCentered from "../components/atoms/GridCentered";
import { useAtom } from "jotai";
import { userAtom } from "../stores/userStore";
import { useNavigate } from "react-router-dom";
import { ApiServicesContext } from "../App";
import LoginForm from '../components/organisms/LoginForm';

import GoogleLogin from "../components/organisms/GoogleLogin";
import roles from "../models/roles";

export default function LoginPage() {
    const anonymApiServices = useContext(ApiServicesContext)[roles.anonym];
    const authRepository = anonymApiServices.authenticationRepository;
    const [, setUser] = useAtom(userAtom);
    const navigate = useNavigate();

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
                <LoginForm onAuthenticated={onAuthenticated} authRepo={authRepository} />
                <GoogleLogin onAuthenticated={onAuthenticated} authRepo={authRepository}/>
            </Stack>
        </Paper>
    </GridCentered>);
}