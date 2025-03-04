import { Download, InsertDriveFile, TextFields } from "@mui/icons-material";
import { TableRow, TableCell, IconButton } from "@mui/material";
import { formatDate } from "../../utils/myDateFormatter";

export default function FileRow({file, repository}){
    let TypeIcon; 
    switch (file.type){
        case 1:
            TypeIcon = TextFields;
            break;
        default:
            TypeIcon = InsertDriveFile;
            break;
    }

    let dateString = formatDate(file.date)

    const onDownload = () => {
        repository.downloadFile({lessonFileId: file.id})
            .then(blob => {
                const objectURL = URL.createObjectURL(blob);
                var link = document.createElement("a");
                link.download = file.name;
                link.href = objectURL;
                link.target = "_blank";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            });
      };
      
    return(
        <TableRow>
            <TableCell>{<TypeIcon/>}</TableCell>
            <TableCell>{file.name}</TableCell>
            <TableCell>{file.user}</TableCell>
            <TableCell>{dateString}</TableCell>
            <TableCell>
                <IconButton color="primary" onClick={onDownload}>
                    <Download/>
                </IconButton>
            </TableCell>
        </TableRow>
    );
}