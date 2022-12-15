import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import frLocale from '@fullcalendar/core/locales/fr';

export default function Schedule({scheduleEvents}){
    const events = [
        { title: 'Meeting', start: new Date() }
    ]

    console.log(scheduleEvents);

    
    // <span>{schedEvent.event.extendedprops.location}</span>
    function renderEventContent(schedEvent) {
        console.log(schedEvent.event.extendedProps.location);
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
