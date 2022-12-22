import { Grid } from "@mui/material";
import LessonList from "../components/organisms/LessonList";
import LessonHub from "../components/organisms/LessonHub";
import { useParams } from "react-router-dom";
import { useAtom } from "jotai";
import { lessonsAtom, selectedLessonAtom } from "../stores/userStore";
import { useContext } from "react";
import { ApiServicesContext } from "../App";
import EmptyLessonHub from "../components/organisms/EmptyLessonHub";
import roles from "../models/roles";
import { useEffect, useState } from "react";

export default function LessonsPage(){
    const { id } = useParams();
    const [selectedLesson, setSelectedLesson] = useAtom(selectedLessonAtom);
    const [lessons,] = useAtom(lessonsAtom);
    const [activeLesson, setActiveLesson] = useState();
    const studentApiServices = useContext(ApiServicesContext)[roles.student];
    const lessonRepository = studentApiServices.lessonRepository;
    const lessonFileRepository = studentApiServices.lessonFileRepository;
    const tutoringRepository = studentApiServices.tutoringRepository;

    const gridStyle = {
        height: 'auto',
        margin:"5vh auto",
        minHeight:'80vh'
    }

    useEffect(() => {
        if(id){
            setSelectedLesson(id);
        }
    });

    useEffect(()=>{
        let lesson = lessons.find(lesson => lesson.id === selectedLesson);
        setActiveLesson(lesson);
    },[selectedLesson]);
    
    if(activeLesson){
        return (
            <Grid container spacing={2} sx={gridStyle}>
                <Grid item xs={2}>
                    <LessonList lessonRepository={lessonRepository}></LessonList>
                </Grid>
                <Grid item xs={10}>
                    <LessonHub 
                        key={activeLesson.id} 
                        lesson={activeLesson} 
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