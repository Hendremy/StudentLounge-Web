import { Typography } from "@mui/material";
import {iconActive} from "../../AppTheme";

export default function NumberStyle({text}){
    return (
        <Typography marginRight={1} variant="h5" component="div" color={iconActive}>{text}</Typography>
    );
}