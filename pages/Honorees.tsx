import React from 'react';
import { Star, Award, Scroll } from 'lucide-react';

const Honorees: React.FC = () => {
  const honorees = [
    {
      name: "The Hello Girls",
      role: "Signal Corps Telephone Operators",
      era: "World War I",
      desc: "Bilingual operators who served on the front lines, connecting critical communications under artillery fire. Despite their uniform and oath, they were denied veteran status for 60 years.",
      image: "https://images.unsplash.com/photo-1534073828943-f801091a3912?q=80&w=800&auto=format&fit=crop" // Placeholder
    },
    {
      name: "Army Nurse Corps",
      role: "Medical Support",
      era: "World War I & II",
      desc: "More than 20,000 nurses served in WWI, staffing base hospitals and casualty clearing stations. Their compassion and skill saved countless lives amidst the horror of trench warfare.",
      image: "https://images.unsplash.com/photo-1588611910602-53b0e3532f1f?q=80&w=800&auto=format&fit=crop" // Placeholder
    },
    {
      name: "Yeomen (F)",
      role: "US Naval Reserve Force",
      era: "World War I",
      desc: "The first women to officially enlist in the US armed forces. They served as radio operators, electricians, and camouflage designers, releasing men for sea duty.",
      image: "https://images.unsplash.com/photo-1579965342575-16428a7c8881?q=80&w=800&auto=format&fit=crop" // Placeholder
    }
  ];

  return (
    <div className="bg-beige-100 min-h-screen">
      {/* Header */}
      <div className="bg-navy-900 text-white py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <Award className="w-12 h-12 text-gold-500 mx-auto mb-6" strokeWidth={1} />
          <h1 className="font-serif text-5xl md:text-6xl mb-6">Profiles of Courage</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Honoring the individuals and groups whose service paved the way for generations of women in uniform.
          </p>
        </div>
      </div>

      {/* Featured Profiles */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {honorees.map((h, index) => (
            <div key={index} className="bg-white group hover:-translate-y-2 transition-transform duration-300 shadow-md hover:shadow-xl overflow-hidden flex flex-col h-full">
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-navy-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={h.image} 
                  alt={h.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <div className="mb-4">
                  <span className="text-gold-600 text-xs font-bold uppercase tracking-widest">{h.era}</span>
                  <h3 className="font-serif text-2xl text-navy-900 mt-2">{h.name}</h3>
                  <p className="text-sm text-gray-500 italic">{h.role}</p>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                  {h.desc}
                </p>
                <button className="text-navy-900 uppercase text-xs font-bold tracking-widest flex items-center hover:text-gold-600 transition-colors">
                  Read Full Profile <Star className="ml-2 w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Roll of Honor Section */}
      <div className="bg-navy-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Scroll className="w-10 h-10 text-gold-500 mx-auto mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl mb-8">The Roll of Honor</h2>
          <p className="text-gray-400 mb-12">
            We are currently digitizing the names of the original honorees from 1920-1945. Search the database to find a relative or learn more about a specific unit.
          </p>
          
          <div className="bg-navy-700/50 p-8 rounded border border-white/5 max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <input 
                type="text" 
                placeholder="Search by name or unit..." 
                className="flex-grow bg-navy-900 border border-navy-600 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gold-500"
              />
              <button className="bg-gold-500 text-white px-8 py-3 uppercase font-bold text-xs tracking-widest hover:bg-gold-600 transition-colors">
                Search
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-4 text-left">
              * Database is currently under construction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Honorees;