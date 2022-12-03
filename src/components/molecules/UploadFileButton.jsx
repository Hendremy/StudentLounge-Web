import { DriveFolderUploadRounded } from "@mui/icons-material";
import LabelIconButton from '../atoms/LabelIconButton';

export default function UploadFileButton(){
    return(
        <LabelIconButton text="Importer un fichier" icon={DriveFolderUploadRounded}>
            <input hidden accept="image/*" type="file" />
        </LabelIconButton>
    );
}