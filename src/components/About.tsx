import React from 'react';
import { Award, Users, Calendar, Shield, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: Award,
      title: 'Award-Winning Excellence',
      description: 'Recognized as the premier gaming destination with multiple industry awards for service and entertainment.'
    },
    {
      icon: Users,
      title: 'Professional Staff',
      description: 'Our experienced dealers and hospitality team ensure every guest receives world-class service.'
    },
    {
      icon: Calendar,
      title: '8+ Years of Legacy',
      description: 'Over two decades of providing unforgettable gaming experiences and luxury entertainment.'
    },
    {
      icon: Shield,
      title: 'Safe & Secure',
      description: 'State-of-the-art security systems and responsible gaming practices for your peace of mind.'
    }
  ];

  const achievements = [
    'Gaming Commission Licensed',
    'ISO 27001 Security Certified',
    'Responsible Gaming Advocate',
    'AAA Four Diamond Award',
    'Best Casino Experience 2024',
    'Top Employer in Hospitality'
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-yellow-500/20 border border-yellow-500/30 rounded-full px-4 py-2 mb-6">
            <Award className="h-4 w-4 text-yellow-400 mr-2" />
            <span className="text-yellow-400 text-sm font-medium uppercase tracking-wide">
              About Tiger Palace
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black mb-6 text-white">
            LUXURY GAMING
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent block">
              REDEFINED
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Step into a world where elegance meets excitement. Tiger Palace Casino offers an unparalleled gaming experience 
            with luxury amenities, world-class entertainment, and exceptional service.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="relative">
            <img
              src="about.jpg"
              alt="Casino Interior"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-yellow-600 to-yellow-500 text-black p-6 rounded-xl">
              <div className="text-3xl font-black">26,600</div>
              <div className="text-sm font-bold uppercase tracking-wide">SQ ft Gaming Floor</div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-black text-white mb-4">THE ULTIMATE GAMING EXPERIENCE</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                From the moment you enter our doors, you'll be immersed in an atmosphere of sophistication and excitement. 
                Our 5,000 square foot gaming floor features the latest slot machines, classic table games, and exclusive 
                high-limit areas designed for the discerning player.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Beyond gaming, we offer five-star dining, premium entertainment, and luxury accommodations that make 
                every visit memorable. Whether you're here for an evening of fun or a weekend getaway, Tiger Palace Casino 
                delivers an experience that exceeds expectations.
              </p>
            </div>

            {/* Achievements */}
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/20">
              <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-wide">Our Achievements</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="h-4 w-4 text-yellow-400 mr-3 flex-shrink-0" />
                    <span className="text-sm">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 hover:transform hover:scale-105 text-center"
            >
              <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 p-4 rounded-xl w-fit mx-auto mb-6">
                <feature.icon className="h-8 w-8 text-black" />
              </div>
              <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-wide">{feature.title}</h4>
              <p className="text-gray-300 leading-relaxed text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;