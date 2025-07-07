{/*import React, { useState } from 'react';
import { motion } from 'framer-motion';

type Props = {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  color: string;
  icon: React.ElementType;
  cardImage: string;      // your original image on top (slot1.jpg etc)
  backImage: string;      // playing card image to show by default
  onGuideClick: () => void;
};

const FlippingGameCard: React.FC<Props> = ({
  title,
  subtitle,
  description,
  features,
  color,
  icon: Icon,
  cardImage,
  backImage,
  onGuideClick,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="w-80 h-[32rem] cursor-pointer perspective relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        animate={{
          rotateY: hovered ? 0 : 180,
          scale: hovered ? 1.05 : 1,
        }}
        transition={{ type: 'spring', stiffness: 180, damping: 15 }}
        className="relative w-full h-full transform-style-preserve-3d duration-700"
      >
        {/* Front face: Your original card content (image + content below) 
        <div className="absolute w-full h-full backface-hidden rounded-2xl overflow-hidden shadow-lg bg-gray-900 text-white flex flex-col">
          <div className="relative h-40 overflow-hidden rounded-t-2xl">
            <img
              src={cardImage}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            {/* Optional gradient overlay 
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            {/* Icon on top-left 
            <div className={`absolute top-4 left-4 bg-gradient-to-r ${color} p-3 rounded-xl shadow-yellow-400/30`}>
              <Icon className="h-8 w-8 text-black animate-pulse" />
            </div>
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <div className="text-yellow-400 text-sm font-bold uppercase tracking-wide mb-1">{subtitle}</div>
            <h3 className="text-2xl font-black mb-2">{title}</h3>
            <p className="text-gray-300 mb-6 flex-grow">{description}</p>
            <div className="grid grid-cols-2 gap-3 mb-6 text-gray-300 text-sm">
              {features.map((feature, i) => (
                <div key={i} className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  {feature}
                </div>
              ))}
            </div>
            <button
              onClick={onGuideClick}
              className={`w-full bg-gradient-to-r ${color} hover:shadow-lg text-black font-bold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center uppercase tracking-wide text-sm`}
            >
              Guide Now
            </button>
          </div>
        </div>

        {/* Back face: Playing card image only 
        <div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-2xl overflow-hidden shadow-lg">
          <img
            src={backImage}
            alt="Playing card"
            className="w-full h-full object-cover"
            draggable={false}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FlippingGameCard;*/}
