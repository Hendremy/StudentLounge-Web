import {Box, Button, IconButton, Menu, Typography} from "@mui/material";
import UserImage from "../atoms/UserImage";
import AuthNavStyle from "../atoms/AuthNavStyle";
import {useState} from "react";
import {palette} from "../../AppTheme";

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
                <UserImage user={user}
                />
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
                    <Typography component="span" variant="body1">
                        Rôles : {user.roles.join(",")}
                    </Typography>
                    <Button onClick={() => logout()} style={buttonLogout}>
                        Se déconnecter
                    </Button>
                </Box>
            </Menu>
        </AuthNavStyle>
    );
}