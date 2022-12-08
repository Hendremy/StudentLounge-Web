import SendFormButton from "../atoms/SendFormButton";
import CenteredModal from "../atoms/CenteredModal";
import Title from "../atoms/Title";
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, TextField } from "@mui/material";
import { FileOpen, TextFields } from "@mui/icons-material";

export default function FileUploadModal({open, onClose, callback, repository, data}){

    const handleSubmit = (event) => {
        event.preventDefault();
        let form = event.target;
        let file = form.file.files[0];
        let type = form.type.value;
        
        const formData = new FormData();
        formData.append('file', file);
        formData.append('type', type);
        formData.append('lessonId', data.lessonId);

        repository.uploadFile({formData: formData})
            .then(
                () =>{
                    callback();
                    onClose();
                }
            )
            .catch( 
                error => {
                    console.log(error);
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
        </CenteredModal>
    );
}