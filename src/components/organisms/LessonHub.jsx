import { Box, Paper } from "@mui/material";
import Title from "../atoms/Title";
import {palette, theme} from "../../AppTheme";

export default function LessonHub(props){
    const lesson = props.lesson;

    const paperStyle = {
        padding: 20,
        height:'auto',
        margin:"10vh auto",
        backgroundColor:palette.primary,
        color:'white',
        borderRadius:25
    };

    const boxStyle = {
        height: '100%',
        backgroundColor: palette.primary,
        minHeight:'80vh',
    };

    const files = [
        
    ];

    if(lesson){
        return(
            <Paper elevation ={10} style={paperStyle}>
                <Title text={lesson.name}/>
                <Box sx={boxStyle}>
    
                </Box>
            </Paper>
        );
    }else{
        return(
            <Paper elevation ={10} style={paperStyle}>
                <Title text={"Aucun cours sélectionné"}/>
                <Box sx={boxStyle}>
    
                </Box>
            </Paper>
        );
    }
    
}