import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import frLocale from '@fullcalendar/core/locales/fr';
import styled from "@emotion/styled";


export const StyleWrapper = styled.div`
  .fc{
    height: 75vh;
  }

  .fc-timegrid-event .fc-event-main {
    background-color: #218aff;
  }
`

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
      <StyleWrapper>
        <FullCalendar
          locale={frLocale}
          plugins={[timeGridPlugin]}
          initialView='timeGridWeek'
          weekends={false}
          events={scheduleEvents}
          eventContent={renderEventContent}
        />
      </StyleWrapper>
    );

}
