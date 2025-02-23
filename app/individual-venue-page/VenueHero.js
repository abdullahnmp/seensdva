// app/components/VenueHero.js
const VenueHero = ({ imageUrl, venueName, address }) => {
    return (
      <div className="relative h-[60vh] overflow-hidden mb-12">
        <img
          src={imageUrl}
          alt={venueName}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <h1 className="text-4xl md:text-6xl font-space-grotesk font-bold text-white mb-4">
            {venueName}
          </h1>
          <p className="text-xl text-white/90 flex items-center gap-2">
            <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
            {address}
          </p>
        </div>
      </div>
    );
  };
  
  export default VenueHero;