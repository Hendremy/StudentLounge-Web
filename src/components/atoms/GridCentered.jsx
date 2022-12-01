import {Grid} from "@mui/material";

export default function GridCentered({children}){
    return (<Grid
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        height={"100%"}>
            {children}
        </Grid>);
}