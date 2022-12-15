import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

export default function Schedule({scheduleEvents}){
    const events = [
        { title: 'Meeting', start: new Date() }
    ]

    function renderEventContent(eventInfo) {
        return (
          <>
            <b>{eventInfo.timeText}</b>
            <i>{eventInfo.event.title}</i>
          </>
        )
    }

    return (
    <FullCalendar
        plugins={[dayGridPlugin]}
        initialView='dayGridWeek'
        weekends={false}
        events={events}
        eventContent={renderEventContent}
    />
    );

}
