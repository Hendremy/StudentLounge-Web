import { Box, List, Paper } from "@mui/material";
import {ThemeProvider} from "@mui/material";
import Title from "../atoms/Title";
import {palette, theme} from "../../AppTheme";
import Lesson from "../../models/lesson"
import LessonRow from "../molecules/LessonRow";


export default function LessonList(props){

    let lessons = props.lessons;
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
        backgroundColor: palette.secondary,
        minHeight:'80vh',
        borderRadius: '25px'
    };

    let lessonList = [];

    lessons.forEach(
        (lesson) => {
        lessonList.push(<LessonRow lesson={lesson}></LessonRow>)
    });

    return(
        <Paper elevation ={10} style={paperStyle}>
            <Title text={"Cours"}/>
            <Box sx={boxStyle}>
                <List>
                    {lessonList}
                </List>
            </Box>
        </Paper>
    );
}