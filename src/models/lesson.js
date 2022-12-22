import TutoringRequest from "./tutoringRequest";

export default class Lesson {
    constructor({id, name, tutoring}){
        this.id = id;
        this.name = name;
        this.tutoring = tutoring ? new TutoringRequest(tutoring) : null;
    }

    get tutoringIsAsked(){
        return this.tutoring !== null;
    }
}