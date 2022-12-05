import {Box, Button, IconButton, Menu, Typography} from "@mui/material";
import {AccountCircle} from "@mui/icons-material";
import {Avatar} from "@mui/material";
import AuthNavStyle from "../atoms/AuthNavStyle";
import {useState} from "react";
import {palette} from "../../appTheme";
import {useNavigate} from "react-router-dom";

export default function AuthNavPrivate({user, logout}){
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const  handleMenu = (event) => {
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

    const UserImage = user.image 
        ? <Avatar alt={user.fullname} src={user.image} sx={{width: '24px', height:'24px'}}/> 
        : <AccountCircle /> ;

    return (
        <AuthNavStyle>
            <Typography component="span">
                {user.fullname}
            </Typography>
            <IconButton
                aria-label="Profile"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color={"inherit"}>
                {UserImage}
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
                    <Button onClick={() => logout()} style={buttonLogout}>
                        Se déconnecter
                    </Button>
                </Box>
            </Menu>
        </AuthNavStyle>
    );
}