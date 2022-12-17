export default class AppointmentRequest{
    constructor({tutoringId, start, end, location}){
        this.tutoringId = tutoringId;
        this.start = start;
        this.end = end;
        this.location = location;
    }
}