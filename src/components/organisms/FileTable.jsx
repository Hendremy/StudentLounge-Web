import { Table, TableCell, TableRow, TableContainer, Paper, TableHead, TableBody } from "@mui/material";
import FileRow from '../molecules/FileRow';

export default function FileTable({files, filesRepository}){
    let fileRows = [];
    if(files){
        fileRows = files.map(file => {
            return <FileRow key={file.id} file={file} repository={filesRepository}/>
        });
    }

    return (
    <TableContainer component={Paper}>
        <Table>
            <TableHead>
                <TableRow key={'filehead'}>
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