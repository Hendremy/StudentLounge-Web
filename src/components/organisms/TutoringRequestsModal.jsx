import CenteredModal from "../atoms/CenteredModal";
import Title from "../atoms/Title";
import { palette } from '../../appTheme';
import { Box, List } from "@mui/material";
import { useState, useEffect } from "react";
import TutoringRequestRow from '../molecules/TutoringRequestRow';

export default function TutoringRequestsModal ({open, onClose, repository, data}){
    const [requests, setRequests] = useState([]);
    const [requestRows, setRequestRows] = useState([]);
    const [error, setError] = useState(null);
    const lessonId = data.lessonId;
    const boxStyle = {
        backgroundColor: palette.secondary,
        minHeight:'30vh',
        borderRadius: '5px'
    };

    const renderRequests = () => {
        setRequestRows(
            requests.map(
                req => <TutoringRequestRow request={req} repository={repository} />));
    }

    useEffect(() => {
        repository.getAllRequestsOfLesson({lessonId: lessonId})
            .then(requestArray => setRequests(requestArray))
            .catch(error => setError(error))
    },[]);

    useEffect(() => {
        renderRequests();
    },[requests])

    return (
        <CenteredModal key={lessonId} open={open} onClose={onClose}>
            <Title text={'Demandes de tutorats'}/>
            <Box sx={boxStyle}>
                <List>
                    {requestRows}
                </List>
            </Box>
        </CenteredModal>
    );
}