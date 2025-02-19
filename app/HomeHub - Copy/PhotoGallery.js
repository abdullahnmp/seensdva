import React from "react";
import ImagesGroup from "./ImagesGroup";

function PhotoGallery() {
  return (
    <section className="flex flex-col w-[90%]  mt-14">
      <h1 className="text-7xl text-center mb-5 md:mb-16 md:mt-16 font-bold ">Photo Gallery</h1>

     <ImagesGroup/>
    </section>
  );
}

export default PhotoGallery;
