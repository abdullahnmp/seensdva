// components/Media.js
import React from 'react';

const Media = ({title="Media"}) => {
  return (
    <div className="w-full h-[30rem] rounded-lg flex flex-col gap-5 mt-10 ">
        <h2 className="text-4xl font-bold">{title}</h2>
      <iframe
        className="w-full h-full rounded-lg "
        src="https://www.youtube.com/embed/eOrNdBpGMv8?si=ms_1woUJwnZmY9Dj"
        title="YouTube video player"
        allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Media;