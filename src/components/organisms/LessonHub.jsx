import { Box, Button, Grid, Paper } from "@mui/material";
import FileTable from "./FileTable";
import {palette} from "../../appTheme";
import HubHeader from "../molecules/HubHeader";
import AskTutoratButton from "../molecules/AskTutoratButton";
import TutorRequestsButton from "../molecules/ShowTutorRequestButton";
import { useState, useEffect } from "react";
import OpenModalButton from "../molecules/OpenModalButton";
import { UploadFile } from "@mui/icons-material";
import FileUploadModal from "./FileUploadModal";

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
            lessonFileRepository.getLessonFiles({lessonId: lesson.id})
                .then(lessonFiles => {
                    setLessonFiles(lessonFiles);
                })
                .catch(error => {
                    console.log(error)
                })
        }
    },[]);

    const onFileUploaded = () => {

    };

    return(
        <Paper elevation ={10} style={paperStyle}>
            <HubHeader title={lesson.name}>
                <OpenModalButton 
                    icon={UploadFile} 
                    text={'Importer un fichier'}
                    modal={FileUploadModal}
                    repository={lessonFileRepository}
                    callback={onFileUploaded}/>
                <AskTutoratButton/>
                <TutorRequestsButton/>
            </HubHeader>
            <Box sx={boxStyle}>
                <FileTable files={lessonFiles}/>
            </Box>
        </Paper>
    );
}