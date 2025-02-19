function groupEventsByDate(events) {
    if (!events || !Array.isArray(events)) {
      return {};
    }
  
    return events.reduce((acc, event) => {
      const date = event.date || event.details?.date || event.basicInfo?.date || 'Unknown Date';
  
      if (!acc[date]) {
        acc[date] = [];
      }
      acc[date].push(event);
      return acc;
    }, {});
  }
  
  const data = [
    {
      id: 1,
      imageUrl: "https://plus.unsplash.com/premium_photo-1726761660323-852ca794ecbb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Coastal Groove Night",
      ageLimit: "21",
      priceRange: "$35 - 85",
      category: "House",
      location: "W Bali",
      city: "Kuta",
      date: "July 20, 2024",
      description: "Experience the best of house music at the beautiful W Bali."
    },
    {
      id: 2,
      imageUrl: "https://plus.unsplash.com/premium_photo-1726761660323-852ca794ecbb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Techno Fusion",
      ageLimit: "18",
      priceRange: "$20 - 50",
      category: "Techno",
      location: "Some Club",
      city: "Denpasar",
      date: "August 10, 2024",
      description: "Get ready for an unforgettable night of techno music."
    },
    {
      id: 3,
      imageUrl: "https://plus.unsplash.com/premium_photo-1726761660323-852ca794ecbb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Sunset Beats",
      ageLimit: "21",
      priceRange: "$50 - 100",
      category: "House",
      location: "Beach Club",
      city: "Canggu",
      date: "August 10, 2024",
        description: "Enjoy house music with a beautiful sunset view."
    },
    {
      id: 4,
      imageUrl: "https://plus.unsplash.com/premium_photo-1726761660323-852ca794ecbb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Electronic Vibes",
      ageLimit: "18",
      priceRange: "$10 - 30",
      category: "Electronic",
      location: "Bar",
      city: "Ubud",
      date: "September 15, 2024",
        description: "Experience the best electronic music in the heart of Ubud."
    },
    {
      id: 5,
      imageUrl: "https://plus.unsplash.com/premium_photo-1726761660323-852ca794ecbb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Jungle Beats",
      ageLimit: "21",
      priceRange: "$40 - 80",
      category: "House",
      location: "Jungle",
      city: "Ubud",
      date: "September 15, 2024",
      description: "Feel the rhythm of the jungle with our special house music night."
    }
  ]
  
  const groupedData = groupEventsByDate(data);
  export default groupedData;