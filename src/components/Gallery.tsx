import React, { useState } from 'react';
import { Image as ImageIcon, Video } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  EffectCoverflow,
  Navigation,
  Pagination,
  Autoplay,
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const Gallery = () => {
  const [activeType, setActiveType] = useState<'Images' | 'Videos'>('Images');
  const [activeCategory, setActiveCategory] = useState('All');
  const [showAll, setShowAll] = useState(false);

  const allImages = [
    { src: 'gall4.jpg', category: 'Celebrity' },
    { src: 'gala.jpg', category: 'Events' },
    { src: '1.jpg', category: 'Celebrity' },
    { src: '2.jpg', category: 'Celebrity' },
    { src: '3.jpg', category: 'Celebrity' },
    { src: '4.jpg', category: 'Celebrity' },
    { src: '5.jpg', category: 'Celebrity' },
    { src: '6.jpg', category: 'Celebrity' },
    { src: '7.jpg', category: 'Celebrity' },
    { src: '8.jpg', category: 'Celebrity' },
    { src: '10.jpg', category: 'Celebrity' },
    { src: '12.jpg', category: 'Celebrity' },
    { src: '13.jpg', category: 'Celebrity' },
    { src: '14.jpg', category: 'Celebrity' },
    { src: 'sunnyl1.jpg', category: 'Celebrity' },
    { src: 'sweta.jpg', category: 'Celebrity' },
    { src: 'sweta1.jpg', category: 'Celebrity' },
    { src: '14.jpg', category: 'Celebrity' },
    { src: 'public/Event/KSL_0669.jpg', category: 'Events' },
    { src: 'public/Event/KSL_0677.jpg', category: 'Events' },
    { src: 'public/Event/PVA77149.jpg', category: 'Events' },
    { src: 'public/Food/RSB00194.jpg', category: 'Food' },
    { src: 'public/Games/KSL_0518.jpg', category: 'Games' },
    { src: 'public/Games/PVA76874.jpg', category: 'Games' },
    { src: 'public/Games/RSB00039.jpg', category: 'Games' },
    { src: 'public/Games/RSB00041.jpg', category: 'Games' },
    { src: 'public/Games/RSB00044.jpg', category: 'Games' },
  ];

  const videos = [
    { url: 'https://www.youtube.com/watch?v=QRmhnyWeVrc', title: 'Carnival Highlights' },
    { url: 'https://www.youtube.com/watch?v=fIkMgyWzN2E', title: 'Big Bash Moments' },
    { url: 'https://www.youtube.com/watch?v=VZgmUVdajU4', title: 'VIP Experience' },
  ];

  const categories = ['All', 'Events', 'Food', 'Games', 'Celebrity'];

  const filteredImages =
    activeCategory === 'All'
      ? allImages
      : allImages.filter((img) => img.category === activeCategory);

  const imagesToShow = showAll ? filteredImages : filteredImages.slice(0, 12);
  const videosToShow = showAll ? videos : videos.slice(0, 4);

  const getYouTubeId = (url: string) => {
    const match = url.match(/(?:\/|v=)([a-zA-Z0-9_-]{11})/);
    return match ? match[1] : '';
  };

  return (
    <section id="gallery" className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-yellow-500/20 border border-yellow-500/30 rounded-full px-4 py-2 mb-6">
            <ImageIcon className="h-4 w-4 text-yellow-400 mr-2" />
            <span className="text-yellow-400 text-sm font-medium uppercase tracking-wide">
              Moments Captured
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black mb-4 text-white">
            OUR
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent block">
              GALLERY
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore vibrant snapshots of the Tiger Palace Casino experience — from grand events to everyday thrills.
          </p>
        </div>

        {/* Type Tabs */}
        <div className="flex justify-center space-x-4 mb-6">
          <button
            className={`px-4 py-2 text-sm font-semibold rounded-full border transition-all duration-300 ${
              activeType === 'Images'
                ? 'bg-yellow-500 text-black border-yellow-500'
                : 'text-yellow-400 border-yellow-500/30 hover:bg-yellow-500/10'
            }`}
            onClick={() => {
              setActiveType('Images');
              setShowAll(false);
            }}
          >
            Images
          </button>
          <button
            className={`px-4 py-2 text-sm font-semibold rounded-full border transition-all duration-300 ${
              activeType === 'Videos'
                ? 'bg-yellow-500 text-black border-yellow-500'
                : 'text-yellow-400 border-yellow-500/30 hover:bg-yellow-500/10'
            }`}
            onClick={() => {
              setActiveType('Videos');
              setShowAll(false);
            }}
          >
            Videos
          </button>
        </div>

        {/* Category Filter */}
        {activeType === 'Images' && (
          <div className="flex justify-center space-x-4 mb-10 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setShowAll(false);
                }}
                className={`px-4 py-2 text-sm font-semibold rounded-full border transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-yellow-500 text-black border-yellow-500'
                    : 'text-yellow-400 border-yellow-500/30 hover:bg-yellow-500/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        {/* Image Coverflow */}
        {activeType === 'Images' && filteredImages.length > 0 && (
         <Swiper
  effect="coverflow"
  grabCursor={true}
  centeredSlides={true}
  loop={true}
  slidesPerView="auto"
  autoplay={{ delay: 2500, disableOnInteraction: false }}
  pagination={{ clickable: true }}
  navigation={true}
  coverflowEffect={{
    rotate: 30,
    stretch: 0,
    depth: 100,
    modifier: 1.5,
    slideShadows: true,
  }}
  className="!pb-16"
>
  {imagesToShow.map((image, index) => (
    <SwiperSlide
      key={index}
      style={{ width: '300px', height: '300px' }}
      className="rounded-xl overflow-hidden border border-yellow-600"
    >
      <img
        src={image.src}
        alt={`Gallery ${index + 1}`}
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
      />
    </SwiperSlide>
  ))}
</Swiper>

        )}

        {activeType === 'Images' && filteredImages.length === 0 && (
          <div className="text-center text-gray-400 mt-10">No images in this category.</div>
        )}

        {/* Video Grid */}
        {activeType === 'Videos' && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {videosToShow.map((video, index) => (
                <div
                  key={index}
                  className="rounded-xl overflow-hidden border border-yellow-600 bg-black/50"
                >
                  <div className="aspect-w-16 aspect-h-9 w-full">
                    <iframe
                      src={`https://www.youtube.com/embed/${getYouTubeId(video.url)}`}
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                      className="w-full h-full"
                      title={video.title}
                    />
                  </div>
                  <div className="text-sm text-yellow-400 text-center py-2 bg-black/60 font-bold">
                    {video.title}
                  </div>
                </div>
              ))}
            </div>

            {videos.length === 0 && (
              <div className="text-center text-gray-400 mt-10">No videos added yet.</div>
            )}
          </>
        )}

        {/* View All Button 
        {((activeType === 'Images' && filteredImages.length > 12) ||
          (activeType === 'Videos' && videos.length > 4)) && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2 text-sm font-bold rounded-full border border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black transition-all duration-300"
            >
              {showAll ? 'Show Less' : 'View All'}
            </button>
          </div>
        )}*/}
      </div>
    </section>
  );
};

export default Gallery;
