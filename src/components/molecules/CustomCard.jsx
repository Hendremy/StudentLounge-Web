import {Card, CardContent, Typography} from "@mui/material";
import {Box} from "@mui/system";
import {primary} from "../../AppTheme";
import Title from "../atoms/Title";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import FileCopyIcon from '@mui/icons-material/FileCopy';

export default function CustomCard({IconCard, TitleCard, TextCard}) {
    let icon;

    if(IconCard === "users")
        icon = <SupervisedUserCircleIcon sx={{fontSize: 255}}/>;
    else
        icon = <FileCopyIcon sx={{fontSize: 255}}/>;

    return (
        <Card
            style={{backgroundColor : primary, margin:"auto"}}
            sx={{ maxWidth: 400, minHeight: 500, borderRadius:10}}>
            <CardContent style={{color:"white"}}>
                <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
                    {icon}
                    <Title text={TitleCard}/>
                    <Typography  component="div" align={"center"}>{TextCard}</Typography>
                </Box>
            </CardContent>
        </Card>
    );
}