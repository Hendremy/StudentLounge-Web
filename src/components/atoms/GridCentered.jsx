import {Grid} from "@mui/material";

export default function GridCentered({component}){
    return (<Grid
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        height={"100%"}>
            {component}
        </Grid>);
}