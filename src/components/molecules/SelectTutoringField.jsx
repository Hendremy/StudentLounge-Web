import { FormControl, InputLabel, Select, MenuItem } from "@mui/material"

export default function SelectTutoringField({name, tutorings}){

    const style = {
        color: '#FFFFFF',
        borderColor: '#FFFFFF'
    };

    return(
        <FormControl fullWidth>
            <InputLabel sx={style} id="tutoring-label">Tutorat</InputLabel>
            <Select 
                name={name}
                sx={style}
                labelId="tutoring-label"
                id="tutoring"
                label="tutoringId"
            >
                {
                    tutorings.map(t => <MenuItem value={t.id}> {t.lesson} : {t.tutor.name} & {t.tutored.name}</MenuItem>)
                }
            </Select>
        </FormControl>
    )
}