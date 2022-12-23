import { UploadFile } from "@mui/icons-material";
import { useRef } from 'react';
import LabelIconButton from '../atoms/LabelIconButton';

export default function UploadCalendarButton({agendaRepository, onCalendarUpdated}){
    const fileInput = useRef(null);

    function handleCalendarUpload(event){
        let icalFile = event.target.files[0];
        const formData = new FormData();
        formData.append('calendarFile', icalFile);
        agendaRepository.uploadCalendarFile({formData: formData})
            .then(agendas => {
                onCalendarUpdated(agendas);
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
                onClick={() => fileInput.current.click()}
            />
        </>
    )
}