import { Download} from "@mui/icons-material";
import { TableRow, TableCell, IconButton } from "@mui/material";
import formatDate from "../../utils/dateFormatter";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function UserRow({user, repository}){
    const onUpdate = () => {
        repository.updateUser({userId: user.id})
    }

    const onDelete = () => {
        repository.deleteUser({userId: user.id})
    }
    return(
        <TableRow>
            <TableCell style={style}>{user.id}</TableCell>
            <TableCell style={style}>{user.firstname}</TableCell>
            <TableCell style={style}>{user.lastname}</TableCell>
            <TableCell style={style}>{user.username}</TableCell>
            <TableCell style={style}>{user.password}</TableCell>
            <TableCell style={stylebutton}>
                <IconButton color="primary" onClick={onUpdate} disabled={user.password ? false : true}>
                    <EditIcon/>
                </IconButton>
            </TableCell>
            <TableCell style={stylebutton}>
                <IconButton color="primary" onClick={onDelete}>
                    <DeleteIcon/>
                </IconButton>
            </TableCell>
        </TableRow>
    );
}