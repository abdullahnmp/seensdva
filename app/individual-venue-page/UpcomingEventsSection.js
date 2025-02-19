// app/components/UpcomingEventsSection.js
import SectionTitle from "./SectionTitle";
import EventCard from "./EventCard";
const UpcomingEventsSection = ({ events }) => {
  return (
    <section>
      <SectionTitle>Upcoming Events</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {events.map((event) => (
          <EventCard key={event.id} {...event} />
        ))}
      </div>
    </section>
  );
};

export default UpcomingEventsSection;