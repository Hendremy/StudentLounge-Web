import {AccountCircle} from "@mui/icons-material";
import {Avatar} from "@mui/material";

export default function UserImage({user}){

    if(user.image){
        return <Avatar alt={user.fullname} src={user.image} sx={{width: '24px', height:'24px'}}/> 
    }else{
        return <AccountCircle /> 
    }
}