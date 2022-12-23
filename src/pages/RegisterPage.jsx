import {Paper} from "@mui/material";
import {palette} from "../AppTheme";
import Title from "../components/atoms/Title";
import GridCentered from "../components/atoms/GridCentered";
import RegisterForm from "../components/organisms/RegisterForm";
import { useContext } from "react";
import { useAtom } from "jotai";
import { userAtom } from "../stores/userStore";
import { useNavigate } from "react-router-dom";
import { ApiServicesContext } from "../App";
import roles from "../models/roles";

export default function RegisterPage() {
    const anonymApiServices = useContext(ApiServicesContext)[roles.anonym];
    const authRepository = anonymApiServices.authenticationRepository;
    const [, setUser] = useAtom(userAtom);
    const navigate = useNavigate();

    const paperStyle = {
        padding: 20,
        height:'auto',
        width:280,
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
                <Title text={"Inscription"}/>
                <RegisterForm onAuthenticated={onAuthenticated} authRepository={authRepository}/>
            </Paper>
        </GridCentered>
    );
}