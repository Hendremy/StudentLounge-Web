import LessonIcon from '@mui/icons-material/ImportContactsRounded';
import ChatIcon from '@mui/icons-material/ChatRounded';
import CalendarIcon from '@mui/icons-material/CalendarMonthRounded';
import MenuIcon from "../molecules/MenuIcon";
import {calendarPath, lessonsPath, messagesPath} from "../../routes/StudentRoutes";


export default function StudentNavs() {
    return (
        <>
            <MenuIcon path={messagesPath} icon={ChatIcon}/>
            <MenuIcon path={lessonsPath} icon={LessonIcon}/>
            <MenuIcon path={calendarPath} icon={CalendarIcon}/>
        </>
    );
}