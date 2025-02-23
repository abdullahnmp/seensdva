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

const generateLongDescription = () => {
  const loremIpsum = "Lorem ipsum dolor sit amet, cons adipiscing elit. Sed do eiusmod tempor incididunt ut et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ";
  // Repeat loremIpsum to create a long string (approx. 3000 words)
  let longDescription = '';
  const wordCount = 3000;
  const wordsPerSentence = loremIpsum.split(" ").length; //  words in the base loremIpsum text.
  const repeatCount = Math.ceil((wordCount*1.1) / wordsPerSentence); // Calculate repetitions.  *1.1 to ensure we go OVER the word count

   for (let i = 0; i < repeatCount; i++) {
      longDescription += loremIpsum;
  }

return longDescription;

};

const longDescription = generateLongDescription(); // Generate the long description *once*

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
      description: longDescription // Use the long description
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
      description: longDescription // Use the long description
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
      description: longDescription // Use the long description
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
      description: longDescription // Use the long description
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
      description: longDescription // Use the long description
  }
]

const groupedData = groupEventsByDate(data);
export default groupedData;