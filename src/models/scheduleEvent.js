export default class ScheduleEvent {
    constructor({agendaEvent, groupName, color}){
        this.id  = agendaEvent.id;
        this.title = agendaEvent.summary;
        this.backgroundColor = color;
        this.location = agendaEvent.location;
        this.groupId = groupName;
        this.start = agendaEvent.startHour;
        this.end = agendaEvent.endHour;
        this.date = agendaEvent.date;
    }
}