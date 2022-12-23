//import { Table, TableCell, TableRow, TableContainer, Paper, TableHead, TableBody } from "@mui/material";
import { IconButton } from '@mui/material';
import FileRow from '../molecules/FileRow';
import { DataGrid, frFR, GridEditModes } from "@mui/x-data-grid";
import { Download, InsertDriveFile, TextFields } from '@mui/icons-material';
import { formatDate } from "../../utils/myDateFormatter";


export default function FileTable({files, filesRepository}){
    let fileRows = [];
    if(files){
        fileRows = files.map(file => {
            return {
                id: file.id,
                name: file.name,
                type: file.type,
                user: file.user,
                date: formatDate(file.date),
            }
        });
    }

    const onDownload = (row) => {
        filesRepository.downloadFile({lessonFileId: row.id})
            .then(blob => {
                const objectURL = URL.createObjectURL(blob);
                var link = document.createElement("a");
                link.download = row.name;
                link.href = objectURL;
                link.target = "_blank";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            });
    }

    let columns = [
        {
            field: 'id',
            hide: true
        },
        { 
            field: 'type', 
            headerName: 'Type', 
            editable: false, 
            width:150,
            renderCell: (params) => {
                switch(params.row.type){
                    case 1:
                        return <TextFields />;
                        break;
                    default:
                        return <InsertDriveFile />;
                        break;
                }
            }
        },
        { field: 'name', headerName: 'Nom du fichier', editable: false, flex: 1},
        { field: 'user', headerName: 'Auteur', editable: false, flex: 1},
        { field: 'date', headerName: 'Date de publication', editable: false, flex:1},
        { field: 'download', 
            headerName: "Télécharger",
            editable: false, 
            renderCell: (params) => {
                return (<IconButton color="primary" onClick={(event) => {onDownload(params.row)}} disabled={params.row.fromGoogle}>
                            <Download/>
                        </IconButton>)
            }
        },
    ]


    return (
        <div style={{ height: '75vh', minWidth: '61vw', backgroundColor:"white", borderRadius:10}}>
            <DataGrid 
                localeText={frFR.components.MuiDataGrid.defaultProps.localeText}
                style={{borderRadius:10}}
                rows={fileRows}
                columns={columns}
                experimentalFeatures={{ newEditingApi: true }}
                onCellClick={() => {}}
                onRowClick={() => {}}
            />
        </div>
    )
    // return (
    // <TableContainer component={Paper}>
    //     <Table>
    //         <TableHead>
    //             <TableRow key={'filehead'}>
    //                 <TableCell>Type</TableCell>
    //                 <TableCell>Nom</TableCell>
    //                 <TableCell>Auteur</TableCell>
    //                 <TableCell>Date</TableCell>
    //                 <TableCell>Actions</TableCell>
    //             </TableRow>
    //         </TableHead>
    //         <TableBody>
    //             {fileRows}
    //         </TableBody>
    //     </Table>
    // </TableContainer>);
}