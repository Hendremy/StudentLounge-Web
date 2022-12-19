import { Toc } from "@mui/icons-material";
import { Box, List, Paper } from "@mui/material";
import {palette} from "../../AppTheme";
import LessonRow from "../molecules/LessonRow";
import ListHeader from '../molecules/ListHeader';
import OpenModalButton from "../molecules/OpenModalButton";
import { useState, useEffect } from "react";
import LessonJoinModal from "./LessonJoinModal";
import { useAtom } from "jotai";
import { lessonsAtom } from "../../stores/userStore";

export default function LessonList({lessonRepository, reloadList}){
    const [userLessons, setUserLessons] = useAtom(lessonsAtom);
    const [lessonRows, setLessonRows] = useState([]);

    const paperStyle = {
        padding: 20,
        height:'auto',
        backgroundColor:palette.primary,
        color:'white',
        borderRadius:25
    };

    const boxStyle = {
        height: '80vh',
        backgroundColor: palette.secondary,
        borderRadius: '5px',
        overflow: 'auto'
    };

    const loadUserLessons = () => {
        lessonRepository.getUserLessons()
        .then(lessonList => {
            setUserLessons(lessonList);
        })
        .catch(error => {
            console.log(error);
        });
    }

    const renderLessonRows = (lessons) => {
        setLessonRows(lessons.map(
            (lesson) => <LessonRow key={lesson.id} lesson={lesson}></LessonRow>
        ))
    }

    useEffect(() => {
        loadUserLessons();
    },[]);

    useEffect(() => {
        renderLessonRows(userLessons);
    },[userLessons])

    return(
        <Paper elevation ={10} style={paperStyle}>
            <ListHeader title='Cours'>
            <OpenModalButton 
                    icon={Toc}
                    modal={LessonJoinModal}
                    onClose={loadUserLessons}
                    repository={lessonRepository}/>
            </ListHeader>
            <Box sx={boxStyle}>
                <List>
                    {lessonRows}
                </List>
            </Box>
        </Paper>
    );
}