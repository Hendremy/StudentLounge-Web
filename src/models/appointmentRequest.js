import { concatDateAndTime } from "../utils/myDateFormatter";

export default class AppointmentRequest{
    constructor({tutoringId, start, end, date, location}){
        this.tutoringId = tutoringId;
        this.start = concatDateAndTime(date, start);
        this.end = concatDateAndTime(date, end);
        this.location = location;
    }
}