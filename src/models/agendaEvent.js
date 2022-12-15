export default class AgendaEvent{
    constructor({
        id, 
        description,
        location,
        summary,
        startHour,
        endHour,
        date
    }){
        this.id = id;
        this.description = description;
        this.location = location;
        this.summary = summary;
        this.startHour = startHour;
        this.endHour = endHour;
        this.date = date;
    }
}