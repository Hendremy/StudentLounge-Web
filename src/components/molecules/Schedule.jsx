import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import frLocale from '@fullcalendar/core/locales/fr';

export default function Schedule({scheduleEvents}){

    function renderEventContent(schedEvent) {
        return (
          <>
            <b>{schedEvent.timeText}</b>
            <span>{schedEvent.event.title}</span>
            <p>{schedEvent.event.extendedProps.location}</p>
          </>
        )
    }

    return (
    <FullCalendar
        locale={frLocale}
        plugins={[timeGridPlugin]}
        initialView='timeGridWeek'
        weekends={false}
        events={scheduleEvents}
        eventContent={renderEventContent}
    />
    );

}
