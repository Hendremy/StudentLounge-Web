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

    static fromAppointment(apt){
        return new AgendaEvent({
            id: apt.id,
            description: `Rendez-vous dans le cadre du tutorat du cours de ${apt.lesson} avec ${apt.tutor.name} et ${apt.tutored.name}`,
            location: apt.location,
            summary: `Tutorat ${apt.lesson}`,
            startHour: apt.start,
            endHour: apt.end,
            date: apt.start
        })
    }
}