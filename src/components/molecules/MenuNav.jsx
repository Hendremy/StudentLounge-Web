import { MenuIcon } from "./MenuIcon";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { homePath, contactPath } from "../../AppRouter.jsx";
import { Box } from "@mui/system";

export default function MenuNav(){
    const style = {
        display: 'flex',
        justifyContent: 'space-around',
        alignSelf:'stretch'
    }
    return (
        <Box bgcolor="primary.dark" sx={style}>
            <MenuIcon path={homePath} icon={HomeOutlinedIcon}/>
            <MenuIcon path={contactPath} icon={HelpOutlineIcon}/>
        </Box>
    );
};