import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, ExternalLink, Skull } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, label: 'Facebook', url: '#', followers: '2.3M' },
    { icon: Twitter, label: 'Twitter', url: '#', followers: '1.8M' },
    { icon: Instagram, label: 'Instagram', url: '#', followers: '3.1M' },
    { icon: Youtube, label: 'YouTube', url: '#', followers: '4.7M' }
  ];

  const quickLinks = [
    'Tour Dates', 'Music', 'Merchandise', 'Fan Club', 'Press Kit', 'Contact'
  ];

  const legalLinks = [
    'Privacy Policy', 'Terms of Service', 'Cookies', 'Afterlife Rights'
  ];

  return (
    <footer className="bg-gradient-to-b from-black to-purple-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-orange-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          <div className="grid lg:grid-cols-4 gap-8 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <Skull className="w-10 h-10 text-purple-400 animate-pulse" />
                <div className="text-3xl font-black text-white">
                  <span className="text-purple-400">THE</span>
                  <span className="text-orange-400 ml-2">DEAD</span>
                  <span className="text-green-400 ml-2">GODS</span>
                </div>
              </div>
              <p className="text-gray-300 text-lg mb-6 max-w-md">
                Six legendary musicians, one supernatural sound. 
                Broadcasting from the afterlife since 2024.
              </p>
              
              {/* Newsletter Signup */}
              <div className="mb-6">
                <h4 className="text-white font-bold mb-3">STAY HAUNTED</h4>
                <div className="flex flex-col sm:flex-row gap-3 max-w-md">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="flex-1 px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors"
                  />
                  <button className="bg-gradient-to-r from-purple-600 to-orange-600 hover:from-purple-700 hover:to-orange-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 hover:scale-105 flex items-center justify-center">
                    <Mail className="w-4 h-4 mr-2" />
                    HAUNT ME
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold mb-6">QUICK LINKS</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-purple-400 transition-colors duration-200 flex items-center group"
                    >
                      <ExternalLink className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-bold mb-6">CONTACT THE DEAD</h4>
              <div className="space-y-4 text-gray-300">
                <div>
                  <p className="font-medium text-white mb-1">Management</p>
                  <p>bookings@thedeadgods.com</p>
                </div>
                <div>
                  <p className="font-medium text-white mb-1">Press Inquiries</p>
                  <p>press@thedeadgods.com</p>
                </div>
                <div>
                  <p className="font-medium text-white mb-1">Fan Mail</p>
                  <p>Iceland Secret Location #27</p>
                  <p>Somewhere in the Afterlife</p>
                </div>
                <div>
                  <p className="font-medium text-white mb-1">Séance Hotline</p>
                  <p>1-800-DEAD-ROCK</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="border-t border-gray-800 pt-8 mb-8">
            <h4 className="text-white font-bold mb-6 text-center">FOLLOW US INTO THE VOID</h4>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="group bg-gray-800 hover:bg-purple-600 rounded-full p-4 transition-all duration-200 hover:scale-110 transform"
                >
                  <social.icon className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors" />
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {social.followers} followers
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
              <div className="text-gray-400 text-center lg:text-left">
                <p>&copy; 2024 The Dead Gods. All rights reserved in this life and the next.</p>
                <p className="text-sm mt-1">
                  Supernatural sounds managed by Afterlife Entertainment LLC.
                </p>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                {legalLinks.map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Gradient */}
        <div className="h-2 bg-gradient-to-r from-purple-600 via-orange-500 to-green-500"></div>
      </div>
    </footer>
  );
};

export default Footer;