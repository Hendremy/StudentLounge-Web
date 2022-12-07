import CenteredModal from "../atoms/CenteredModal";
import Title from "../atoms/Title";
import { palette } from "../../appTheme";
import { useAtom } from "jotai";
import { lessonsAtom } from "../../stores/userStore";
import { useState } from "react";
import { useEffect } from "react";
import JoinLessonRow from "../molecules/JoinLessonRow";
import { Box, List, Alert } from "@mui/material";

export default function LessonJoinModal({open, onClose, repository}){
    const [userLessons] = useAtom(lessonsAtom);
    const [allLessons, setAllLessons] = useState([]);
    const [lessonRows, setLessonRows] = useState([]);
    const [error, setError] = useState(null);
    const boxStyle = {
        backgroundColor: palette.secondary,
        minHeight:'10vh',
        borderRadius: '5px'
    };

    const renderJoinLessons = () => {
        setLessonRows(
            allLessons.map(
                lesson => <JoinLessonRow 
                                lesson={lesson}
                                isJoined={userLessons.find(userLesson => userLesson.id === lesson.id)}
                                repository={repository}
                />))
    };

    useEffect(() => {
        repository.getAllLessons()
            .then(lessons => setAllLessons(lessons))
            .catch(error => setError(error));
    }
    ,[]);

    useEffect(() => {
        renderJoinLessons()
    }
    ,[userLessons]);

    return(
        <CenteredModal open={open} onClose={onClose}>
            <Title text={'Gérer mes cours'}/>
            {error && (<Alert style={{marginTop:15}} severity="error">{error.message}</Alert>)}
            <Box sx={boxStyle}>
                <List>
                    {lessonRows}
                </List>
            </Box>
        </CenteredModal>
    );
}