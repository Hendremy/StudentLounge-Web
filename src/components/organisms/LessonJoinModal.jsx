import SendFormButton from "../atoms/SendFormButton";
import CenteredModal from "../atoms/CenteredModal";
import Title from "../atoms/Title";
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, TextField } from "@mui/material";
import { FileOpen, TextFields } from "@mui/icons-material";
import { useAtom } from "jotai";
import { lessonsAtom } from "../../stores/userStore";

export default function LessonJoinModal({open, onClose, callback, repository}){
    const [userLessons] = useAtom(lessonsAtom);


    return(
        <CenteredModal open={open} onClose={onClose}>
            <Title text={'Gérer mes cours'}/>
        </CenteredModal>
    );
}