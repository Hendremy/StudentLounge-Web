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
            <TableCell width={5}>{user.id}</TableCell>
            <TableCell width={5}>{user.firstname}</TableCell>
            <TableCell width={5}>{user.lastname}</TableCell>
            <TableCell width={5}>{user.username}</TableCell>
            <TableCell width={5}>{user.password}</TableCell>
            <TableCell>
                <IconButton color="primary" onClick={onUpdate}>
                    <EditIcon/>
                </IconButton>
            </TableCell>
            <TableCell>
                <IconButton color="primary" onClick={onDelete}>
                    <DeleteIcon/>
                </IconButton>
            </TableCell>
        </TableRow>
    );
}