import { Typography } from "@mui/material";

export default function LinkText({text, event}){
    return (
        <Typography variant="body1" component="span" onClick={event}>{text}</Typography>
    );
}