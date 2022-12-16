import { ListItem } from "@mui/material";

export default function AppointmentRow({appointment}){
    return (
        <ListItem>
            <span>Rdv n°{appointment.id}</span>
        </ListItem>
    );
}