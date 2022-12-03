import { Box, Button, Grid, Paper } from "@mui/material";
import Title from "../atoms/Title";
import FileTable from "./FileTable";
import {palette, theme} from "../../AppTheme";
import LessonFile from "../../models/lessonfile"
import HubHeader from "../molecules/HubHeader";
import { DriveFolderUploadRounded, UploadFile } from "@mui/icons-material";
import AskTutoratButton from "../molecules/AskTutoratButton";
import UploadFileButton from "../molecules/UploadFileButton";
import ShowTutorRequestButton from "../molecules/ShowTutorRequestButton";

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
        padding: '2%'
    };

    const files = [
        new LessonFile("a",1,"Api pour les nuls","Zuck",new Date()),
        new LessonFile("b",0,"Api REST","Zuck",new Date()),
        new LessonFile("c",1,"Api pour les nuls","Zuck",new Date()),
        new LessonFile("d",0,"Api LOLLOL","Zuck",new Date()),
        new LessonFile("e",1,"Api pour les nuls","Zuck",new Date()),
    ];

    if(lesson){
        return(
            <Paper elevation ={10} style={paperStyle}>
                <HubHeader title={lesson.name}>
                    <UploadFileButton/>
                    <AskTutoratButton/>
                    <ShowTutorRequestButton/>
                </HubHeader>
                <Box sx={boxStyle}>
                    <FileTable files={files}/>
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