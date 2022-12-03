import { Download, InsertDriveFile, TextFields } from "@mui/icons-material";
import { TableRow, TableCell, IconButton } from "@mui/material";
import formatDate from "../../utils/dateFormatter";

export default function FileRow(props){
    let file = props.file;

    let TypeIcon; 
    switch (file.type){
        case 1:
            TypeIcon = TextFields;
            break;
        default:
            TypeIcon = InsertDriveFile;
            break;
    }

    let dateString = formatDate(file.publishDate)

    const onDownload = () => {
        downloadURI("https://www.ibm.com/downloads/cas/GJ5QVQ7X","test");
      };

    function downloadURI(uri, name) {
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    }

    return(
        <TableRow>
            <TableCell>{<TypeIcon/>}</TableCell>
            <TableCell>{file.name}</TableCell>
            <TableCell>{file.author}</TableCell>
            <TableCell>{dateString}</TableCell>
            <TableCell>
                <IconButton color="primary" onClick={onDownload}>
                    <Download/>
                </IconButton>
            </TableCell>
        </TableRow>
    );
}