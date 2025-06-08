import React from 'react';
import { Newspaper, Calendar, TrendingUp } from 'lucide-react';

const News = () => {
  const newsItems = [
    {
      date: 'Oct 31, 2024',
      headline: 'Jimi and John Announce Joint Tour: "Electric Imagine"',
      summary: 'The dynamic duo promises to "blow minds across dimensions" with their psychedelic peace anthems.',
      category: 'TOUR NEWS',
      featured: true
    },
    {
      date: 'Oct 28, 2024',
      headline: 'Elvis Drops Out of Band to Run Cod Farm in Greenland',
      summary: 'The King cited "creative differences" and a newfound passion for sustainable fishing.',
      category: 'BREAKING',
      featured: false
    },
    {
      date: 'Oct 25, 2024',
      headline: 'Keith Moon Banned from Three Afterlife Venues',
      summary: 'Explosive drummer reportedly detonated celestial equipment during sound check.',
      category: 'SCANDAL',
      featured: false
    },
    {
      date: 'Oct 20, 2024',
      headline: 'Janis Joplin Opens Interdimensional Blues Club',
      summary: 'New venue "Soul Kitchen Beyond" accepts both living and dead patrons.',
      category: 'BUSINESS',
      featured: false
    },
    {
      date: 'Oct 15, 2024',
      headline: 'Kurt Cobain Discovers Time Travel, Still Grumpy',
      summary: 'Sources report he\'s using temporal abilities exclusively to avoid interviews.',
      category: 'WEIRD',
      featured: true
    },
    {
      date: 'Oct 10, 2024',
      headline: 'Jeff Buckley\'s Voice Scientifically Proven to Heal Souls',
      summary: 'University of the Afterlife study confirms ethereal properties of his harmonies.',
      category: 'SCIENCE',
      featured: false
    }
  ];

  return (
    <section id="news" className="py-20 bg-gradient-to-b from-purple-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-10 w-80 h-80 bg-green-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-orange-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-green-400 mb-6 flex items-center justify-center">
            <Newspaper className="w-12 h-12 mr-4 text-orange-400" />
            AFTERLIFE NEWS
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-orange-400 to-green-400 mx-auto mb-8"></div>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            Stay updated with the latest supernatural shenanigans from your favorite undead rockers
          </p>
        </div>

        {/* Featured News */}
        <div className="mb-12">
          {newsItems.filter(item => item.featured).map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-orange-900/30 to-purple-900/30 backdrop-blur-sm rounded-2xl p-8 mb-6 border border-orange-400/30 hover:border-orange-400/60 transition-all duration-300 group cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div className="flex items-center space-x-4 mb-4 md:mb-0">
                  <span className="bg-orange-500 text-black font-bold px-3 py-1 rounded-full text-sm">
                    {item.category}
                  </span>
                  <div className="flex items-center text-gray-400">
                    <Calendar className="w-4 h-4 mr-2" />
                    {item.date}
                  </div>
                </div>
                <TrendingUp className="w-6 h-6 text-green-400 group-hover:animate-bounce" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors">
                {item.headline}
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                {item.summary}
              </p>
            </div>
          ))}
        </div>

        {/* Regular News Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {newsItems.filter(item => !item.featured).map((item, index) => (
            <div
              key={index}
              className="group bg-black/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-green-400/50 transition-all duration-300 cursor-pointer hover:transform hover:scale-105"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="bg-purple-600 text-white font-bold px-3 py-1 rounded-full text-sm">
                  {item.category}
                </span>
                <div className="flex items-center text-gray-400 text-sm">
                  <Calendar className="w-4 h-4 mr-1" />
                  {item.date}
                </div>
              </div>
              <h4 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                {item.headline}
              </h4>
              <p className="text-gray-300 leading-relaxed">
                {item.summary}
              </p>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 text-center bg-gradient-to-r from-green-900/30 to-purple-900/30 rounded-2xl p-8 backdrop-blur-sm border border-green-400/20">
          <h3 className="text-3xl font-bold text-white mb-4">
            Stay in the Loop of Life (and Death)
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Get the latest news from the afterlife delivered straight to your mortal inbox. 
            We promise not to haunt your spam folder.
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-green-400 focus:outline-none transition-colors"
            />
            <button className="bg-gradient-to-r from-green-600 to-purple-600 hover:from-green-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 hover:scale-105">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;