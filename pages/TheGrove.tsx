import React from 'react';
import { MapPin, Clock, Trees, Compass } from 'lucide-react';

const TheGrove: React.FC = () => {
  return (
    <div className="bg-beige-100 min-h-screen">
      {/* Hero */}
      <div className="relative h-[60vh] bg-navy-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop')] bg-cover bg-center opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/40 to-transparent"></div>
        
        <div className="relative z-10 text-center max-w-4xl px-4">
          <span className="text-gold-500 text-xs font-bold uppercase tracking-[0.2em] mb-4 block">A Sanctuary in the City</span>
          <h1 className="font-serif text-5xl md:text-7xl text-white mb-6">The Living Memorial</h1>
          <p className="text-gray-200 text-lg md:text-xl font-light max-w-2xl mx-auto">
            A quiet canopy of resilience amidst the bustle of Central Park.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
        <div className="bg-white p-8 md:p-12 shadow-xl border-t-4 border-gold-500">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div>
              <h2 className="font-serif text-3xl text-navy-900 mb-6">The Landscape of Memory</h2>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-4">
                  The Women Veterans Memorial Grove is more than a collection of trees; it is a meticulously planned living monument. Originally dedicated in the 1920s, the grove consists of 24 oaks, each representing a specific regiment or organization of women who served during the First World War.
                </p>
                <p>
                  Today, these trees stand tall—living witnesses to history. The winding paths invite visitors to walk slowly, reflect, and find solace in the dappled sunlight that filters through the leaves.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="bg-navy-100 p-3 rounded-full text-navy-800">
                    <Trees size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-900 uppercase text-xs tracking-widest mb-1">24 Living Oaks</h4>
                    <p className="text-xs text-gray-600">Representing the endurance of service beyond a single lifetime.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-navy-100 p-3 rounded-full text-navy-800">
                    <Compass size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-900 uppercase text-xs tracking-widest mb-1">Sacred Ground</h4>
                    <p className="text-xs text-gray-600">Located in a quiet alcove near the 69th Street entrance.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-96 bg-gray-200 overflow-hidden rounded-sm shadow-inner">
               {/* Abstract representation of a map since we don't have a real map API key active */}
               <div className="absolute inset-0 bg-navy-800 flex items-center justify-center">
                  <div className="text-center p-8">
                     <MapPin className="text-gold-500 w-12 h-12 mx-auto mb-4" />
                     <h3 className="text-white font-serif text-2xl mb-2">Central Park</h3>
                     <p className="text-gray-400 mb-6">Near 69th Street & 5th Avenue</p>
                     <div className="inline-block border border-white/20 px-6 py-3 text-xs uppercase tracking-widest text-white">
                        Map Placeholder
                     </div>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </div>

      {/* Visiting Information */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl text-navy-900 mb-4">Plan Your Visit</h2>
            <div className="w-16 h-0.5 bg-gold-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 text-center border border-gray-100 hover:shadow-lg transition-shadow">
              <Clock className="w-8 h-8 text-navy-900 mx-auto mb-6" />
              <h3 className="font-serif text-xl text-navy-900 mb-3">Hours</h3>
              <p className="text-gray-600">Open Daily</p>
              <p className="text-gray-600 font-bold">6:00 AM - 1:00 AM</p>
            </div>
            
            <div className="bg-white p-8 text-center border border-gray-100 hover:shadow-lg transition-shadow">
              <MapPin className="w-8 h-8 text-navy-900 mx-auto mb-6" />
              <h3 className="font-serif text-xl text-navy-900 mb-3">Entrances</h3>
              <p className="text-gray-600">East 69th Street</p>
              <p className="text-gray-600">East 72nd Street</p>
            </div>

            <div className="bg-white p-8 text-center border border-gray-100 hover:shadow-lg transition-shadow">
              <Compass className="w-8 h-8 text-navy-900 mx-auto mb-6" />
              <h3 className="font-serif text-xl text-navy-900 mb-3">Accessibility</h3>
              <p className="text-gray-600">Paved pathways available</p>
              <p className="text-gray-600 text-sm mt-2">Some terrain may be uneven due to roots.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TheGrove;