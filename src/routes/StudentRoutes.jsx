import {Route} from 'react-router-dom';
import { ContactRoute, HomeRoute } from './SharedRoutes';
import LessonsPage from '../pages/LessonsPage';
import CalendarPage from '../pages/CalendarPage';
import MessagesPage from '../pages/MessagesPath';

const messagesPath = '/messages';
const calendarPath = '/calendar';
const lessonsPath = '/lesson';

export default function StudentRoutes(){
    return(
        <>
            <HomeRoute/>
            <ContactRoute/>
            <Route path={lessonsPath} element={<LessonsPage/>}>
                <Route path={':id'} element={<LessonsPage/>}/>
            </Route>
            <Route path={calendarPath} element={<CalendarPage/>}/>
            <Route path={messagesPath} element={<MessagesPage/>}/>
        </>
    )
}

export {messagesPath, calendarPath, lessonsPath as lessonPath}