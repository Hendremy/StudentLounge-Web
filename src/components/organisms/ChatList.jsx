import { Toc } from "@mui/icons-material";
import { Box, List, Paper } from "@mui/material";
import {palette} from "../../appTheme";
import LessonRow from "../molecules/LessonRow";
import ListHeader from '../molecules/ListHeader';
import OpenModalButton from "../molecules/OpenModalButton";
import { useState, useEffect } from "react";
import LessonJoinModal from "./LessonJoinModal";
import { useAtom } from "jotai";
import { lessonsAtom } from "../../stores/userStore";

export default function ChatList({lessonRepository, reloadList}){
    const [userChatGroups, setUserChatGroups] = useAtom(lessonsAtom);
    const [lessonRows, setLessonRows] = useState([]);

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
        borderRadius: '5px'
    };

    const loadUserLessons = () => {
        lessonRepository.getUserLessons()
        .then(lessonList => {
            setUserChatGroups(lessonList);
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
        renderLessonRows(userChatGroups);
    },[userChatGroups])

    return(
        <Paper elevation ={10} style={paperStyle}>
            <ListHeader title='Messagerie'>
            </ListHeader>
            <Box sx={boxStyle}>
                <List>
                    {lessonRows}
                </List>
            </Box>
        </Paper>
    );
}