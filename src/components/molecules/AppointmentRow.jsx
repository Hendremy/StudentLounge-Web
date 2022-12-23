import { ListItem, Stack, Typography, Container } from "@mui/material";
import UserImage from "../atoms/UserImage";
import {palette} from "../../AppTheme";

export default function AppointmentRow({appointment}){
    const style = {
        bgcolor: palette.secondary,
        color: 'primary',
        marginBottom: 1,
        borderRadius: 3
    }

    return (
        <ListItem sx={style}>
            <Stack direction={'column'}>
            <Typography>{appointment.lesson}</Typography>
            <Typography>{appointment.date}</Typography>
                <Typography>de {appointment.startHour} à {appointment.endHour} </Typography>
                <Typography> à {appointment.location} </Typography>
                <Stack direction={'row'}>
                    <UserImage user={{fullname: appointment.tutor.name, image: appointment.tutor.image}} />
                    <UserImage user={{fullname: appointment.tutored.name, image: appointment.tutored.image}} />
                </Stack>
            </Stack>
        </ListItem>
    );
}