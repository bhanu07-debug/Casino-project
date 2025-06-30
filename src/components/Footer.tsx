import React, { useState } from 'react';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const [popupContent, setPopupContent] = useState(null);

  const footerLinks = {
    casino: [
      {
        name: 'Gaming Guide',
        href: '#',
        popup: [
          "A valid government-issued photo ID is required for age verification.",
          "Tiger Palace Casino promotes responsible gaming.",
          "Guests may voluntarily request self-exclusion or gaming limits.",
          "Casino staff instructions must be followed at all times.",
          "Chips must be redeemed at the cashier before leaving the premises.",
          "Taxes may apply to certain winnings in accordance with government regulations."
        ]
      },
      {
        name: 'House Rules',
        href: '#',
        popup: [
          "Found on the casino floor and website, detailing acceptable behavior and game regulations.",
          "Include following age restrictions, respecting casino personnel, and adhering to dress codes.",
          "The premises are under 24/7 CCTV surveillance for guest safety and regulatory compliance.",
          "Casino chips have no cash value outside the casino.",
          "Card counting or any form of cheating will result in permanent banning and legal action.",
          "The casino is not responsible for any loss or damage to personal property.",
          "No outside food, beverages, or weapons are allowed.",
          "Disorderly conduct, abusive language, or disruptive behavior will result in immediate removal.",
          "Proper attire must be worn at all times. Management reserves the right to deny entry based on inappropriate dress.",
          "Employees are trained to identify and report signs of problem gambling."
        ]
      },
      {
        name: 'Responsible Gaming',
        href: '#',
        popup: [
          "Tiger Palace Casino promotes responsible gaming and encourages guests to gamble within their means.",
          "Guests may voluntarily request self-exclusion or gaming limits.",
          "Casino staff is trained to identify and report signs of problem gambling.",
          "Guests may request assistance from casino staff if they feel they are experiencing problem gaming behaviors.",
          "The casino offers resources for guests struggling with problem gaming, including counseling services and support groups.",
        ]
      },
      { name: 'VIP Program', href: '#' }
    ],
    dining: [
      { name: 'The Jackpot Buffet', href: '#dining' },
      { name: 'Tiger Palace Casino Bar', href: '#dining' },
    ],
    support: [
      { name: 'Contact Us', href: '#Contact' },
      { name: 'Careers', href: '/careers', target: 'VacancyPage' },
      {
        name: 'Privacy Policy',
        href: '#',
        popup: [
          "Royal Tiger Recreation Pvt.Ltd values your patronage and respects your privacy. This Privacy Policy (“Policy”) describes the information collection, use, protection, and sharing practices of Royal Tiger Recreation Pvt.Ltd and its subsidiaries web sites, mobile applications, electronic communications, and properties described below. If you have any questions or concerns about this Policy, please contact us "
        ]
      },
      {
        name: 'Terms & Conditions',
        href: '#',
        popup: [
          "All bookings made through the Call Centre and Website are non-refundable",
          "Rescheduling or cancellation is not allowed within 24 hours of the scheduled date of visit",
          "One-time date change is allowed to reschedule the visit for a future date with an applicable difference amount payable depending on the pricing at the time of revision. Request to be placed 24 hours ahead of the scheduled date of visit",
          "If the pricing for the revised booking is of a lesser amount than your original booking, the remainder is not payable to Guest",
          "Cancellation due to valid medical emergencies is subject to a full refund. However, the same will be addressed post verification of submitted documents",
          "No cancellations/refunds are allowed for bookings made for blackout dates or at special rates",
          "No cancellations/refunds or transfer of tickets in case of no show or unutilized bookings",
          "Refunds shall be issued to the payment method used for the purchase of original tickets/packages. Once refund request is generated, the same will be processed within 10 working days",
          "Management’s decision shall remain final."
        ]
      }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/CasinoTigerPalace/', name: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/tigerpalacecasino/', name: 'Instagram' },
    { icon: Youtube, href: 'https://www.youtube.com/@TigerPalaceCasino', name: 'YouTube' }
  ];

  const quickContact = [
    { icon: Phone, text: '+977-9820386758', href: 'tel:+9779820386758' },
    { icon: Mail, text: 'Marketing@royaltigercasino.com', href: 'mailto:Marketing@royaltigercasino.com' },
    { icon: MapPin, text: 'Bhairahawa,Rupandehi,Lumbini,Nepal,32900', href: '#contact' }
  ];

  const openPopup = (content, e) => {
    e.preventDefault();
    setPopupContent(content);
  };

  const closePopup = () => setPopupContent(null);

  return (
    <>
      <footer className="bg-black border-t border-yellow-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-4">
                <div className="flex items-center space-x-3 mb-6">
                  <img src="/logo_for_red.png" alt="Tiger Palace Casino" className="h-15 w-auto" />
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Experience the ultimate in luxury gaming, dining, and entertainment in the heart of Bhairahawa Strip.
                  Where fortune meets elegance.
                </p>
                <div className="space-y-3 mb-6">
                  {quickContact.map((contact, index) => (
                    <a key={index} href={contact.href} className="flex items-center text-gray-300 hover:text-yellow-400 transition-colors duration-200">
                      <contact.icon className="h-4 w-4 mr-3 text-yellow-400" />
                      <span className="text-sm">{contact.text}</span>
                    </a>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black p-3 rounded-xl transition-all duration-300 transform hover:scale-110"
                      aria-label={social.name}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-8">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  <div>
                    <h3 className="text-white font-black mb-6 uppercase tracking-wide text-sm">Casino Links</h3>
                    <ul className="space-y-3">
                      {footerLinks.casino.map((link) => (
                        <li key={link.name}>
                          <a
                            href={link.href}
                            className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm cursor-pointer"
                            onClick={link.popup ? (e) => openPopup(link.popup, e) : undefined}
                          >
                            {link.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <ul className="space-y-3">
                      {footerLinks.dining.map((link) => (
                        <li key={link.name}>
                          <a href={link.href} className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm">
                            {link.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <ul className="space-y-3">
                      {footerLinks.support.map((link) => (
                        <li key={link.name}>
                          <a
                            href={link.href}
                            target={link.target || '_self'}
                            className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm cursor-pointer"
                            onClick={link.popup ? (e) => openPopup(link.popup, e) : undefined}
                          >
                            {link.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-yellow-500/20 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2025 All rights reserved Tiger Palace Casino & IT-Tech.
              </div>
              <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm text-gray-400">
                <span>Must be 21+ to gamble</span>
                <span>•</span>
                <span>Gamble responsibly</span>
                <span>•</span>
                <span>Royal Tiger Recreation Pvt.Ltd</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {popupContent && (
        <div
          onClick={closePopup}
          style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.6)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 10000,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: '#fff',
              borderRadius: 8,
              padding: 24,
              maxWidth: '90%',
              maxHeight: '80%',
              overflowY: 'auto',
              boxShadow: '0 0 15px rgba(0,0,0,0.3)'
            }}
          >
            <ul className="text-black list-disc pl-5 space-y-2">
              {popupContent.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
            <button
              onClick={closePopup}
              style={{
                marginTop: 16,
                padding: '8px 16px',
                backgroundColor: '#fbbf24',
                border: 'none',
                borderRadius: 4,
                cursor: 'pointer',
                fontWeight: 'bold',
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
