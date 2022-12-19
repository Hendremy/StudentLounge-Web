import { CircularProgress, Stack } from "@mui/material";

export default function HubProgress(){

    return (
    <Stack alignContent='center'>
            <CircularProgress sx={{color: 'white'}} />
    </Stack>
    );
}