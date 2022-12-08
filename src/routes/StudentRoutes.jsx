import { Route } from 'react-router-dom';
import { ContactRoute, HomeRoute, NotFoundRoute } from './SharedRoutes';
import LessonsPage from '../pages/LessonsPage';
import CalendarPage from '../pages/CalendarPage';
import MessagesPage from '../pages/ChatPage';

const messagesPath = '/messages';
const calendarPath = '/calendar';
const lessonsPath = '/lesson';

const StudentRoutes = [
    HomeRoute(),
    ContactRoute(),
    NotFoundRoute(),
    <Route key={'lessons'} path={lessonsPath} element={<LessonsPage/>}>
        <Route key={'lesson'} path={':id'} element={<LessonsPage/>}/>
    </Route>,
    <Route key={'calendar'} path={calendarPath} element={<CalendarPage/>}/>,
    <Route key={'messages'} path={messagesPath} element={<MessagesPage/>}/>
];

export {messagesPath, calendarPath, lessonsPath, StudentRoutes};