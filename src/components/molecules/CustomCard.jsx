import {Card, CardContent, Typography} from "@mui/material";
import {Box} from "@mui/system";
import {primary} from "../../AppTheme";
import Title from "../atoms/Title";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import FileCopyIcon from '@mui/icons-material/FileCopy';

export default function CustomCard({IconCard, TitleCard, TextCard}) {
    let icon;

    if(IconCard === "users")
        icon = <SupervisedUserCircleIcon sx={{fontSize: 200, marginBottom:3}}/>;
    else
        icon = <FileCopyIcon sx={{fontSize: 200, marginBottom:3}}/>;

    return (
        <Card
            elevation = {10}
            style={{backgroundColor : primary, margin:"100px"}}
            sx={{ maxWidth: 350, minHeight: 400, borderRadius:10}}>
            <CardContent style={{color:"white"}}>
                <Box display={"flex"} flexDirection={"column"} alignItems={"center"} textAlign={"center"} margin={5}>
                    {icon}
                    <Title text={TitleCard}/>
                    <Typography  component="div" align={"center"}>{TextCard}</Typography>
                </Box>
            </CardContent>
        </Card>
    );
}