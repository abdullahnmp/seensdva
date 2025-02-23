// app/components/VenuePreview.js
import SectionTitle from "./SectionTitle";

const VenuePreview = ({ videoUrl }) => {
  return (
    <section>
      <SectionTitle>Venue Preview</SectionTitle>
      <div className="aspect-video rounded-2xl overflow-hidden mb-8">
        <iframe
          src={videoUrl}
          title="Venue preview video"
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default VenuePreview;