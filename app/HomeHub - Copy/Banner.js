// components/Banner.jsx
import React from 'react';

const Banner = () => {
  const imageUrl = "https://images.unsplash.com/photo-1705331703949-efb1990f2d2a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const bannerLink = "/";

  return (
    <section className="w-full m-auto object-cover cursor-pointer">
    <div className='m-auto w-[80%] h-[300px]'>
    <a href={bannerLink} rel="#">
      <img
        src={imageUrl}
        alt="Advertisement Banner"
        className="w-full h-full object-cover cursor-pointer"
      />
    </a>
    </div>
    </section>
  );
};

export default Banner;