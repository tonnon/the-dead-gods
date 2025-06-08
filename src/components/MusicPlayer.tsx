import React, { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, Shuffle, Repeat } from 'lucide-react';

const MusicPlayer = () => {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(75);

  const tracks = [
    { title: 'Stairway to the Afterlife', artist: 'Jimi & John', duration: '8:02' },
    { title: 'Smells Like Dead Spirit', artist: 'Kurt Cobain', duration: '5:01' },
    { title: 'Piece of My Dead Heart', artist: 'Janis Joplin', duration: '4:20' },
    { title: 'Hallelujah from Beyond', artist: 'Jeff Buckley', duration: '6:53' },
    { title: 'Won\'t Get Fooled Again (In Death)', artist: 'Keith Moon', duration: '8:35' },
    { title: 'Imagine (The Afterlife)', artist: 'John Lennon', duration: '3:07' }
  ];

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    setCurrentTrack((prev) => (prev + 1) % tracks.length);
  };

  const handlePrevious = () => {
    setCurrentTrack((prev) => (prev - 1 + tracks.length) % tracks.length);
  };

  return (
    <section id="music" className="py-20 bg-gradient-to-b from-orange-900 to-purple-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-green-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-400 mb-6">
            SUPERNATURAL SOUNDS
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-purple-400 mx-auto mb-8"></div>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            Experience the ethereal album "Six Feet Over" - recorded in the spectral studios of Iceland
          </p>
        </div>

        {/* Music Player */}
        <div className="bg-gradient-to-br from-black/80 to-purple-900/50 backdrop-blur-lg rounded-3xl p-8 border border-purple-400/30 shadow-2xl">
          {/* Album Art & Info */}
          <div className="flex flex-col lg:flex-row items-center mb-8">
            <div className="w-48 h-48 bg-gradient-to-br from-purple-600 via-orange-500 to-green-400 rounded-2xl mb-6 lg:mb-0 lg:mr-8 flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-2 bg-black rounded-xl flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-4xl mb-2">💀</div>
                  <div className="text-sm font-bold">SIX FEET</div>
                  <div className="text-sm font-bold">OVER</div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            <div className="text-center lg:text-left flex-1">
              <h3 className="text-3xl font-bold text-white mb-2">
                {tracks[currentTrack].title}
              </h3>
              <p className="text-xl text-purple-300 mb-4">
                {tracks[currentTrack].artist}
              </p>
              <p className="text-gray-400 italic">
                From the album "Six Feet Over" • Recorded in Spectral Studios, Iceland
              </p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between text-sm text-gray-400 mb-2">
              <span>2:34</span>
              <span>{tracks[currentTrack].duration}</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2 cursor-pointer group">
              <div className="bg-gradient-to-r from-green-400 to-purple-400 h-2 rounded-full w-1/3 group-hover:from-green-300 group-hover:to-purple-300 transition-colors"></div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center space-x-6 mb-8">
            <button className="text-gray-400 hover:text-white transition-colors">
              <Shuffle className="w-6 h-6" />
            </button>
            <button 
              onClick={handlePrevious}
              className="text-white hover:text-purple-400 transition-colors hover:scale-110 transform"
            >
              <SkipBack className="w-8 h-8" />
            </button>
            <button 
              onClick={handlePlayPause}
              className="bg-gradient-to-r from-purple-600 to-green-600 hover:from-purple-700 hover:to-green-700 rounded-full p-4 text-white transition-all duration-200 hover:scale-110 transform"
            >
              {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 ml-1" />}
            </button>
            <button 
              onClick={handleNext}
              className="text-white hover:text-purple-400 transition-colors hover:scale-110 transform"
            >
              <SkipForward className="w-8 h-8" />
            </button>
            <button className="text-gray-400 hover:text-white transition-colors">
              <Repeat className="w-6 h-6" />
            </button>
          </div>

          {/* Volume Control */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <Volume2 className="w-5 h-5 text-gray-400" />
            <div className="flex-1 max-w-32">
              <input
                type="range"
                min="0"
                max="100"
                value={volume}
                onChange={(e) => setVolume(Number(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>
            <span className="text-gray-400 text-sm w-8">{volume}%</span>
          </div>

          {/* Track List */}
          <div className="space-y-2">
            <h4 className="text-white font-bold mb-4 text-center">ALBUM TRACKLIST</h4>
            {tracks.map((track, index) => (
              <div
                key={index}
                onClick={() => setCurrentTrack(index)}
                className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                  index === currentTrack
                    ? 'bg-purple-600/30 border border-purple-400/50'
                    : 'hover:bg-gray-800/50'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <span className={`w-8 text-center font-mono ${
                    index === currentTrack ? 'text-purple-400' : 'text-gray-400'
                  }`}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <div className={`font-medium ${
                      index === currentTrack ? 'text-white' : 'text-gray-300'
                    }`}>
                      {track.title}
                    </div>
                    <div className="text-gray-500 text-sm">{track.artist}</div>
                  </div>
                </div>
                <span className="text-gray-400 text-sm">{track.duration}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 text-center">
          <p className="text-gray-400 italic text-sm">
            * This player is for demonstration purposes only. The Dead Gods' music exists on a frequency 
            only audible to the spiritually enlightened.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MusicPlayer;