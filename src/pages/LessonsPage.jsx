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
    const lessonsRepository = apiServices.lessonsRepo;
    //const [lessons, setLessons] = useAtom(lessonsAtom);

    const lessons = [
        new Lesson('aza','Mathématiques'),
        new Lesson('eze','Informatique'),
        new Lesson('ozo','Cybersécurité')
    ];

    const lessonMap = {
        "aza" : new Lesson('aza','Mathématiques'),
        "eze" : new Lesson('eze','Informatique'),
        "ozo" : new Lesson('ozo','Cybersécurité')
    };

    return (
    <Grid container spacing={2}>
        <Grid item xs={2}>
            <LessonList lessons={lessons}></LessonList>
        </Grid>
        <Grid item xs={10}>
            <LessonHub lesson={lessonMap[id]}></LessonHub>
        </Grid>
    </Grid>
    );
}