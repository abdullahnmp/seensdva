
import ImageBanner from "../HomeHub/ImageBanner";
import AboutSection from "./AboutSection";
import AmenitiesSection from "./AmenitiesSection";
import LocationSection from "./LocationSection";
import Sidebar from "./Sidebar";
import UpcomingEventsSection from "./UpcomingEventsSection";
import VenueHero from "./VenueHero";
import VenuePreview from "./VenuePreview";


const Page = () => {
  const venueData = {
    imageUrl: "https://images.unsplash.com/photo-1738526785854-f7fb902b0555?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3",
    venueName: "Marina Bay Sands",
    address: "10 Bayfront Avenue, Singapore 018956",
    aboutText:
      "Iconic rooftop venue with panoramic city views and world-class facilities. Experience luxury entertainment at its finest with state-of-the-art sound systems and breathtaking city skyline views.",
    videoUrl: "https://www.youtube.com/embed/0WWzgGyAH6Y?si=Hm9rLVyeF30Ds84Z",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.826589996837!2d103.85713661475397!3d1.2839859990635592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19032e1d5e6b%3A0x5e5c4b36e23b7d64!2sMarina%20Bay%20Sands!5e0!3m2!1sen!2sus!4v1645488569882!5m2!1sen!2sus",
    googleMapsLink: "https://www.google.com/maps/search/?api=1&query=10%20Bayfront%20Avenue%2C%20Singapore%20018956",
    amenities: [
      "VIP Tables",
      "Premium Bar",
      "Pool Access",
      "Outdoor Terrace",
      "Private Cabanas",
      "Sound System",
    ],
    events: [
      {
        id: 1,
        imageUrl:
          "https://images.unsplash.com/photo-1672061369623-8b19b820578c",
        eventName: "Summer Sunset Sessions",
        date: "March 15, 2024",
        description:
          "Join us for an unforgettable evening of house music and stunning views.",
        learnMoreLink: "/expand-view/1",
      },
      {
        id: 2,
        imageUrl:
          "https://images.unsplash.com/photo-1672061369623-8b19b820578c",
        eventName: "EDM Nights",
        date: "March 22, 2024",
        description:
          "Experience the best electronic dance music with international DJs.",
        learnMoreLink: "/expand-view/2",
      },
      {
        id: 3,
        imageUrl:
          "https://images.unsplash.com/photo-1672061369623-8b19b820578c",
        eventName: "Deep House Fridays",
        date: "March 29, 2024",
        description:
          "Immerse yourself in deep house beats and sophisticated vibes.",
        learnMoreLink: "/expand-view/3",
      },
    ],
    capacity: "2000+",
    musicTypes: ["House", "EDM", "Deep House"],
    rating: "4.8",
    socialLinks: [
      {
        href: "#",
        iconClass: "fab fa-facebook-f",
        bgColor: "bg-[#1877F2]",
      },
      {
        href: "#",
        iconClass: "fab fa-instagram",
        bgColor: "bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737]",
      },
      {
        href: "#",
        iconClass: "fab fa-tiktok",
        bgColor: "bg-[#1DA1F2]",
      },
      {
          href: "#",
          iconClass: "fab fa-whatsapp",
          bgColor: "bg-[#25D366]",
      },
    ],
    websiteLink: "#"
  };

  return (
    <main className="md:pt-9 pt-4 ">
       <VenueHero
          imageUrl={venueData.imageUrl}
          venueName={venueData.venueName}
          address={venueData.address}
        />
      <div className="max-w-7xl mx-auto px-6 sm:pb-24">
       
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <AboutSection aboutText={venueData.aboutText} />
            <VenuePreview videoUrl={venueData.videoUrl} />
            <LocationSection
              mapUrl={venueData.mapUrl}
              address={venueData.address}
              googleMapsLink={venueData.googleMapsLink}
            />
            <AmenitiesSection amenities={venueData.amenities} />
            <UpcomingEventsSection events={venueData.events} />
          </div>
          <div className="lg:col-span-1">
            <Sidebar
              capacity={venueData.capacity}
              musicTypes={venueData.musicTypes}
              rating={venueData.rating}
              socialLinks={venueData.socialLinks}
              websiteLink={venueData.websiteLink}
            />
          </div>
        </div>
      </div>
      
      <ImageBanner/>
    </main>
  );
};

export default Page;