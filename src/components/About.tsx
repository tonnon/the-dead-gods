import React from 'react';
import { MapPin, Calendar, Users } from 'lucide-react';

const About = () => {
  const bandMembers = [
    { name: 'Jimi Hendrix', role: 'Lead Guitar & Vocals', specialty: 'Interdimensional Solos' },
    { name: 'John Lennon', role: 'Rhythm Guitar & Vocals', specialty: 'Peace & Love Anthems' },
    { name: 'Kurt Cobain', role: 'Bass & Vocals', specialty: 'Grunge from the Grave' },
    { name: 'Janis Joplin', role: 'Lead Vocals', specialty: 'Soul-Crushing Blues' },
    { name: 'Jeff Buckley', role: 'Vocals & Guitar', specialty: 'Ethereal Harmonies' },
    { name: 'Keith Moon', role: 'Drums', specialty: 'Explosive Rhythms' }
  ];

  return (
    <section id="band" className="py-20 bg-gradient-to-b from-black to-purple-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-500 via-transparent to-orange-500"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-400 mb-6">
            THE BAND
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-purple-400 mx-auto mb-8"></div>
        </div>

        {/* Story Section */}
        <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-16 border border-purple-500/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6 flex items-center">
                <MapPin className="w-8 h-8 text-green-400 mr-3" />
                The Secret Iceland Sessions
              </h3>
              <div className="text-gray-300 space-y-4 text-lg leading-relaxed">
                <p>
                  What if we told you that the greatest rock legends never really died? 
                  Deep in the volcanic caves of Iceland, these six musical titans have been 
                  secretly living and jamming together for decades.
                </p>
                <p>
                  After years of underground rehearsals and interdimensional songwriting, 
                  The Dead Gods are finally ready to share their otherworldly album 
                  <span className="text-orange-400 font-bold"> "Six Feet Over"</span> 
                  with the living world.
                </p>
                <p className="text-purple-300 italic">
                  "We've been dead to the world, but alive to the music." - Jimi H.
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-600/30 to-orange-600/30 rounded-full w-64 h-64 mx-auto flex items-center justify-center backdrop-blur-sm border border-purple-400/30">
                <div className="text-center">
                  <Calendar className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <div className="text-2xl font-bold text-white">Est. 1970</div>
                  <div className="text-purple-300">Secret Formation</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Band Members Grid */}
        <div className="mb-16">
          <h3 className="text-4xl font-bold text-center text-white mb-12 flex items-center justify-center">
            <Users className="w-10 h-10 text-orange-400 mr-4" />
            The Lineup
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bandMembers.map((member, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-purple-900/50 to-black/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-orange-400/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:animate-pulse">
                    <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{member.name}</h4>
                  <p className="text-orange-400 font-medium mb-2">{member.role}</p>
                  <p className="text-purple-300 text-sm italic">{member.specialty}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Album Teaser */}
        <div className="text-center bg-gradient-to-r from-orange-900/30 to-purple-900/30 rounded-2xl p-8 backdrop-blur-sm border border-orange-400/20">
          <h3 className="text-3xl font-bold text-white mb-4">
            NEW ALBUM: <span className="text-orange-400">"SIX FEET OVER"</span>
          </h3>
          <p className="text-gray-300 text-lg mb-6">
            Recorded in the depths of Icelandic caves with supernatural acoustics.
          </p>
          <div className="text-purple-300 italic">
            "It's not just music... it's a resurrection." - Rolling Stone (Afterlife Edition)
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;