import { Grid } from "@mui/material";
import LessonList from "../components/organisms/LessonList";
import LessonHub from "../components/organisms/LessonHub";
import { useParams } from "react-router-dom";
import { useAtom } from "jotai";
import { lessonsAtom } from "../stores/userStore";
import { useContext, useEffect, useState } from "react";
import { ApiServicesContext } from "../App";
import EmptyLessonHub from "../components/organisms/EmptyLessonHub";

export default function LessonsPage(){
    const { id } = useParams();
    const [lessons,] = useAtom(lessonsAtom);
    const apiServices = useContext(ApiServicesContext);
    const lessonRepository = apiServices.lessonRepo;
    const lessonFileRepository = apiServices.lessonFileRepo;

    const gridStyle = {
        height: 'auto',
        margin:"10vh auto",
        minHeight:'80vh'
    }


    let selectedLesson = lessons.find(lesson => lesson.id === id);
    
    if(selectedLesson){
        return (
            <Grid container spacing={2} sx={gridStyle}>
                <Grid item xs={2}>
                    <LessonList lessonRepository={lessonRepository}></LessonList>
                </Grid>
                <Grid item xs={10}>
                    <LessonHub key={selectedLesson.id} lesson={selectedLesson} lessonFileRepository={lessonFileRepository}></LessonHub>
                </Grid>
            </Grid>
        );
    }else{
        return (
            <Grid container spacing={2} sx={gridStyle}>
                <Grid item xs={2}>
                    <LessonList lessons={lessons} lessonRepository={lessonRepository}></LessonList>
                </Grid>
                <Grid item xs={10}>
                    <EmptyLessonHub />
                </Grid>
            </Grid>
        );
    }
    
}