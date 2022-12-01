import {Card, CardContent, ThemeProvider, Typography} from "@mui/material";
import {Box} from "@mui/system";
import {primary, theme} from "../../AppTheme";
import Title from "../atoms/Title";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import NumberStyle from "../atoms/NumberStyle";

export default function CustomCard({IconCard, TitleCard, TextCard, Number}) {
    let icon;

    if(IconCard === "users")
        icon = <SupervisedUserCircleIcon sx={{fontSize: 200, marginBottom:3}}/>;
    else
        icon = <InsertDriveFileIcon sx={{fontSize: 200, marginBottom:3}}/>;

    return (
        <Card
            elevation = {10}
            style={{backgroundColor : primary, margin:"100px"}}
            sx={{ maxWidth: 350, minHeight: 450, borderRadius:10}}>
            <CardContent style={{color:"white"}}>
                <Box display={"flex"} flexDirection={"column"} alignItems={"center"} textAlign={"center"} margin={"auto"}>
                    {icon}
                    <ThemeProvider theme={theme}>
                        <Box display={"flex"} flexDirection={"row"}>
                            <NumberStyle text={Number}></NumberStyle>
                            <Title text={TitleCard}/>
                        </Box>
                    </ThemeProvider>
                    <Typography  component="div" align={"center"} marginTop={3} fontSize={20}>{TextCard}</Typography>
                </Box>
            </CardContent>
        </Card>
    );
}