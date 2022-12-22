import { Chat, School } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { messagesPath } from "../../routes/StudentRoutes";
import LabelIconButton from '../atoms/LabelIconButton';

export default function AskTutoringButton({lesson, repository}){
    const [alreadyAsked, setAlreadyAsked] = useState(false);
    const [error, setError] = useState(null);
    const text = error ? 'Erreur lors de la demande' : alreadyAsked ? "Demande de tuteur envoyée" : "Demander un tuteur";
    const navigate = useNavigate();

    const askTutorat = () => {
        repository.askTutoring({lessonId: lesson.id})
            .then(() => setAlreadyAsked(true))
            .catch(error => setError(error))
    };

    const navToChat = () => {
        if(lesson.tutoringIsAsked && !lesson.tutoring.isPending){
            navigate(`${messagesPath}/${lesson.tutoring.id}`);
        }
    }

    const disabled = alreadyAsked || error;

    if(lesson.tutoringIsAsked){
        if(lesson.tutoring.isPending){
            return <LabelIconButton disabled={true} onClick={() => {}} text={'Tutorat en attente'} icon={School}/>
        }else{
            return <LabelIconButton disabled={false} onClick={() => navToChat()} text={`Discuter avec ${lesson.tutoring.tutor.name}`} icon={Chat}/>
        }
    }else{
        return (
            <LabelIconButton disabled={disabled} onClick={() => askTutorat()} text={text} icon={School}/>
        );
    }
}