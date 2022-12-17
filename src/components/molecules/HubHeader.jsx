import { Grid, Stack } from "@mui/material";
import Title from "../atoms/Title";

export default function HubHeader(props){

    return(
        <Grid>
            <Grid item xs={4}>
                <Title text={props.title}/>
            </Grid>
            <Grid item xs={8}>
                <Stack direction="row" spacing={2}>
                    {props.children}
                </Stack>
            </Grid>
        </Grid>
    );
}