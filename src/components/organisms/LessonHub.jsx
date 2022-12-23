import { Box, Button, Grid, Paper, Container } from "@mui/material";
import FileTable from "./FileTable";
import {palette} from "../../AppTheme";
import HubHeader from "../molecules/HubHeader";
import AskTutoringButton from "./AskTutoringButton";
import TutorRequestsButton from "../molecules/ShowTutorRequestButton";
import { useState, useEffect } from "react";
import OpenModalButton from "../molecules/OpenModalButton";
import { Groups, UploadFile } from "@mui/icons-material";
import FileUploadModal from "./FileUploadModal";
import TutoringRequestsModal from "./TutoringRequestsModal";

export default function LessonHub({lesson, lessonFileRepository, tutoringRepository}){
    const [lessonFiles, setLessonFiles] = useState([]);
    const [tutoringAsked, setTutoringAsked] = useState(lesson.tutoringIsAsked);
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
        minHeight:'75vh',
        padding: '1%'
    };

    const loadFiles = () => {
        if(lesson){
            lessonFileRepository.getLessonFiles({lessonId: lesson.id})
                .then(lessonFiles => {
                    setLessonFiles(lessonFiles);
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }

    useEffect(() => {
        loadFiles();
    },[]);

    const onFileUploaded = () => {
        loadFiles();
    };

    return(
        <Paper elevation ={10} style={paperStyle}>
            <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                <HubHeader title={lesson.name}/>
                <Container>
                    <OpenModalButton 
                    icon={UploadFile} 
                    text={'Importer un fichier'}
                    modal={FileUploadModal}
                    repository={lessonFileRepository}
                    onClose={onFileUploaded}
                    data={{lessonId: lesson.id}}
                    />
                    <AskTutoringButton
                        lesson={lesson}
                        callback={() => setTutoringAsked(true)}
                        repository={tutoringRepository}
                    />
                    {
                        !tutoringAsked && <OpenModalButton
                            icon={Groups}
                            text={'Voir les demandes de tutorat'}
                            modal={TutoringRequestsModal}
                            repository={tutoringRepository}
                            data={{lessonId: lesson.id}}
                        />
                    }
                </Container>
            </div>
            <Box sx={boxStyle}>
                <FileTable files={lessonFiles} filesRepository={lessonFileRepository}/>
            </Box>
        </Paper>
    );
}