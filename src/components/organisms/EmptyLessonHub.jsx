import { Box, Button, Grid, Paper } from "@mui/material";
import Title from "../atoms/Title";
import {palette} from "../../AppTheme";
import GridCentered from "../atoms/GridCentered";

export default function EmptyLessonHub(){
    const paperStyle = {
        padding: 20,
        height:'auto',
        backgroundColor:palette.primary,
        color:'white',
        borderRadius:25
    };

    const boxStyle = {
        height: '100%',
        backgroundColor: palette.primary,
        minHeight:'80vh',
        padding: '1%'
    };

    return(
        <Paper elevation ={10} style={paperStyle}>
            <Box sx={boxStyle}>
                <GridCentered>
                    <Title text={"Aucun cours sélectionné"}/>
                </GridCentered>
            </Box>
        </Paper>
    );
}