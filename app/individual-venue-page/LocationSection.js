// app/components/LocationSection.js
import SectionTitle from "./SectionTitle";
import Button from "./Button";

const LocationSection = ({ mapUrl, address, googleMapsLink }) => {
  return (
    <section>
      <SectionTitle>Location</SectionTitle>
      <div className="aspect-video rounded-2xl overflow-hidden mb-8">
        <iframe
          src={mapUrl}
          width="100%"
          height="100%"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-2xl"
          style={{ border: "0px" }}
        ></iframe>
      </div>
       <Button href={googleMapsLink} target="_blank" rel="noopener noreferrer">
       <i className="fas fa-directions" aria-hidden="true"></i>Get Directions</Button>

    </section>
  );
};

export default LocationSection;