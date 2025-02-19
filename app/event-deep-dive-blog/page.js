// src/app/event-deep-dive-blog/page.jsx
import React from 'react';
import HeroSection from './components/HeroSection';
import ArticleContent from './components/ArticleContent';
import RelatedEvent from './components/RelatedEvent';
import MoreStories from './components/MoreStories';
import Banner from '../HomeHub/Banner';

const EventDeepDiveBlog = () => {
  return (
    <main className="pt-3 md:pt-9">
      <HeroSection />
      <div className="max-w-4xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <ArticleContent />
          <RelatedEvent />
        </div>
      </div>
      <MoreStories />
      <Banner/>
    </main>
  );
};

export default EventDeepDiveBlog;