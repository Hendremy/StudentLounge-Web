import { Button } from "@mui/material";

export default function AskTutoratButton(props){
    let Icon = props.icon;

    return (
        <Button onClick={props.onClick} variant="contained" component="label">
            {props.text}
            <Icon/>
            {props.children}
        </Button>
    );
}