import React from 'react';
import { Image } from 'lucide-react';

const Gallery = () => {
  const images = [
    'gala.jpg',
    'gall2.JPG',
    'gall3.JPG',
    'gall4.jpg',
    'gall5.JPG',
    'gall6.JPG',
    // Add more image paths as needed
  ];

  return (
    <section id="gallery" className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Styled Like Gaming */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-yellow-500/20 border border-yellow-500/30 rounded-full px-4 py-2 mb-6">
            <Image className="h-4 w-4 text-yellow-400 mr-2" />
            <span className="text-yellow-400 text-sm font-medium uppercase tracking-wide">
              Moments Captured
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black mb-6 text-white">
            OUR
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent block">
              GALLERY
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore vibrant snapshots of the Tiger Palace Casino experience — from grand events to everyday thrills.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-xl border border-yellow-600">
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
