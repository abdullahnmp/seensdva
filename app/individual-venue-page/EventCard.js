// app/components/EventCard.js
import Button from "./Button";
const EventCard = ({ imageUrl, eventName, date, description, learnMoreLink }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={imageUrl}
          alt={eventName}
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-space-grotesk font-bold">{eventName}</h3>
          <span className="px-4 py-1.5 rounded-full text-sm bg-gray-100">{date}</span>
        </div>
        <p className="mb-6 line-clamp-2 text-gray-600">{description}</p>
        <div className="flex justify-between items-center">
          <Button href={learnMoreLink}  className="px-6 py-2 bg-[#FFD700] text-black rounded-full hover:bg-[#FFC700] transition-all duration-300 transform hover:-translate-y-1">
            Learn More
          </Button>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <i className="far fa-heart text-xl" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;