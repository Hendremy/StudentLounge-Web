import { Toc } from "@mui/icons-material";
import { Box, IconButton, List, Paper } from "@mui/material";
import {palette, theme} from "../../appTheme";
import LessonRow from "../molecules/LessonRow";
import ListHeader from '../molecules/ListHeader';
import OpenModalButton from "../molecules/OpenModalButton";
import { useState, useEffect } from "react";
import LessonJoinModal from "./LessonJoinModal";
import { useAtom } from "jotai";
import { lessonsAtom } from "../../stores/userStore";

export default function LessonList({lessonRepository}){
    const [lessonList, setLessonList] = useAtom(lessonsAtom);
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

    const onLessonLeftOrJoined = (lesson, joined) => {
        let lessonsCopy = [...lessonList];
        if(joined){
            lessonsCopy.push(lesson);
        }else{
            lessonsCopy.remove(lesson);
        }
        setLessonList(lessonsCopy);
    }

    const renderLessonRows = () => {
        setLessonRows(lessonList.map(
            (lesson) => <LessonRow key={lesson.id} lesson={lesson}></LessonRow>
        ))
    }

    useEffect(() => {
        renderLessonRows();
    },[lessonList])

    return(
        <Paper elevation ={10} style={paperStyle}>
            <ListHeader title='Cours'>
            <OpenModalButton 
                    icon={Toc}
                    modal={LessonJoinModal}
                    repository={lessonRepository}
                    callback={onLessonLeftOrJoined}/>
            </ListHeader>
            <Box sx={boxStyle}>
                <List>
                    {lessonRows}
                </List>
            </Box>
        </Paper>
    );
}