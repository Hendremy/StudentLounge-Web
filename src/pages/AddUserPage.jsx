import {Paper} from "@mui/material";
import {palette} from "../AppTheme";
import Title from "../components/atoms/Title";
import GridCentered from "../components/atoms/GridCentered";
import RegisterForm from "../components/organisms/RegisterForm";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ApiServicesContext } from "../App";
import roles from "../models/roles";

export default function AddUserPage() {
    const adminApiServices = useContext(ApiServicesContext)[roles.admin];
    const authRepository = adminApiServices.authRepository
    const navigate = useNavigate();

    const paperStyle = {
        padding: 20,
        height:'auto',
        width:280,
        backgroundColor: palette.primary,
        color:'white',
        borderRadius:25
    };

    const onAdd = () => {
        navigate('/');
    }

    return (
        <GridCentered>
            <Paper elevation ={10} style={paperStyle}>
                <Title text={"Ajout d'un utilisateur"}/>
                <RegisterForm onAuthenticated={onAdd} authRepository={authRepository}/>
            </Paper>
        </GridCentered>
    );
}