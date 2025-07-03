import React from 'react';
import FlippingGameCard from './GameCard';
import { Dice1, Spade, Diamond, Heart } from 'lucide-react';

const gameCategories = [
  {
    icon: Dice1,
    title: 'Slot Machines',
    subtitle: '150+ Premium Slots',
    description: 'From classic reels to the latest video slots with progressive jackpots reaching millions.',
    features: ['Progressive Jackpots', 'Video Slots', 'Roulette', 'Betstone'],
    color: 'from-yellow-600 to-yellow-500',
    cardImage: 'slot1.jpg',         // your original image on top
    backImage: 'ace1.png', // playing card shown by default
  },
  {
    icon: Spade,
    title: 'Table Games',
    subtitle: '50+ Live Tables',
    description: 'Experience the thrill of classic casino games with professional dealers and premium service.',
    features: ['Blackjack', 'Roulette', 'Flush', 'Baccarat', 'Andar Bahar'],
    color: 'from-yellow-500 to-yellow-400',
    cardImage: 'table2.jpg',
    backImage: 'ace2.png',
  },
  {
    icon: Diamond,
    title: 'Poker Room',
    subtitle: 'Tournament Central',
    description: 'Join daily tournaments or cash games in our world-class poker room with professional dealers.',
    features: ["Texas Hold'em", 'Daily Tournaments', 'Cash Games', 'Private Tables'],
    color: 'from-yellow-400 to-yellow-300',
    cardImage: 'table1.jpg',
    backImage: 'ace3.png',
  },
  {
    icon: Heart,
    title: 'VIP Gaming',
    subtitle: 'Exclusive Experience',
    description: 'Private gaming salons with dedicated hosts, premium amenities, and personalized service.',
    features: ['Private Salons', 'Dedicated Host', 'Premium Service', 'Exclusive Access'],
    color: 'from-yellow-600 to-yellow-400',
    cardImage:
      'https://images.pexels.com/photos/1871508/pexels-photo-1871508.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    backImage:'ace4.png', // example card back
  },
];

const Gaming: React.FC = () => {
  const handleGuideClick = (title: string) => {
    alert(`Guide clicked for ${title}`);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-black text-white">
            CHOOSE YOUR
            <span className="block bg-gradient-to-r from-yellow-400 to-yellow-600 text-transparent bg-clip-text">
              GAME
            </span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto mt-4">
            Hover on cards to flip and reveal the game details.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {gameCategories.map((game, i) => (
            <FlippingGameCard
              key={i}
              title={game.title}
              subtitle={game.subtitle}
              description={game.description}
              features={game.features}
              color={game.color}
              icon={game.icon}
              cardImage={game.cardImage}
              backImage={game.backImage}
              onGuideClick={() => handleGuideClick(game.title)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gaming;
