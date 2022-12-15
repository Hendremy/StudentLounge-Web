import { UploadFile } from "@mui/icons-material";
import { useRef } from 'react';
import LabelIconButton from '../atoms/LabelIconButton';

export default function UploadCalendarButton({agendaRepository, onCalendarUploaded}){
    const fileInput = useRef(null);

    function handleCalendarUpload(event){
        let icalFile = event.target.files[0];
        const formData = new FormData();
        formData.append('file', icalFile);
        agendaRepository.uploadCalendarFile(formData)
            .then(agendas => {
                onCalendarUploaded(agendas);
            });
    }

    return(
        <>
            <input
                ref={fileInput}
                onChange={handleCalendarUpload}
                type="file"
                accept="text/calendar"
                style={{ display: "none" }} 
            />
            <LabelIconButton 
                text = "Importer un calendrier"
                icon = {UploadFile}
                onClick={() => fileInput.click()}
            />
        </>
    )
}