import { TableRow, TableCell } from "@mui/material";

export default function FileRow(props){
    let file = props.file;

    return(
        <TableRow>
            <TableCell>Type</TableCell>
            <TableCell>Nom</TableCell>
            <TableCell>Auteur</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Actions</TableCell>
        </TableRow>
    );
}