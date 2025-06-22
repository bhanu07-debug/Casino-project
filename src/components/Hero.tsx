import React, { useEffect, useState, useRef } from 'react';
import { Play, Star, Trophy, Users } from 'lucide-react';

const mediaList = [
  { type: 'image', url: 'back1.jpg' },
  { type: 'image', url: 'table2.jpg' },
  { type: 'image', url: 'table1.jpg' },
  { type: 'video', url: 'event.mp4' },
];

const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [showTourVideo, setShowTourVideo] = useState(false); // 👈 New state for popup

  const currentMedia = mediaList[currentIndex];

  useEffect(() => {
    if (currentMedia.type === 'image') {
      timeoutRef.current = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % mediaList.length);
      }, 5000);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentIndex]);

  const handleVideoEnd = () => {
    setCurrentIndex((prev) => (prev + 1) % mediaList.length);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      
      {/* Background Media */}
      <div className="absolute inset-0 z-0">
        {currentMedia.type === 'video' ? (
          <video
            key={currentMedia.url}
            className="w-full h-full object-cover"
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnd}
          >
            <source src={currentMedia.url} type="video/mp4" />
          </video>
        ) : (
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
            style={{ backgroundImage: `url("${currentMedia.url}")` }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80 z-10"></div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">
            <div className="mb-8">
              <div className="inline-flex items-center bg-yellow-500/20 border border-yellow-500/30 rounded-full px-4 py-2 mb-6">
                <Star className="h-4 w-4 text-yellow-400 mr-2" />
                <span className="text-yellow-400 text-sm font-medium uppercase tracking-wide">
                  Premium Gaming Experience
                </span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight">
                <span className="text-white">WELCOME TO</span>
                <br />
                <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                  TIGER PALACE
                </span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-lg">
                Experience the ultimate luxury gaming destination where fortune meets elegance. 
                Join thousands of winners at Asia's Largest prestigious casino.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#games"
                className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black font-bold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-xl uppercase tracking-wide"
              >
                Start Playing Now
              </a>
              <button
                onClick={() => setShowTourVideo(true)}
                className="border-2 border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black font-bold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center uppercase tracking-wide"
              >
                <Play className="h-5 w-5 mr-2" />
                Virtual Tour
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-1">1500+</div>
                <div className="text-gray-400 text-sm uppercase tracking-wide">Slot Machines</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-1">50+</div>
                <div className="text-gray-400 text-sm uppercase tracking-wide">Table Games</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-1">24/7</div>
                <div className="text-gray-400 text-sm uppercase tracking-wide">Gaming Action</div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="text-center lg:text-right">
            <div className="mb-8">
              <img 
                src="/logo_for_red.png" 
                alt="Tiger Palace Casino" 
                className="h-48 w-auto mx-auto lg:ml-auto animate-pulse"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-black/60 backdrop-blur-sm border border-yellow-500/20 rounded-lg p-6 hover:border-yellow-500/40 transition-all duration-300">
                <Trophy className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
                <h3 className="text-white font-bold mb-2 uppercase tracking-wide">VIP Rewards</h3>
                <p className="text-gray-400 text-sm">Exclusive benefits and personalized service</p>
              </div>
              <div className="bg-black/60 backdrop-blur-sm border border-yellow-500/20 rounded-lg p-6 hover:border-yellow-500/40 transition-all duration-300">
                <Users className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
                <h3 className="text-white font-bold mb-2 uppercase tracking-wide">Live Events</h3>
                <p className="text-gray-400 text-sm">World-class entertainment and tournaments</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Ping Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-30"></div>
        <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-30" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-30" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Video Modal Popup */}
      {showTourVideo && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center px-4">
          <div className="relative w-full max-w-3xl aspect-video">
            <button
              onClick={() => setShowTourVideo(false)}
              className="absolute top-2 right-2 z-10 bg-black/70 hover:bg-red-600 text-white rounded-full p-2"
              aria-label="Close"
            >
              ✕
            </button>
            <video
              className="w-full h-full rounded-lg"
              src="event.mp4"
              autoPlay
              controls
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
