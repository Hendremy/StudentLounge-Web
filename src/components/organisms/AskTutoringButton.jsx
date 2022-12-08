import { School } from "@mui/icons-material";
import { useState } from "react";
import LabelIconButton from '../atoms/LabelIconButton';

export default function AskTutoringButton({lessonId, repository}){
    const [alreadyAsked, setAlreadyAsked] = useState(false);
    const [error, setError] = useState(null);
    const text = error ? 'Erreur lors de la demande' : alreadyAsked ? "Demande de tuteur envoyée" : "Demander un tuteur";

    const askTutorat = () => {
        repository.askTutoring({lessonId: lessonId})
            .then(() => setAlreadyAsked(true))
            .catch(error => setError(error))
    };

    const disabled = alreadyAsked || error;

    return (
        <LabelIconButton disabled={disabled} onClick={() => askTutorat()} text={text} icon={School}/>
    );
}