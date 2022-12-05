import { Toc } from "@mui/icons-material";
import { Box, IconButton, List, Paper } from "@mui/material";
import {palette, theme} from "../../appTheme";
import LessonRow from "../molecules/LessonRow";
import ListHeader from '../molecules/ListHeader';

export default function LessonList(props){

    let lessons = props.lessons;
    const paperStyle = {
        padding: 20,
        height:'auto',
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
    //TODO: Charger la liste des lessons, p-e utiliser hook useAsync de ReactAsync ?

    lessons.forEach(
        (lesson) => {
        lessonList.push(<LessonRow lesson={lesson}></LessonRow>)
    });

    return(
        <Paper elevation ={10} style={paperStyle}>
            <ListHeader title='Cours'>
                <IconButton sx={{color: "white"}}>
                    <Toc/>
                </IconButton>
            </ListHeader>
            <Box sx={boxStyle}>
                <List>
                    {lessonList}
                </List>
            </Box>
        </Paper>
    );
}