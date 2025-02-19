import HeroSection from "./HeroSection";
// import VisualsA from "./components/visuals-a";
import VisualsA from "./VisualsA";
import EventsContainer from "./EventsContainer_EventsContainer";
import ImageBanner from "./ImageBanner";

// export default function Main() {
//     return (
//       <main>
//         {/* <HeroSection /> */}
//         <h1>hi</h1>
//         {/* <ImageBanner /> */}
//         {/* <VisualsA /> */}
//         {/* <EventsContainer /> */}
//         {/* <ImageBanner /> */}
//       </main>
//     );
//   }
  

  import React from 'react'
  
  export default function HomeHub() {
    return (
      <main>
        <HeroSection />
        <ImageBanner />
        <VisualsA />
        <EventsContainer /> 
      </main>
    )
  }
  