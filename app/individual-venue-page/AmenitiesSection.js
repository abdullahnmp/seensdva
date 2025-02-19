// app/components/AmenitiesSection.js
import SectionTitle from "./SectionTitle";
import { FaCheckCircle } from 'react-icons/fa'; // Import the icon

const AmenityItem = ({ children }) => {
    return (
        <div className="flex items-center gap-3">
            <FaCheckCircle className="text-[#FFD700]" aria-hidden="true" />
            <span>{children}</span>
        </div>
    );
};

const AmenitiesSection = ({ amenities }) => {
  return (
    <section>
      <SectionTitle>Amenities</SectionTitle>
      <div className="grid grid-cols-2 gap-4">
        {amenities.map((amenity, index) => (
             <AmenityItem key={index}>{amenity}</AmenityItem>
        ))}
      </div>
    </section>
  );
};

export default AmenitiesSection;