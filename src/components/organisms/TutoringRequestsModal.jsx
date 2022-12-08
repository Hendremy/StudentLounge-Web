import CenteredModal from "../atoms/CenteredModal";
import Title from "../atoms/Title";
import { palette } from '../../appTheme';
import { Box, List } from "@mui/material";
import { useState, useEffect } from "react";

export default function TutoringRequestsModal ({open, onClose, repository, data}){
    const [requests, setRequests] = useState([]);
    const lessonId = data.lessonId;
    const boxStyle = {
        backgroundColor: palette.secondary,
        minHeight:'10vh',
        borderRadius: '5px'
    };

    useEffect(() => {
        repository.getAllRequestsOfLesson({lessonId: lessonId})
            .then(requestArray => setRequests(requestArray))
            .catch(error => console.log(error))
    },[]);

    return (
        <CenteredModal open={open} onClose={onClose}>
            <Title text={'Demandes de tutorats'}/>
            <Box sx={boxStyle}>
                <List>
                </List>
            </Box>
        </CenteredModal>
    );
}