import { Typography } from "@mui/material";

export default function Title({text}){
    return (
        <Typography variant="h5" component="div">{text}</Typography>
    );
}