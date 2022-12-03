import { School } from "@mui/icons-material";
import LabelIconButton from '../atoms/LabelIconButton';

export default function AskTutoratButton(){
    const text = "Demander un tuteur";

    return (
        <LabelIconButton text={text} icon={School}/>
    );
}