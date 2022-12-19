import { Grid } from "@mui/material";
import LessonList from "../components/organisms/LessonList";
import LessonHub from "../components/organisms/LessonHub";
import { useParams } from "react-router-dom";
import { useAtom } from "jotai";
import { lessonsAtom } from "../stores/userStore";
import { useContext } from "react";
import { ApiServicesContext } from "../App";
import EmptyLessonHub from "../components/organisms/EmptyLessonHub";
import roles from "../models/roles";

export default function LessonsPage(){
    const { id } = useParams();
    const [lessons,] = useAtom(lessonsAtom);
    const studentApiServices = useContext(ApiServicesContext)[roles.student];
    const lessonRepository = studentApiServices.lessonRepository;
    const lessonFileRepository = studentApiServices.lessonFileRepository;
    const tutoringRepository = studentApiServices.tutoringRepository;

    const gridStyle = {
        height: 'auto',
        margin:"5vh auto",
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
                    <LessonHub 
                        key={selectedLesson.id} 
                        lesson={selectedLesson} 
                        lessonFileRepository={lessonFileRepository}
                        tutoringRepository={tutoringRepository}
                        />
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