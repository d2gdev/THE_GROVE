import React from 'react';
import { Heart, Hand, Mail, ArrowRight } from 'lucide-react';

const GetInvolved: React.FC = () => {
  return (
    <div className="bg-beige-100 min-h-screen flex flex-col">
      
      {/* Hero */}
      <div className="bg-navy-900 text-white py-24 md:py-32 text-center px-4 relative overflow-hidden">
        {/* Decorative Circle */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="text-gold-500 text-xs font-bold uppercase tracking-[0.2em] mb-6 block">Join the Mission</span>
          <h1 className="font-serif text-5xl md:text-6xl mb-8">Stewardship & Support</h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            The Women Veterans Memorial Grove relies on the dedication of our community. Your support ensures this sacred space remains beautiful, accessible, and honored for generations to come.
          </p>
        </div>
      </div>

      {/* Action Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Donate Card */}
          <div className="bg-white p-8 md:p-10 shadow-lg border-t-4 border-gold-500 flex flex-col items-center text-center">
            <div className="bg-beige-100 p-4 rounded-full mb-6 text-navy-900">
              <Heart size={32} />
            </div>
            <h3 className="font-serif text-2xl text-navy-900 mb-4">Donate</h3>
            <p className="text-gray-600 text-sm mb-8 leading-relaxed">
              Contributions directly fund landscaping, plaque restoration, and educational programs. Every dollar helps preserve her legacy.
            </p>
            <button className="mt-auto bg-navy-900 text-white px-8 py-3 w-full text-xs uppercase font-bold tracking-widest hover:bg-gold-500 transition-colors">
              Make a Gift
            </button>
          </div>

          {/* Volunteer Card */}
          <div className="bg-white p-8 md:p-10 shadow-lg border-t-4 border-navy-700 flex flex-col items-center text-center">
            <div className="bg-beige-100 p-4 rounded-full mb-6 text-navy-900">
              <Hand size={32} />
            </div>
            <h3 className="font-serif text-2xl text-navy-900 mb-4">Volunteer</h3>
            <p className="text-gray-600 text-sm mb-8 leading-relaxed">
              Join us for seasonal cleanup days, serve as a docent during events, or offer your professional skills to the Grove committee.
            </p>
            <button className="mt-auto bg-white border border-navy-900 text-navy-900 px-8 py-3 w-full text-xs uppercase font-bold tracking-widest hover:bg-navy-900 hover:text-white transition-colors">
              Sign Up
            </button>
          </div>

          {/* Stay Connected Card */}
          <div className="bg-white p-8 md:p-10 shadow-lg border-t-4 border-gold-500 flex flex-col items-center text-center">
            <div className="bg-beige-100 p-4 rounded-full mb-6 text-navy-900">
              <Mail size={32} />
            </div>
            <h3 className="font-serif text-2xl text-navy-900 mb-4">Stay Connected</h3>
            <p className="text-gray-600 text-sm mb-8 leading-relaxed">
              Receive invitations to the annual Veterans Day ceremony and updates on historical discoveries regarding the Grove.
            </p>
            <button className="mt-auto bg-white border border-navy-900 text-navy-900 px-8 py-3 w-full text-xs uppercase font-bold tracking-widest hover:bg-navy-900 hover:text-white transition-colors">
              Subscribe
            </button>
          </div>

        </div>
      </div>

      {/* Volunteer Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl text-navy-900 mb-4">Volunteer Interest Form</h2>
            <p className="text-gray-500">Tell us how you'd like to help.</p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">First Name</label>
                <input type="text" className="w-full bg-beige-100 border-none p-4 text-navy-900 focus:ring-1 focus:ring-gold-500" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Last Name</label>
                <input type="text" className="w-full bg-beige-100 border-none p-4 text-navy-900 focus:ring-1 focus:ring-gold-500" />
              </div>
            </div>
            
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Email Address</label>
              <input type="email" className="w-full bg-beige-100 border-none p-4 text-navy-900 focus:ring-1 focus:ring-gold-500" />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Interest Areas</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input type="checkbox" className="form-checkbox text-gold-500 rounded focus:ring-gold-500" />
                  <span className="text-gray-700 text-sm">Gardening / Landscape Maintenance</span>
                </label>
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input type="checkbox" className="form-checkbox text-gold-500 rounded focus:ring-gold-500" />
                  <span className="text-gray-700 text-sm">Event Support / Ushering</span>
                </label>
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input type="checkbox" className="form-checkbox text-gold-500 rounded focus:ring-gold-500" />
                  <span className="text-gray-700 text-sm">Historical Research</span>
                </label>
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input type="checkbox" className="form-checkbox text-gold-500 rounded focus:ring-gold-500" />
                  <span className="text-gray-700 text-sm">Fundraising</span>
                </label>
              </div>
            </div>

            <div className="pt-6">
              <button type="button" className="bg-gold-500 text-white px-10 py-4 text-sm uppercase font-bold tracking-widest hover:bg-gold-600 transition-colors flex items-center justify-center w-full md:w-auto">
                Submit Interest <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </section>

    </div>
  );
};

export default GetInvolved;