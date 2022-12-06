import { Grid } from "@mui/material";
import LessonList from "../components/organisms/LessonList";
import LessonHub from "../components/organisms/LessonHub";
import { useParams } from "react-router-dom";
import { useAtom } from "jotai";
import { lessonsAtom } from "../stores/userStore";
import { useContext, useEffect } from "react";
import { ApiServicesContext } from "../App";

export default function LessonsPage(){
    const { id } = useParams();
    const apiServices = useContext(ApiServicesContext);
    const lessonRepository = apiServices.lessonRepo;
    const [lessons, setLessons] = useAtom(lessonsAtom);

    const gridStyle = {
        height: 'auto',
        margin:"10vh auto",
        minHeight:'80vh'
    }

    useEffect(() => {
        lessonRepository.getUserLessons()
        .then(lessonList => {
            console.log(lessonList)
            setLessons(lessonList);
        })
        .catch(error => {
            console.log(error);
        });
    },[]);

    return (
    <Grid container spacing={2} sx={gridStyle}>
        <Grid item xs={2}>
            <LessonList lessons={lessons}></LessonList>
        </Grid>
        <Grid item xs={10}>
            <LessonHub lesson={lessons.find(lesson => lesson.id === id)}></LessonHub>
        </Grid>
    </Grid>
    );
}