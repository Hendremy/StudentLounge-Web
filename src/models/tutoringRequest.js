import TutoringUser from "./tutoringUser";

export default class TutoringRequest {
    constructor({id, tutored, tutor, lesson}){
        this.id = id;
        this.tutored = tutored ? new TutoringUser(tutored) : null;
        this.tutor = tutor ? new TutoringUser(tutor) : null;
        this.lesson = lesson;
    }

    get isPending(){
        return this.tutor === null;
    }
}