import { Grid } from "@mui/material";
import LessonList from "../components/organisms/LessonList";
import LessonHub from "../components/organisms/LessonHub";
import Lesson from "../models/lesson"
import { useParams } from "react-router-dom";
import { useAtom } from "jotai";
import { lessonsAtom } from "../stores/userStore";
import { useContext } from "react";
import { ApiServicesContext } from "../App";

export default function LessonsPage(){
    const { id } = useParams();
    const apiServices = useContext(ApiServicesContext);
    const lessonRepository = apiServices.lessonsRepo;
    const [lessons, setLessons] = useAtom(lessonsAtom);

    let lessonMap = {};

    const gridStyle = {
        height: 'auto',
        margin:"10vh auto",
        minHeight:'80vh'
    }

    return (
    <Grid container spacing={2} sx={gridStyle}>
        <Grid item xs={2}>
            <LessonList lessons={lessons}></LessonList>
        </Grid>
        <Grid item xs={10}>
            <LessonHub lesson={lessonMap[id]}></LessonHub>
        </Grid>
    </Grid>
    );
}