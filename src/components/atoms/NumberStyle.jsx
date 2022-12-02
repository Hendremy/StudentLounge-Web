import { Typography } from "@mui/material";
import {palette} from "../../AppTheme";

export default function NumberStyle({text}){
    return (
        <Typography marginRight={1} variant="h5" component="div" color={palette.iconActive}>{text}</Typography>
    );
}