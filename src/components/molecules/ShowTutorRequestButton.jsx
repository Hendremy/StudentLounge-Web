import { Groups } from "@mui/icons-material";
import LabelIconButton from '../atoms/LabelIconButton';

export default function ShowTutorRequestButton(){
    const text = "Voir les demandes de tuteur";

    return (
        <LabelIconButton text={text} icon={Groups}/>
    );
}