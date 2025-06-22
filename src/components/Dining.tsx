import React from 'react';
import { ChefHat, Wine, Coffee, Utensils, Star, Clock } from 'lucide-react';

const Dining: React.FC = () => {
  const restaurants = [
    {
      icon: ChefHat,
      name: 'The Jackpot Buffet',
      type: 'Fine Dining',
      rating: 5,
      description: 'Premium steaks and fresh seafood in an elegant atmosphere perfect for special occasions and celebrations.',
      image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      hours: ':24/7 Hr',
      specialty: 'Premium Steaks & Seafood',
      priceRange: 'Free'
    },
    {
      icon: Wine,
      name: 'Tiger Palace Casino Bar',
      type: 'Cocktails & Small Plates',
      rating: 5,
      description: 'Craft cocktails and gourmet appetizers in a sophisticated lounge setting with live entertainment.',
      image: 'bar.jpg',
      hours: '12:00 PM - 2:00 AM',
      specialty: 'Artisan Cocktails',
      priceRange: 'Free'
    },
    
  ];

  const features = [
    {
      icon: ChefHat,
      title: 'Award-Winning Chefs',
      description: 'Our culinary team creates exceptional dishes using the finest ingredients sourced globally.'
    },
    {
      icon: Wine,
      title: 'Premium Wine Selection',
      description: 'Extensive wine cellar featuring rare vintages and perfectly paired selections from around the world.'
    },
    {
      icon: Utensils,
      title: 'Private Dining',
      description: 'Exclusive dining rooms available for special events, celebrations, and business meetings.'
    }
  ];

  return (
    <section id="dining" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-yellow-500/20 border border-yellow-500/30 rounded-full px-4 py-2 mb-6">
            <ChefHat className="h-4 w-4 text-yellow-400 mr-2" />
            <span className="text-yellow-400 text-sm font-medium uppercase tracking-wide">
              Dining Experience
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black mb-6 text-white">
            WORLD-CLASS
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent block">
              DINING
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From fine dining to casual bites, our restaurants offer exceptional cuisine to complement your gaming experience.
          </p>
        </div>

        {/* Restaurants Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {restaurants.map((restaurant, index) => (
            <div
              key={index}
              className="group bg-gray-800/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-500 hover:transform hover:scale-[1.02]"
            >
              <div className="flex flex-col md:flex-row h-full">
                <div className="md:w-2/5 relative h-64 md:h-auto overflow-hidden">
                  <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 p-2 rounded-lg">
                      <restaurant.icon className="h-6 w-6 text-black" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-lg">
                    <div className="flex items-center">
                      {[...Array(restaurant.rating)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                    {restaurant.priceRange}
                  </div>
                </div>
                
                <div className="md:w-3/5 p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-2xl font-black text-white">{restaurant.name}</h3>
                      <span className="text-yellow-400 text-sm font-bold uppercase tracking-wide">{restaurant.type}</span>
                    </div>
                    <p className="text-gray-300 mb-4 leading-relaxed text-sm">{restaurant.description}</p>
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-sm text-gray-400">
                        <Clock className="h-4 w-4 mr-2" />
                        <span className="font-medium mr-2">Hours:</span>
                        {restaurant.hours}
                      </div>
                      <div className="flex items-center text-sm text-gray-400">
                        <ChefHat className="h-4 w-4 mr-2" />
                        <span className="font-medium mr-2">Specialty:</span>
                        {restaurant.specialty}
                      </div>
                    </div>
                  </div>
                  {/*<button className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black font-bold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 self-start uppercase tracking-wide text-sm">
                    Make Reservation
                  </button>*/}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dining Features */}
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-yellow-500/20">
          <h3 className="text-3xl font-black text-white text-center mb-12 uppercase tracking-wide">Dining Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-2xl p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <feature.icon className="h-10 w-10 text-black" />
                </div>
                <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-wide">{feature.title}</h4>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dining;