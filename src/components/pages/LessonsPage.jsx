import { Grid } from "@mui/material";
import LessonList from "../organisms/LessonList";
import LessonHub from "../organisms/LessonHub";
import { useParams } from "react-router-dom";
 
export default function LessonsPage(){
    let { id } = useParams();
    
    return (
    <Grid container spacing={2}>
        <Grid item xs={2}>
            <LessonList></LessonList>
        </Grid>
        <Grid item xs={10}>
            <LessonHub id={id}></LessonHub>
        </Grid>
    </Grid>
    );
}