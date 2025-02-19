import EventsData from "../../public/cardFilter";
import EventsList from "./EventsContainer_GroupEvents";
import Recommended from "./EventsContainer_Recommended";
import EventSearchComponent from "./EventsContainer_EventSearchComponent";

function EventsContainer() {
    const location = "Sydney";

  return (
    <section className="w-full my-20">
      <EventSearchComponent/>
      <div className="w-[90%] m-auto">
        <h1 className="text-6xl font-bold mb-16">Upcoming Events in {location}</h1>
        <Recommended location={location}/>
        <h2 className="text-5xl font-bold my-9">Events by Date</h2>
        <div>
          <EventsList groupedEvents={EventsData} />
        </div>
      </div>
    </section>
  );
}

export default EventsContainer;