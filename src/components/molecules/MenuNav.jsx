import LessonIcon from '@mui/icons-material/ImportContactsRounded';
import ChatIcon from '@mui/icons-material/ChatRounded';
import CalendarIcon from '@mui/icons-material/CalendarMonthRounded';
import HelpIcon from '@mui/icons-material/LiveHelpRounded';
import {calendarPath, contactPath, lessonPath, messagesPath} from "../../AppRouter.jsx";
import { Box } from "@mui/system";
import {useAtom} from "jotai";
import {userAtom} from "../../stores/studentStore";
import {MenuIcon} from "./MenuIcon";

export default function MenuNav(){
    const [state, setState] = useAtom(userAtom);
    const style = {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems:'center',
        width:1/5
    }

    if(state !== null) {
        return (
            <Box sx={style}>
                <MenuIcon path={messagesPath} icon={ChatIcon}/>
                <MenuIcon path={lessonPath} icon={LessonIcon}/>
                <MenuIcon path={calendarPath} icon={CalendarIcon}/>
                <MenuIcon path={contactPath} icon={HelpIcon}/>
            </Box>
        );
    }else{
        return (
            <Box sx={style}>
                <MenuIcon path={contactPath} icon={HelpIcon}/>
            </Box>
        );
    }
};