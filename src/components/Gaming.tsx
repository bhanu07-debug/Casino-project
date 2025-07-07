import React from 'react';
import { Dice1, Spade, Diamond, Heart, ArrowRight, Zap } from 'lucide-react';

const Gaming: React.FC = () => {
  const gameCategories = [
    {
      icon: Dice1,
      title: 'Slot Machines',
      subtitle: '150+ Premium Slots',
      description: 'From classic reels to the latest video slots with progressive jackpots reaching millions.',
      image: 'slot1.jpg',
      features: ['Progressive Jackpots', 'Video Slots', 'Roulette', 'Betstone'],
      color: 'from-yellow-600 to-yellow-500'
    },
    {
      icon: Spade,
      title: 'Table Games',
      subtitle: '50+ Live Tables',
      description: 'Experience the thrill of classic casino games with professional dealers and premium service.',
      image: 'table2.jpg',
      features: ['Blackjack', 'Roulette', 'Flush', 'Baccarat','Andar Bahar'],
      color: 'from-yellow-500 to-yellow-400'
    },
    {
      icon: Diamond,
      title: 'Poker Room',
      subtitle: 'Tournament Central',
      description: 'Join daily tournaments or cash games in our world-class poker room with professional dealers.',
      image: 'table1.jpg',
      features: ['Texas Hold\'em', 'Daily Tournaments', 'Cash Games', 'Private Tables'],
      color: 'from-yellow-400 to-yellow-300'
    },
    {
      icon: Heart,
      title: 'VIP Gaming',
      subtitle: 'Exclusive Experience',
      description: 'Private gaming salons with dedicated hosts, premium amenities, and personalized service.',
      image: 'https://images.pexels.com/photos/1871508/pexels-photo-1871508.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      features: ['Private Salons', 'Dedicated Host', 'Premium Service', 'Exclusive Access'],
      color: 'from-yellow-600 to-yellow-400'
    }
  ];

  return (
    <section id="games" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-yellow-500/20 border border-yellow-500/30 rounded-full px-4 py-2 mb-6">
            <Zap className="h-4 w-4 text-yellow-400 mr-2" />
            <span className="text-yellow-400 text-sm font-medium uppercase tracking-wide">
              Gaming Experience
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black mb-6 text-white">
            CHOOSE YOUR
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent block">
              GAME
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From high-stakes table games to the latest slot machines, find your perfect game at Tiger Palace Casino.
          </p>
        </div>

        {/* Game Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {gameCategories.map((category, index) => (
            <div
              key={index}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-500 hover:transform hover:scale-[1.02]"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute top-6 left-6">
                  <div className={`bg-gradient-to-r ${category.color} p-3 rounded-xl`}>
                    <category.icon className="h-8 w-8 text-black" />
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-yellow-400 text-sm font-bold uppercase tracking-wide mb-1">
                    {category.subtitle}
                  </div>
                  <h3 className="text-2xl font-black text-white mb-2">{category.title}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-300 mb-6 leading-relaxed">{category.description}</p>
                
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {category.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-gray-300 text-sm">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                {/*<button className={`w-full bg-gradient-to-r ${category.color} hover:shadow-lg text-black font-bold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center uppercase tracking-wide text-sm`}>
                  Guide Now
                  <ArrowRight className="h-4 w-4 ml-2" />
                </button>*/}
              </div>
            </div>
          ))}
        </div>

        {/* Gaming Stats */}
        <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-2xl p-8 text-black">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-black mb-2">Unlimited</div>
              <div className="text-sm font-bold uppercase tracking-wide">Jackpots Won</div>
            </div>
            <div>
              <div className="text-4xl font-black mb-2">98.5%</div>
              <div className="text-sm font-bold uppercase tracking-wide">Payout Rate</div>
            </div>
            <div>
              <div className="text-4xl font-black mb-2">10K+</div>
              <div className="text-sm font-bold uppercase tracking-wide">Daily Players</div>
            </div>
            <div>
              <div className="text-4xl font-black mb-2">24/7</div>
              <div className="text-sm font-bold uppercase tracking-wide">Gaming Action</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gaming;
