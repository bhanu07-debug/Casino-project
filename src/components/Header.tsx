import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMembershipForm, setShowMembershipForm] = useState(false);

  // EmailJS form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#games', label: 'Games' },
    { href: '#dining', label: 'Dining' },
    { href: '#events', label: 'Events' },
    { href: '#about', label: 'About' },
    { href: '#gallery', label: 'gallery' }, 
    { href: '#contact', label: 'Contact' },
  ];

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle membership form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);

    const serviceID = 'service_adxay0g'; // replace with your actual service ID
    const templateID = 'template_h5pw5r1'; // replace with your actual template ID
    const userID = 'Gd-_NqcboMBihEZYZ'; // replace with your actual user ID (public key)

    emailjs.send(serviceID, templateID, formData, userID)
      .then(() => {
        setSubmitMessage('Thank you! Your membership request has been sent.');
        setFormData({ fullName: '', email: '', phone: '', message: '' });
        setIsSubmitting(false);
        setShowMembershipForm(false); // close modal on success
      })
      .catch(() => {
        setSubmitMessage('Failed to send your request. Please try again.');
        setIsSubmitting(false);
      });
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-black py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm font-medium">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+977-9820386758</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Bhairahawa</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span>Open 24/7 • VIP Services Available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-md shadow-lg' : 'bg-black'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <img 
                src="/logo_for_red.png" 
                alt="Tiger Palace Casino" 
                className="h-14 w-auto"
              />
              <div>
                <div className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                  TIGER PALACE CASINO
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-white hover:text-yellow-400 transition-colors duration-200 font-medium text-sm uppercase tracking-wide"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Desktop Membership Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <button
                onClick={() => setShowMembershipForm(true)}
                className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black font-bold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 text-sm uppercase tracking-wide"
              >
                MEMBERSHIP
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden text-black"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden bg-black/95 backdrop-blur-md rounded-lg mt-2 p-4 border border-yellow-500/20">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-black hover:text-yellow-400 transition-colors duration-200 font-medium text-sm uppercase tracking-wide"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    setShowMembershipForm(true);
                  }}
                  className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black font-bold px-6 py-3 rounded-lg transition-all duration-300 text-sm uppercase tracking-wide mt-4"
                >
                  Join VIP Club
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Membership Modal */}
      {showMembershipForm && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg max-w-md w-full p-6 relative">
            <button
              onClick={() => setShowMembershipForm(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
            >
              <X className="h-5 w-5" />
            </button>
            <h2 className="text-xl font-bold mb-4 text-yellow-600">Membership Form</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                name="fullName"
                type="text"
                placeholder="Full Name"
                className="w-full border p-2 rounded text-black"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                className="w-full border p-2 rounded text-black"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                className="w-full border p-2 rounded text-black"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                className="w-full border p-2 rounded text-black"
                rows={3}
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded"
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
              {submitMessage && (
                <p className={`mt-2 text-center text-sm ${submitMessage.startsWith('Thank') ? 'text-green-600' : 'text-red-600'}`}>
                  {submitMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
