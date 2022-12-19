import { formatIsoTimeString } from '@fullcalendar/core/internal';
import { formatDate, formatTime } from '../utils/dateFormatter';

export default class Appointment{

    constructor({id, tutoring, start, end}){
        this.id = id;
        this.tutoring = tutoring;
        this.start = start;
        this.end = end;
    }

    get tutor(){
        return this.tutoring.tutor;
    }

    get tutored(){
        return this.tutoring.tutored;
    }

    get lesson(){
        return this.tutoring.lesson;
    }

    get date(){
        return formatDate(new Date(this.start));
    }

    get startHour(){
        return formatTime(this.start);
    }

    get startDate(){
        return new Date(this.start);
    }

    get endHour(){
        return formatTime(this.end);
    }
}