import { Table, TableCell, TableRow, TableContainer, Paper, TableHead, TableBody } from "@mui/material";
import FileRow from '../molecules/FileRow';

export default function FileTable(props){
    let files = props.files;

    let fileRows = [];
    if(files){
        files.forEach(file => fileRows.push(<FileRow file={file}/>));
    }

    return (
    <TableContainer component={Paper}>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Type</TableCell>
                    <TableCell>Nom</TableCell>
                    <TableCell>Auteur</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {fileRows}
            </TableBody>
        </Table>
    </TableContainer>);
}