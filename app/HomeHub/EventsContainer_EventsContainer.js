// EventsContainer_EventsContainer.js
import EventsData from "../../public/cardFilter";
import EventsList from "./EventsContainer_GroupEvents";
import Recommended from "./EventsContainer_Recommended";
import EventSearchComponent from "./EventsContainer_EventSearchComponent";
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.7,
            delayChildren: 0.2,
            staggerChildren: 0.1
        }
    }
};

function EventsContainer() {
    const location = "Sydney";

    return (
        <motion.section
            className="w-full my-12 md:my-20"  // Adjusted margin-top and margin-bottom
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <EventSearchComponent />
            <div className="w-[90%] m-auto">
                <h1 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-16">Upcoming Events in {location}</h1>  
                <Recommended location={location} />
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold my-6 md:my-9">Events by Date</h2>  
                <div>
                    <EventsList groupedEvents={EventsData} />
                </div>
            </div>
        </motion.section>
    );
}

export default EventsContainer;