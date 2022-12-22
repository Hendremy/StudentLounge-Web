import { Grid, Stack } from "@mui/material";
import Title from "../atoms/Title";

export default function HubHeader(props){

    return(
        <Stack direction={'column'} width={'auto'}>
                <Title text={props.title}/>
            <Stack width={'100%'} direction="row" justifyContent={'space-between'} spacing={2}>
                {props.children}
            </Stack>
        </Stack>
    );
}