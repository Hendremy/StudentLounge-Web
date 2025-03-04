import { formatDate, formatTime } from '../utils/myDateFormatter';

export default class Appointment{

    constructor({id, tutoring, start, end, location}){
        this.id = id;
        this.tutoring = tutoring;
        this.start = start;
        this.end = end;
        this.location = location;
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

    get endDate(){
        return new Date(this.end);
    }
}