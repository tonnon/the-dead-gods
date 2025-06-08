import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import News from './components/News';
import Tour from './components/Tour';
import MusicPlayer from './components/MusicPlayer';
import Videos from './components/Videos';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <News />
        <Tour />
        <MusicPlayer />
        <Videos />
      </main>
      <Footer />
    </div>
  );
}

export default App;