import { Button, IconButton } from "@mui/material";

export default function LabelIconButton({icon, text, onClick, children, disabled = false}){
    let Icon = icon;

    if(text){
        return (
            <Button onClick={onClick} variant="contained" component="label" disabled={disabled}>
                {text}
                <Icon/>
                {children}
            </Button>
        );
    }else{
        return (
            <IconButton onClick={onClick} disabled={disabled}>
                <Icon/>
            </IconButton>
        );
    }
    
}