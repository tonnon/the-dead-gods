import React from 'react';
import { Volume2, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-900 via-black to-orange-900">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-green-500 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Title */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-orange-400 to-green-400 mb-4 animate-pulse">
              THE DEAD GODS
            </h1>
            <div className="text-xl md:text-2xl text-white font-light tracking-wider">
              EST. 2024 • SOMEWHERE BEYOND
            </div>
          </div>

          {/* Tagline */}
          <div className="mb-12">
            <p className="text-2xl md:text-4xl text-white font-bold mb-4 drop-shadow-lg">
              Six legends. One last gig.
            </p>
            <p className="text-xl md:text-2xl text-purple-300 font-medium">
              Welcome to the afterlife.
            </p>
          </div>

          {/* Band Member Silhouettes */}
          <div className="mb-12 flex justify-center items-end space-x-4 opacity-80">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className={`bg-gradient-to-t from-purple-600 to-transparent rounded-full opacity-70 hover:opacity-100 transition-opacity duration-300 ${
                  i % 2 === 0 ? 'w-12 h-20' : 'w-10 h-16'
                } ${i === 3 ? 'w-14 h-24' : ''}`}
              ></div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-gradient-to-r from-purple-600 to-orange-600 hover:from-purple-700 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-full transform hover:scale-105 transition-all duration-200 flex items-center space-x-2">
              <Play className="w-5 h-5 group-hover:animate-pulse" />
              <span>ENTER THE AFTERLIFE</span>
            </button>
            <button className="group border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-black font-bold py-4 px-8 rounded-full transform hover:scale-105 transition-all duration-200 flex items-center space-x-2">
              <Volume2 className="w-5 h-5 group-hover:animate-bounce" />
              <span>TURN IT UP</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;