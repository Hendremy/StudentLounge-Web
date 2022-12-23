import LessonIcon from '@mui/icons-material/ImportContactsRounded';
import ChatIcon from '@mui/icons-material/ChatRounded';
import CalendarIcon from '@mui/icons-material/CalendarMonthRounded';
import MenuIcon from "../molecules/MenuIcon";
import {calendarPath, lessonsPath, messagesPath} from "../../routes/StudentRoutes";
import { ContactNav } from './SharedNavs';


const StudentNavs =[
    <MenuIcon key={'messages_nav'} path={messagesPath} icon={ChatIcon}/>,
    <MenuIcon key={'lessons_nav'} path={lessonsPath} icon={LessonIcon}/>,
    <MenuIcon key={'calendar_nav'} path={calendarPath} icon={CalendarIcon}/>,
    <ContactNav key={'contact_nav'}/>
];

export default StudentNavs;