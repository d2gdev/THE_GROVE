import React from 'react';

const History: React.FC = () => {
  return (
    <div className="bg-beige-100 min-h-screen">
      
      {/* Page Header */}
      <div className="bg-navy-900 py-24 md:py-32 text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
        <span className="text-gold-500 text-xs font-bold uppercase tracking-[0.2em] mb-4 block relative z-10">Our Origins</span>
        <h1 className="font-serif text-5xl md:text-7xl text-white relative z-10">
          A Century of <br/>
          <span className="italic text-gold-500">Remembrance</span>
        </h1>
        <p className="max-w-2xl mx-auto text-gray-400 mt-6 leading-relaxed text-sm md:text-base relative z-10">
          The Grove reflects over a century of gratitude, created to uniquely honor the valor and resilience of the women who served in the Great War and beyond.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        
        {/* Vertical Timeline Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gray-300 transform -translate-x-1/2 hidden md:block"></div>
        
        {/* 1920s Origin */}
        <div className="relative mb-24 md:flex justify-between items-center w-full">
           <div className="order-1 md:w-5/12 text-right pr-8 hidden md:block">
              <h2 className="font-serif text-6xl text-gold-500/20 font-bold absolute -top-10 right-0 z-0">1920s</h2>
           </div>
           
           <div className="z-20 flex items-center order-1 bg-gold-500 shadow-xl w-4 h-4 rounded-full md:absolute md:left-1/2 md:transform md:-translate-x-1/2 border-4 border-beige-100 mb-4 md:mb-0"></div>
           
           <div className="order-1 md:w-5/12 pl-0 md:pl-12">
              <span className="text-gold-600 font-bold text-5xl font-serif block mb-4 md:hidden">1920s</span>
              <h3 className="font-serif text-3xl text-navy-900 mb-4">Origins: A Memorial Born from Gratitude</h3>
              <p className="text-gray-600 text-sm leading-7 mb-4">
                The Grove was conceived in the years immediately following World War I. While male soldiers were recognized with grand parades and statues, the contributions of nurses, telephone operators, and support staff were largely overlooked.
              </p>
              <p className="text-gray-600 text-sm leading-7">
                Dr. Francis Carter Wood and others championed a living memorial—a grove of trees—representing life continuing despite the losses of war.
              </p>
           </div>
        </div>

        {/* 1932 Dedication */}
        <div className="relative mb-24 md:flex justify-between items-center w-full">
           <div className="order-1 md:w-5/12 md:text-right md:pr-12">
              <span className="text-gold-600 font-bold text-5xl font-serif block mb-4 md:hidden">1932</span>
              <h3 className="font-serif text-3xl text-navy-900 mb-4">The Dedication Ceremony</h3>
              <p className="text-gray-600 text-sm leading-7 mb-6">
                On November 12, 1932, hundreds gathered for the dedication. Gold Star Mothers, veterans, and civic leaders stood together as the original plaque was unveiled.
              </p>
              <div className="bg-white p-6 border-l-4 border-gold-500 shadow-sm text-left">
                <p className="font-serif italic text-navy-800 text-lg mb-2">"To the women who served... in memory and honor forever."</p>
                <span className="text-xs uppercase tracking-widest text-gray-500">- Original Inscription</span>
              </div>
           </div>
           
           <div className="z-20 flex items-center order-1 bg-navy-900 shadow-xl w-4 h-4 rounded-full md:absolute md:left-1/2 md:transform md:-translate-x-1/2 border-4 border-beige-100 mb-4 md:mb-0"></div>
           
           <div className="order-1 md:w-5/12 pl-8 hidden md:block relative">
              <h2 className="font-serif text-6xl text-gold-500/20 font-bold absolute -top-8 left-8 z-0">1932</h2>
           </div>
        </div>

        {/* Insert: WWI Service Cards */}
        <div className="relative mb-24 bg-white p-8 md:p-12 shadow-sm border border-gray-200 mx-auto max-w-4xl z-10">
           <div className="text-center mb-10">
             <h3 className="font-serif text-2xl text-navy-900">Women's Service in World War I</h3>
             <div className="w-16 h-0.5 bg-gold-500 mx-auto mt-4"></div>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="border-l-2 border-gray-200 pl-4">
               <h4 className="font-bold text-navy-800 uppercase text-xs tracking-widest mb-2">Hello Girls</h4>
               <p className="text-gray-600 text-xs leading-5">
                 Over 200 bilingual telephone operators served in the U.S. Army Signal Corps, connecting calls at the front lines under fire.
               </p>
             </div>
             <div className="border-l-2 border-gray-200 pl-4">
               <h4 className="font-bold text-navy-800 uppercase text-xs tracking-widest mb-2">Army Nurses</h4>
               <p className="text-gray-600 text-xs leading-5">
                 Thousands of nurses served in field hospitals, treating the wounded and dying from combat and the Spanish Flu pandemic.
               </p>
             </div>
             <div className="border-l-2 border-gray-200 pl-4">
               <h4 className="font-bold text-navy-800 uppercase text-xs tracking-widest mb-2">Red Cross</h4>
               <p className="text-gray-600 text-xs leading-5">
                 Volunteers provided canteen services, drove ambulances, and provided morale support to troops overseas.
               </p>
             </div>
           </div>
        </div>

        {/* 1940s WWII */}
        <div className="relative mb-24 md:flex justify-between items-center w-full">
           <div className="order-1 md:w-5/12 text-right pr-8 hidden md:block relative">
              <h2 className="font-serif text-6xl text-gold-500/20 font-bold absolute -top-10 right-0 z-0">1940s</h2>
           </div>
           
           <div className="z-20 flex items-center order-1 bg-navy-900 shadow-xl w-4 h-4 rounded-full md:absolute md:left-1/2 md:transform md:-translate-x-1/2 border-4 border-beige-100 mb-4 md:mb-0"></div>
           
           <div className="order-1 md:w-5/12 pl-0 md:pl-12">
              <span className="text-gold-600 font-bold text-5xl font-serif block mb-4 md:hidden">1940s</span>
              <h3 className="font-serif text-3xl text-navy-900 mb-4">World War II and the Years of Obscurity</h3>
              <p className="text-gray-600 text-sm leading-7 mb-4">
                Though the original grove was dedicated to WWI veterans, the 1940s saw millions of women join the WACs, WAVEs, and SPARs. However, the site itself fell into disrepair as city budgets tightened and focus shifted elsewhere.
              </p>
              <p className="text-gray-600 text-sm leading-7">
                By the late 20th century, the plaque was missing, and the history of the trees was largely forgotten by the millions who walked past them annually.
              </p>
           </div>
        </div>

         {/* 2019 Revival */}
        <div className="relative mb-12 md:flex justify-between items-center w-full">
           <div className="order-1 md:w-5/12 md:text-right md:pr-12">
              <span className="text-gold-600 font-bold text-5xl font-serif block mb-4 md:hidden">2019</span>
              <h3 className="font-serif text-3xl text-navy-900 mb-4">Rediscovery and Revival</h3>
              <p className="text-gray-600 text-sm leading-7 mb-6">
                Through the efforts of local historians and veteran advocates, the Grove was "rediscovered." Archives were searched, maps were consulted, and the original planting plan was found.
              </p>
              <p className="text-gray-600 text-sm leading-7 bg-white p-4 border border-gray-100 shadow-sm">
                <strong>Today:</strong> The site is now protected, with ongoing efforts to reinstall signage and host annual tributes.
              </p>
           </div>
           
           <div className="z-20 flex items-center order-1 bg-gold-500 shadow-xl w-4 h-4 rounded-full md:absolute md:left-1/2 md:transform md:-translate-x-1/2 border-4 border-beige-100 mb-4 md:mb-0"></div>
           
           <div className="order-1 md:w-5/12 pl-8 hidden md:block relative">
              <h2 className="font-serif text-6xl text-gold-500/20 font-bold absolute -top-8 left-8 z-0">2019</h2>
           </div>
        </div>

      </div>

      {/* Bottom CTA */}
      <section className="bg-navy-900 py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-4xl text-white mb-6">A Living Memorial for Today and Tomorrow</h2>
          <p className="text-gray-400 mb-10 leading-relaxed">
            The restoration is not just about landscaping; it is about restoring honor. Help us maintain this sacred space, organize educational programs, and ensure that the women who served are never forgotten again.
          </p>
          <button className="bg-gradient-to-r from-gold-600 to-gold-500 text-white px-10 py-4 text-sm uppercase font-bold tracking-widest hover:from-gold-500 hover:to-gold-400 transition-all shadow-lg transform hover:-translate-y-1">
            Support the Project
          </button>
        </div>
      </section>

    </div>
  );
};

export default History;