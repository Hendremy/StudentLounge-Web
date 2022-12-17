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
}