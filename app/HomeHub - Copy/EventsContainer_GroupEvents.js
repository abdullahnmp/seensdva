// app/components/EventList.js
import React from 'react';
import EventCard from './EventsContainer_EventCard';

function GroupEvents({ groupedEvents }) {
  if (!groupedEvents || Object.keys(groupedEvents).length === 0) {
    return <p>No events found.</p>;
  }

  return (
    <div>
      {Object.entries(groupedEvents).map(([date, eventsForDate]) => (
        <div key={date} className='mb-9'>
          <h2 className='text-3xl py-3 mb-7 border-b font-bold'>{date}</h2>
          <ul className='ml-5 flex flex-col gap-9'>
            {eventsForDate.map((event,id) => (
              <EventCard key={id} event={event}/>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default GroupEvents;