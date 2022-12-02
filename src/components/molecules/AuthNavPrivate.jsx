import {Box, Button, IconButton, Menu} from "@mui/material";
import {AccountCircle} from "@mui/icons-material";
import AuthNavStyle from "../atoms/AuthNavStyle";
import {useState} from "react";
import {palette} from "../../AppTheme";
import {useGoogleLogout} from "react-google-login";
import {useAtom} from "jotai";
import {connectedUser} from "../../AccountStore";
import {useNavigate} from "react-router-dom";

export default function AuthNavPrivate(){
    const [user, setUser] = useAtom(connectedUser);
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const  handleMenu = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null);
    }
    const buttonLogout = {
        backgroundColor: palette.primary,
        color:'white',
        border:0,
        borderRadius:5,
        padding:7,
        marginTop:10
    }

    const { signOut } = useGoogleLogout({
        clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        onFailure: () => {
            throw new Error("Déconnexion échouée !");
        },
        onLogoutSuccess: () => {
            alert("Déconnexion effectué ! 👌");
        }
    });

    const HandleDeconnexion = (event) => {
        event.preventDefault();
        setUser(null);
        signOut();
        localStorage.clear();
        sessionStorage.clear();
        navigate("/");
    }

    return (
        <AuthNavStyle>
            <IconButton
                aria-label="Profile"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color={"inherit"}>
                <AccountCircle />
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
                open={open}
                onClose={handleClose}
                style={{marginTop:35}}
            >
                <Box style={{margin:10, display:'flex', flexDirection:'column', alignItems:"center"}}>
                    {user.name}
                    <Button onClick={HandleDeconnexion} style={buttonLogout}>
                        Se deconnecter
                    </Button>
                </Box>
            </Menu>
        </AuthNavStyle>
    );
}