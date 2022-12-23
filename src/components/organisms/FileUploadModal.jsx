import SendFormButton from "../atoms/SendFormButton";
import CenteredModal from "../atoms/CenteredModal";
import Title from "../atoms/Title";
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, TextField, Alert } from "@mui/material";
import { FileOpen, TextFields } from "@mui/icons-material";
import { useState } from "react";

export default function FileUploadModal({open, onClose, repository, data}){
    const [success, setSuccess] = useState(false);
    const [message, setMessage] = useState(null);
    const [error, setError] = useState(false);
    const lesson = data;

    const handleSubmit = (event) => {
        setSuccess(false);
        setError(false);
        event.preventDefault();
        let form = event.target;
        let file = form.file.files[0];
        let type = form.type.value;
        
        const formData = new FormData();
        formData.append('file', file);
        formData.append('type', type);
        formData.append('lessonId', lesson.id);

        repository.uploadFile({formData: formData})
            .then(
                () =>{
                    setSuccess(true);
                    setMessage('Fichier envoyé !');
                }
            )
            .catch( 
                error => {
                    setError(true);
                    setMessage(error.message);
            });
    }

    return(
        <CenteredModal open={open} onClose={onClose}>
            <Title text={"Importer un fichier"}/>
            <form onSubmit={handleSubmit}>
            <FormControl>
                <FormLabel>Fichier</FormLabel>
                <TextField name={'file'} type={'file'} accept={'application/pdf'}/>
            </FormControl>
            <FormControl>
                <FormLabel>Type</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="type"
                >
                    <FormControlLabel value="0" control={<Radio />} label="Synthèse" >
                        <FileOpen />
                    </FormControlLabel>
                    <FormControlLabel value="1" control={<Radio />} label="Notes" >
                        <TextFields />
                    </FormControlLabel>
                </RadioGroup>
            </FormControl>
                <SendFormButton text={'Envoyer'}/>
            </form>
            {success && (<Alert style={{marginTop:15}} severity="success">{message}</Alert>)}
            {error && (<Alert style={{marginTop:15}} severity="error">{message}</Alert>)}
        </CenteredModal>
    );
}