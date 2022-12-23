import ScheduleEvent from "./scheduleEvent";
import Agenda from "./agenda";

export default class Calendar{

    static allEvents({appointments = [], agendas = [], calendarPalette = ['blue']}){
        let allAgendas = [...agendas, Agenda.fromAppointments(appointments)];
        let agendaIndex = 0;
        var allScheduleEvents = allAgendas.map(
            agenda => {
                let color = calendarPalette[agendaIndex % calendarPalette.length];
                agendaIndex++;
                return agenda.agendaEvents.map(event => new ScheduleEvent({
                    agendaEvent: event, groupName: agenda.name, color: color
                }));
            }
        );
        var calendarEvents = allScheduleEvents.length > 0 ? allScheduleEvents.reduce((events = [], scheduleEvents) => {
            events.push(...scheduleEvents);
            return events;
        }) : [];
        return calendarEvents;
    }
}