import { Chat, School } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { messagesPath } from "../../routes/StudentRoutes";
import LabelIconButton from '../atoms/LabelIconButton';

export default function AskTutoringButton({lesson, tutoringRequest, repository, callback}){
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const askTutorat = () => {
        repository.askTutoring({lessonId: lesson.id})
            .then(() => callback())
            .catch(error => setError(error))
    };

    const navToChat = () => {
        if(tutoringRequest !== null && !tutoringRequest.isPending){
            navigate(`${messagesPath}/${lesson.tutoring.id}`);
        }
    }

    if(tutoringRequest !== null){
        if(tutoringRequest.isPending){
            return <LabelIconButton disabled={true} onClick={() => {}} text={'Tutorat en attente'} icon={School}/>
        }else{
            return <LabelIconButton disabled={false} onClick={() => navToChat()} text={`Discuter avec ${lesson.tutoring.tutor.name}`} icon={Chat}/>
        }
    }else{
        return (
            <LabelIconButton onClick={() => askTutorat()} text={'Demander un tuteur'} icon={School}/>
        );
    }
}
