import { Box, Button, Grid, Paper } from "@mui/material";
import FileTable from "./FileTable";
import {palette} from "../../appTheme";
import HubHeader from "../molecules/HubHeader";
import AskTutoratButton from "../molecules/AskTutoratButton";
import UploadFileButton from "../molecules/UploadFileButton";
import TutorRequestsButton from "../molecules/ShowTutorRequestButton";
import { useState, useEffect } from "react";

export default function LessonHub({lesson, lessonFileRepository}){
    const [lessonFiles, setLessonFiles] = useState([]);
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

    useEffect(() => {
        if(lesson){
            lessonFileRepository.getLessonFiles(lesson.id)
                .then(lessonFiles => {
                    setLessonFiles(lessonFiles);
                })
                .catch(error => {
                    console.log(error)
                })
        }
    },[]);

    return(
        <Paper elevation ={10} style={paperStyle}>
            <HubHeader title={lesson.name}>
                <UploadFileButton/>
                <AskTutoratButton/>
                <TutorRequestsButton/>
            </HubHeader>
            <Box sx={boxStyle}>
                <FileTable files={lessonFiles}/>
            </Box>
        </Paper>
    );
}