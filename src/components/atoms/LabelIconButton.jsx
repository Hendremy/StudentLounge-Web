import { Button, IconButton } from "@mui/material";

export default function AskTutoratButton(props){
    let Icon = props.icon;

    if(props.text){
        return (
            <Button onClick={props.onClick} variant="contained" component="label">
                {props.text}
                <Icon/>
                {props.children}
            </Button>
        );
    }else{
        return (
            <IconButton onClick={props.onClick}>
                <Icon/>
            </IconButton>
        );
    }
    
}