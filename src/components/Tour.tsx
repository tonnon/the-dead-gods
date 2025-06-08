import React from 'react';
import { MapPin, Calendar, Ticket, ExternalLink } from 'lucide-react';

const Tour = () => {
  const tourDates = [
    {
      date: 'Nov 15, 2024',
      venue: 'Badger & Partridge Pub',
      location: 'King\'s Cross, London',
      status: 'SOLD OUT',
      special: 'Intimate acoustic set'
    },
    {
      date: 'Nov 22, 2024',
      venue: 'Moon Base Alpha',
      location: 'Lunar Surface',
      status: 'TICKETS',
      special: 'Zero gravity performance'
    },
    {
      date: 'Dec 5, 2024',
      venue: 'The Bermuda Triangle Arena',
      location: 'Somewhere in the Atlantic',
      status: 'MYSTERIOUS',
      special: 'May or may not happen'
    },
    {
      date: 'Dec 12, 2024',
      venue: 'Atlantis Amphitheater',
      location: 'Under the Sea',
      status: 'TICKETS',
      special: 'Underwater acoustics'
    },
    {
      date: 'Dec 25, 2024',
      venue: 'Santa\'s Workshop',
      location: 'North Pole',
      status: 'HOLIDAY SPECIAL',
      special: 'Christmas miracle show'
    },
    {
      date: 'Jan 1, 2025',
      venue: 'The Center of the Earth',
      location: 'Core Temperature: 5,700°C',
      status: 'HOT TICKETS',
      special: 'Molten rock experience'
    },
    {
      date: 'Jan 15, 2025',
      venue: 'Area 51 Hangar',
      location: 'Nevada (Classified)',
      status: 'ALIEN APPROVED',
      special: 'Intergalactic debut'
    },
    {
      date: 'Feb 14, 2025',
      venue: 'The Love Dimension',
      location: 'Hearts Everywhere',
      status: 'ROMANTIC',
      special: 'Valentine\'s séance'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'sold out': return 'bg-red-500 text-white';
      case 'tickets': return 'bg-green-500 text-black';
      case 'mysterious': return 'bg-purple-500 text-white';
      case 'holiday special': return 'bg-red-600 text-white';
      case 'hot tickets': return 'bg-orange-500 text-black';
      case 'alien approved': return 'bg-blue-500 text-white';
      case 'romantic': return 'bg-pink-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  return (
    <section id="tour" className="py-20 bg-gradient-to-b from-black to-orange-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-green-500 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-400 mb-6 flex items-center justify-center">
            <MapPin className="w-12 h-12 mr-4 text-purple-400" />
            TOUR DATES
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-orange-400 mx-auto mb-8"></div>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            From underground pubs to intergalactic venues - The Dead Gods are taking their afterlife tour 
            to the most impossible places in existence.
          </p>
        </div>

        {/* Tour Notice */}
        <div className="bg-gradient-to-r from-purple-900/50 to-orange-900/50 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-purple-400/30 text-center">
          <Ticket className="w-12 h-12 text-orange-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-4">
            SUPERNATURAL TICKET WARNING
          </h3>
          <p className="text-gray-300 text-lg">
            All venues exist in varying states of reality. The Dead Gods are not responsible for 
            temporal displacement, interdimensional confusion, or spontaneous levitation during shows.
          </p>
        </div>

        {/* Tour Dates List */}
        <div className="space-y-4">
          {tourDates.map((show, index) => (
            <div
              key={index}
              className="group bg-black/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-102"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                <div className="flex-1 mb-4 lg:mb-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 mb-3">
                    <div className="flex items-center text-gray-400 mb-2 sm:mb-0">
                      <Calendar className="w-5 h-5 mr-2" />
                      <span className="font-medium text-white">{show.date}</span>
                    </div>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-bold ${getStatusColor(show.status)}`}>
                      {show.status}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors mb-2">
                    {show.venue}
                  </h3>
                  
                  <div className="flex items-center text-gray-300 mb-2">
                    <MapPin className="w-4 h-4 mr-2 text-orange-400" />
                    {show.location}
                  </div>
                  
                  <p className="text-purple-300 italic text-sm">
                    {show.special}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  {show.status !== 'SOLD OUT' && show.status !== 'MYSTERIOUS' && (
                    <button className="bg-gradient-to-r from-purple-600 to-orange-600 hover:from-purple-700 hover:to-orange-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 hover:scale-105 flex items-center justify-center">
                      <Ticket className="w-4 h-4 mr-2" />
                      GET TICKETS
                    </button>
                  )}
                  
                  <button className="border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-black font-bold py-3 px-6 rounded-lg transition-all duration-200 hover:scale-105 flex items-center justify-center">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    VENUE INFO
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* VIP Experience */}
        <div className="mt-16 bg-gradient-to-r from-green-900/30 to-purple-900/30 backdrop-blur-sm rounded-2xl p-8 border border-green-400/20 text-center">
          <h3 className="text-3xl font-bold text-white mb-6">
            VIP AFTERLIFE EXPERIENCE
          </h3>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">👻</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Séance Soundcheck</h4>
              <p className="text-gray-300">Exclusive pre-show spiritual communication</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🎸</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Haunted Meet & Greet</h4>
              <p className="text-gray-300">Touch base with your favorite dead legends</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">💫</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Levitation Lounge</h4>
              <p className="text-gray-300">Float with the band in VIP dimension</p>
            </div>
          </div>
          <button className="bg-gradient-to-r from-green-600 to-purple-600 hover:from-green-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-200 hover:scale-105">
            ASCEND TO VIP
          </button>
        </div>
      </div>
    </section>
  );
};

export default Tour;