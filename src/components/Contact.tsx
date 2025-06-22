import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Car,
  CreditCard,
  Navigation,
  Wifi
} from 'lucide-react';

const Contact: React.FC = () => {
  const [showModal, setShowModal] = useState(false); // modal toggle state
  const [status, setStatus] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: 'Tilottama -15,Rupandehi,Lumbini,Nepal,32900',
      color: 'text-yellow-400'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+977-9820386758',
      color: 'text-yellow-400'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'Marketing@royaltigercasino.com',
      color: 'text-yellow-400'
    },
    {
      icon: Clock,
      title: 'Hours',
      details: 'Open 24/7, 365 days a year',
      color: 'text-yellow-400'
    }
  ];

  const amenities = [
    { icon: Car, text: 'Free Transit' },
    { icon: CreditCard, text: 'ATM Services' },
    { icon: Wifi, text: 'Free WiFi' },
    { icon: Navigation, text: 'Wheelchair Accessible' }
  ];

  const directions = [
    {
      title: 'From Gautam Buddha International Airport',
      description: '15-minute drive via Bhairahawa to Butwal Highway',
      time: '15 min'
    },
    {
      title: 'Public Transit',
      description: 'Public bus routes available with stops nearby',
      time: '25 min'
    },
    {
      title: 'Ride Share',
      description: 'Designated pickup/drop-off areas available',
      time: '12 min'
    }
  ];

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs.sendForm(
      'service_adxay0g',
      'template_h5pw5r1',
      formRef.current,
      'Gd-_NqcboMBihEZYZ'
    ).then(
      (result) => {
        setStatus('Thank you for signing up!');
        setShowModal(false);
        formRef.current?.reset();
      },
      (error) => {
        setStatus('Oops! Something went wrong.');
        console.error(error.text);
      }
    );
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-yellow-500/20 border border-yellow-500/30 rounded-full px-4 py-2 mb-6">
            <MapPin className="h-4 w-4 text-yellow-400 mr-2" />
            <span className="text-yellow-400 text-sm font-medium uppercase tracking-wide">
              Visit Us
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black mb-6 text-white">
            VISIT TIGER
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent block">
              PALACE TODAY
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Located in the heart of Bhairahawa, Tiger Palace Casino is easily accessible and ready to welcome you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info + Amenities + CTA */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-yellow-500/20">
              <h3 className="text-2xl font-black text-white mb-8 uppercase tracking-wide">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 p-3 rounded-xl mr-4 flex-shrink-0">
                      <info.icon className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <div className="text-white font-bold mb-1 uppercase tracking-wide">{info.title}</div>
                      <div className="text-gray-300">{info.details}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Amenities */}
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-yellow-500/20">
              <h3 className="text-xl font-black text-white mb-6 uppercase tracking-wide">Amenities & Services</h3>
              <div className="grid grid-cols-2 gap-4">
                {amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center">
                    <amenity.icon className="h-5 w-5 text-yellow-400 mr-3" />
                    <span className="text-gray-300 text-sm">{amenity.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA with Button */}
            <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-2xl p-8">
              <h3 className="text-2xl font-black text-black mb-4 uppercase tracking-wide">Membership</h3>
              <p className="text-black mb-6 font-medium">
                Get exclusive offers, tournament invitations, and VIP perks delivered to your inbox.
              </p>
              <button
                onClick={() => setShowModal(true)}
                className="bg-black text-yellow-400 font-bold px-8 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 uppercase tracking-wide text-sm"
              >
                Sign Up Now
              </button>
            </div>
          </div>

          {/* Map + Directions */}
          <div className="space-y-8">
            {/* Map */}
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-yellow-500/20">
              <h3 className="text-xl font-black text-white mb-6 uppercase tracking-wide">Location</h3>
              <div className="rounded-xl overflow-hidden h-64">
                <iframe
                  title="Tiger Palace Casino Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.0272726476446!2d83.4568192!3d27.5709952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39969b936d17d95f%3A0x2425c9cbbe4166c9!2sCasino%20Tiger%20Palace!5e0!3m2!1sen!2snp!4v1718129469345!5m2!1sen!2snp"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Directions */}
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-yellow-500/20">
              <h3 className="text-xl font-black text-white mb-6 uppercase tracking-wide">Getting Here</h3>
              <div className="space-y-4">
                {directions.map((direction, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-800/50 rounded-xl border border-yellow-500/10">
                    <div>
                      <div className="text-white font-bold mb-1">{direction.title}</div>
                      <div className="text-gray-300 text-sm">{direction.description}</div>
                    </div>
                    <div className="bg-yellow-500 text-black px-3 py-1 rounded-lg text-sm font-bold">
                      {direction.time}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://maps.app.goo.gl/EmaSYm4vigeZDHVM9"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black font-bold px-6 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 uppercase tracking-wide text-sm text-center"
              >
                Get Directions
              </a>
              <a
                href="tel:+977-9820386758"
                className="border-2 border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black font-bold px-6 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 uppercase tracking-wide text-sm text-center"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="bg-gray-900 border border-yellow-500/30 p-8 rounded-2xl w-full max-w-lg relative shadow-xl">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-4 text-yellow-400 hover:text-white text-2xl font-bold"
            >
              &times;
            </button>
            <h3 className="text-2xl font-black text-yellow-400 mb-6 uppercase tracking-wide text-center">
              Membership Form
            </h3>
            <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
              <input
                type="text"
                name="user_name"
                placeholder="Full Name"
                className="w-full p-3 rounded-lg bg-gray-800 text-white border border-yellow-500/20"
                required
              />
              <input
                type="email"
                name="user_email"
                placeholder="Email Address"
                className="w-full p-3 rounded-lg bg-gray-800 text-white border border-yellow-500/20"
                required
              />
              <input
                type="text"
                name="user_mobile"
                placeholder="Mobile Number"
                className="w-full p-3 rounded-lg bg-gray-800 text-white border border-yellow-500/20"
                required
              />
              <textarea
                name="user_message"
                placeholder="Message or Interests"
                className="w-full p-3 rounded-lg bg-gray-800 text-white border border-yellow-500/20"
                rows={4}
              />
              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-6 py-3 rounded-lg transition-all duration-300 uppercase tracking-wide text-sm"
              >
                Submit
              </button>
            </form>
            {status && (
              <p className="mt-4 text-center text-yellow-400 font-semibold">{status}</p>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
