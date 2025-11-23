import React from 'react';
import { ArrowRight, Calendar, MapPin, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] bg-navy-900 flex items-center justify-center overflow-hidden">
        {/* Background Overlay/Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-navy-800 via-navy-900 to-black opacity-80 z-0"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block border border-white/20 px-4 py-1 mb-8 rounded-full">
            <span className="text-gold-500 text-xs uppercase tracking-[0.2em] font-medium">Central Park, New York City, NY • Est. 1920</span>
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-tight mb-8">
            Women Veterans <br/>
            <span className="text-gold-500 italic">Memorial Grove</span>
          </h1>
          
          <p className="text-gray-300 text-lg md:text-xl font-light max-w-2xl mx-auto mb-12 leading-relaxed">
            A living monument in Central Park honoring the service, sacrifice, and resilience of women in uniform.
            <br />
            <span className="italic text-gray-500 text-sm mt-2 block">Their service echoes among these trees.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/history" className="bg-gold-500 text-white px-8 py-4 rounded-sm text-sm uppercase font-bold tracking-widest hover:bg-gold-600 transition-all duration-300 shadow-lg hover:shadow-gold-500/20">
              Explore the History
            </Link>
            <button className="bg-transparent border border-white/30 text-white px-8 py-4 rounded-sm text-sm uppercase font-bold tracking-widest hover:bg-white hover:text-navy-900 transition-all duration-300">
              Visit the Grove
            </button>
          </div>
          
          <div className="mt-16 animate-bounce">
            <span className="text-xs text-gray-500 uppercase tracking-widest cursor-pointer">Dive into the History ↓</span>
          </div>
        </div>
      </section>

      {/* History Restoration Section */}
      <section className="bg-beige-100 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            <div className="lg:w-1/2">
               <span className="text-gold-600 font-bold text-xs uppercase tracking-widest mb-4 block">Our History</span>
               <h2 className="font-serif text-4xl md:text-6xl text-navy-900 mb-8 leading-none">
                 Restoring a legacy <br/>
                 <span className="italic font-light">almost lost to time.</span>
               </h2>
               
               <div className="prose prose-lg text-gray-600 mb-8">
                 <p className="mb-6">
                   For decades, the Grove was a gathering place of solemn remembrance, holding the untold stories of women who served. Over time, however, this sacred space faded from public memory, obscured by overgrowth and the passage of years.
                 </p>
                 <p>
                   Today, we are dedicated to restoring the Grove to its former dignity, ensuring that the stories of the brave women who served—from the Hello Girls of WWI to the modern warriors of today—are preserved for future generations.
                 </p>
               </div>
               
               <Link to="/history" className="inline-flex items-center text-navy-900 font-bold uppercase text-xs tracking-widest hover:text-gold-600 transition-colors group">
                 Read Our History 
                 <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
               </Link>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="absolute top-4 -left-4 w-full h-full border-2 border-gold-500/30 z-0"></div>
              <div className="relative z-10 bg-white p-4 shadow-xl">
                 <img 
                   src="https://picsum.photos/600/750?grayscale" 
                   alt="Historical photo of women veterans" 
                   className="w-full h-auto sepia-[.30] contrast-125"
                 />
                 <div className="mt-4 flex justify-between text-[10px] text-gray-400 uppercase tracking-wide">
                    <span>Vintage archival photo, c. 1921</span>
                    <span>Source: National Archives</span>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Event Section */}
      <section className="bg-navy-900 py-24 md:py-32 relative overflow-hidden">
        {/* Subtle pattern overlay */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-block border border-white/10 px-4 py-1 mb-8">
             <span className="text-gray-400 text-xs uppercase tracking-widest">Upcoming Ceremony</span>
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
            Annual Women of Service Tribute
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-16 font-light text-lg">
            Each year we gather at the Grove to honor the women who served. We read their names aloud, share their stories, and stand together in remembrance.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            
            {/* Date Card */}
            <div className="bg-navy-800/50 border border-white/5 p-8 flex flex-col items-center hover:border-gold-500/50 transition-colors duration-300">
               <Calendar className="text-gold-500 mb-6 w-8 h-8" strokeWidth={1} />
               <h3 className="text-white font-serif text-xl mb-2">November 11, 2025</h3>
               <p className="text-gray-500 text-xs uppercase tracking-widest">11:00 AM - 12:30 PM</p>
            </div>

            {/* Location Card */}
            <div className="bg-navy-800/50 border border-white/5 p-8 flex flex-col items-center hover:border-gold-500/50 transition-colors duration-300">
               <MapPin className="text-gold-500 mb-6 w-8 h-8" strokeWidth={1} />
               <h3 className="text-white font-serif text-xl mb-2">The Memorial Grove</h3>
               <p className="text-gray-500 text-xs uppercase tracking-widest">Central Park, Near 69th St Walkway</p>
            </div>

            {/* Access Card */}
            <div className="bg-navy-800/50 border border-white/5 p-8 flex flex-col items-center hover:border-gold-500/50 transition-colors duration-300">
               <Info className="text-gold-500 mb-6 w-8 h-8" strokeWidth={1} />
               <h3 className="text-white font-serif text-xl mb-2">Open to the Public</h3>
               <p className="text-gray-500 text-xs uppercase tracking-widest">RSVP Requested</p>
            </div>
          </div>

          <button className="bg-gold-500 text-white px-10 py-4 text-sm uppercase font-bold tracking-widest hover:bg-gold-600 transition-colors shadow-lg shadow-gold-900/20">
            Event Details & RSVP
          </button>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-navy-800 py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-gold-500 font-serif text-6xl opacity-30">"</span>
          <p className="font-serif text-2xl md:text-3xl text-gray-200 leading-relaxed -mt-8 px-4">
            The Women Veterans Memorial Grove is a place of silence, remembrance, and gratitude. A dedicated altar for the Great War, it honors the women who served then and now.
          </p>
          <div className="mt-8">
            <span className="block w-12 h-0.5 bg-gold-500 mx-auto"></span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;