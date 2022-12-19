import AgendaEvent from "./agendaEvent";

export default class Agenda {
    constructor({id, name, agendaEvents}){
        this.id = id;
        this.name = name;
        this.agendaEvents = agendaEvents;
    }

    static fromAppointments(appointments){
        return new Agenda({
            id: -1,
            name: 'RDV',
            agendaEvents: appointments.map(apt => AgendaEvent.fromAppointment(apt))
        })
    }
}