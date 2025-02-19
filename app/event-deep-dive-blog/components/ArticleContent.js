// src/app/event-deep-dive-blog/components/ArticleContent.jsx
import React from 'react';

const ArticleContent = () => {
  return (
    <div className="md:col-span-2 space-y-8">
      <p className="text-lg leading-relaxed text-gray-700">
        The electronic dance music scene in Bali has undergone a remarkable transformation over the past decade.
        What started as intimate beach gatherings has evolved into a thriving ecosystem of world-class venues and
        international talent.
      </p>
      <figure className="space-y-2">
        <img
          src="https://e1a4c9d0d2f9f737c5e1.ucr.io/https://findit.created.app/api/ai-img?prompt=Early%2520days%2520of%2520Bali%27s%2520beach%2520party%2520scene%252C%2520circa%25202015"
          alt="Early days of Bali's beach party scene, circa 2015"
          className="w-full rounded-xl"
        />
        <figcaption className="text-sm text-gray-500 text-center">
          Early days of Bali's beach party scene, circa 2015
        </figcaption>
      </figure>
      <h2 className="text-2xl md:text-3xl font-space-grotesk font-bold mt-12">The Rise of Beach Clubs</h2>
      <p className="text-lg leading-relaxed text-gray-700">
        Bali's beach clubs have become synonymous with luxury entertainment, combining stunning ocean views with
        state-of-the-art sound systems and architecture that blends seamlessly with the natural environment.
      </p>
      <figure className="space-y-2">
        <div className="aspect-video rounded-xl overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/7xALolZzhSM?si=_KGyzIzI90fmiApo"
            title="Experience the energy of Bali's nightlife scene"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <figcaption className="text-sm text-gray-500 text-center">
          Experience the energy of Bali's nightlife scene
        </figcaption>
      </figure>
      <blockquote className="border-l-4 border-[#FFD700] pl-6 py-2 space-y-2">
        <p className="text-xl font-space-grotesk italic">
          Bali isn't just a destination anymore - it's become a crucial stop on the global electronic music
          circuit.
        </p>
        <p className="text-sm text-gray-500">— DJ Mark Thompson</p>
      </blockquote>
      <figure className="space-y-2">
        <img
          src="https://images.unsplash.com/photo-1733623218983-6f585b4df57d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Modern day beach club in Bali featuring world-class production"
          className="w-full rounded-xl"
        />
        <figcaption className="text-sm text-gray-500 text-center">
          Modern day beach club in Bali featuring world-class production
        </figcaption>
      </figure>
      <h2 className="text-2xl md:text-3xl font-space-grotesk font-bold mt-12">Looking to the Future</h2>
      <p className="text-lg leading-relaxed text-gray-700">
        As we look ahead, the fusion of traditional Balinese culture with modern electronic music continues to
        create unique experiences that can't be found anywhere else in the world. The upcoming Summer Beach
        Party 2024 at W Bali - Seminyak represents the pinnacle of this evolution.
      </p>
    </div>
  );
};

export default ArticleContent;