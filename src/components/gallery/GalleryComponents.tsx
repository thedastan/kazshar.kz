import React from 'react';
import GalleryCard from './gallery-card/GalleryCard';
import HeroGallery from './hero-gallery/HeroGallery';

const GalleryComponents = () => {
  return (
    <section>
      <HeroGallery/>
      <GalleryCard/>
    </section>
  );
};

export default GalleryComponents;