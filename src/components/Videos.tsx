import React from 'react';
import { Play, Eye, Calendar, TrendingUp } from 'lucide-react';

const Videos = () => {
  const videos = [
    {
      title: 'Six Feet Over - Official Music Video',
      thumbnail: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '4:20',
      views: '1.2M views',
      date: '2 weeks ago',
      description: 'The Dead Gods rise from their Icelandic hideout',
      featured: true
    },
    {
      title: 'Behind the Scenes: Recording in the Afterlife',
      thumbnail: 'https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '12:34',
      views: '856K views',
      date: '1 month ago',
      description: 'Exclusive footage from the spectral studios',
      featured: false
    },
    {
      title: 'Jimi Hendrix Plays Guitar with His Teeth (Again)',
      thumbnail: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '3:45',
      views: '2.1M views',
      date: '3 weeks ago',
      description: 'Classic moves never die',
      featured: false
    },
    {
      title: 'Kurt Cobain Explains Why He Faked His Death',
      thumbnail: 'https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '8:15',
      views: '3.4M views',
      date: '1 week ago',
      description: 'Exclusive interview from beyond',
      featured: true
    },
    {
      title: 'Janis Joplin\'s Interdimensional Blues Jam',
      thumbnail: 'https://images.pexels.com/photos/1309240/pexels-photo-1309240.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '6:28',
      views: '945K views',
      date: '2 months ago',
      description: 'Soul-crushing performance across realities',
      featured: false
    },
    {
      title: 'Keith Moon Destroys Drums (And Physics)',
      thumbnail: 'https://images.pexels.com/photos/1246437/pexels-photo-1246437.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '5:12',
      views: '1.8M views',
      date: '3 weeks ago',
      description: 'Explosive drumming transcends dimensions',
      featured: false
    }
  ];

  return (
    <section id="videos" className="py-20 bg-gradient-to-b from-purple-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-80 h-80 bg-orange-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-green-500 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-green-400 mb-6 flex items-center justify-center">
            <Play className="w-12 h-12 mr-4 text-purple-400" />
            SUPERNATURAL VIDEOS
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-green-400 mx-auto mb-8"></div>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            Exclusive footage, interviews, and performances from the other side
          </p>
        </div>

        {/* Featured Videos */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
            <TrendingUp className="w-6 h-6 mr-3 text-orange-400" />
            TRENDING IN THE AFTERLIFE
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {videos.filter(video => video.featured).map((video, index) => (
              <div
                key={index}
                className="group bg-black/50 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/90 hover:bg-white rounded-full p-4 group-hover:scale-110 transition-all duration-200">
                      <Play className="w-8 h-8 text-black ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/80 text-white px-2 py-1 rounded text-sm font-medium">
                    {video.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {video.title}
                  </h4>
                  <p className="text-gray-300 mb-3">
                    {video.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        {video.views}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {video.date}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {videos.filter(video => !video.featured).map((video, index) => (
            <div
              key={index}
              className="group bg-black/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-green-400/50 transition-all duration-300 cursor-pointer hover:transform hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 hover:bg-white rounded-full p-3 group-hover:scale-110 transition-all duration-200">
                    <Play className="w-6 h-6 text-black ml-0.5" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-xs font-medium">
                  {video.duration}
                </div>
              </div>
              <div className="p-4">
                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-colors line-clamp-2">
                  {video.title}
                </h4>
                <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                  {video.description}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center">
                    <Eye className="w-3 h-3 mr-1" />
                    {video.views}
                  </div>
                  <span>{video.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Subscribe Section */}
        <div className="text-center bg-gradient-to-r from-orange-900/30 to-purple-900/30 rounded-2xl p-8 backdrop-blur-sm border border-orange-400/20">
          <div className="w-16 h-16 bg-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
            <Play className="w-8 h-8 text-white ml-1" />
          </div>
          <h3 className="text-3xl font-bold text-white mb-4">
            SUBSCRIBE TO THE CHANNEL
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Don't miss any supernatural content from The Dead Gods. 
            Hit subscribe and ring the bell for notifications from beyond!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-200 hover:scale-105 flex items-center">
              <Play className="w-5 h-5 mr-2" fill="currentColor" />
              SUBSCRIBE
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-black font-bold py-3 px-8 rounded-full transition-all duration-200 hover:scale-105">
              🔔 ENABLE NOTIFICATIONS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Videos;