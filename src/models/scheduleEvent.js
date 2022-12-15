export default class ScheduleEvent {
    constructor({agendaEvent, groupName, color}){
        this.id  = agendaEvent.id;
        this.label = agendaEvent.summary;
        this.color = color;
        this.groupLabel = groupName;
        this.startHour = agendaEvent.startHour;
        this.endHour = agendaEvent.endHour;
        this.date = agendaEvent.date;
    }
}