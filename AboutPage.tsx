import React from 'react';
import { ArrowRight, Heart, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-blue-50/50 pt-20 pb-24 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif text-acc-dark mb-6">
            Find your <span className="underline decoration-acc-accent/30 decoration-4">thrive</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            At Acc Firm, we know thriving looks different for everyone. It's what drives you to start your own business, or join a new team. We're here to help you get there.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-acc-dark text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-acc-accent font-bold uppercase tracking-widest mb-12 text-sm">The values that guide us</p>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 text-acc-accent">
                <Heart size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">We care deeply</h3>
              <p className="opacity-80">We're invested in your success because we've been there too.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 text-green-400">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">We work together</h3>
              <p className="opacity-80">Collaboration is the heart of our software and our company culture.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 text-yellow-400">
                <Zap size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">We embrace change</h3>
              <p className="opacity-80">Innovation is constant. We adapt so you can stay ahead.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-white px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-serif text-acc-dark mb-4">The impact we've made</h2>
          <p className="text-gray-500 uppercase tracking-wide text-xs font-bold mb-16">Proudly Canadian and Backed by H&R Block</p>
          
          <div className="grid md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            <div className="p-8">
              <div className="text-xs text-gray-500 uppercase font-bold mb-2">Moved Over</div>
              <div className="text-5xl font-bold text-acc-dark mb-2">$21B</div>
              <div className="text-sm text-gray-600">via online payments and payroll since 2012</div>
            </div>
             <div className="p-8">
              <div className="text-xs text-gray-500 uppercase font-bold mb-2">Sent More Than</div>
              <div className="text-5xl font-bold text-acc-dark mb-2">22.5M</div>
              <div className="text-sm text-gray-600">invoices every year</div>
            </div>
             <div className="p-8">
              <div className="text-xs text-gray-500 uppercase font-bold mb-2">Logged Over</div>
              <div className="text-5xl font-bold text-acc-dark mb-2">1.5B</div>
              <div className="text-sm text-gray-600">accounting transactions since 2011</div>
            </div>
          </div>
        </div>
      </section>

      {/* News Teaser */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-acc-dark mb-8 text-center">Acc Firm in the news</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <div className="text-xs font-bold text-blue-600 mb-1">CityBiz</div>
              <h3 className="font-bold text-acc-dark text-lg mb-2">Q&A with Estelle Tracy, Founder and CEO of 37 Chocolates</h3>
              <div className="flex justify-between items-center">
                 <span className="text-gray-500 text-sm">May 30, 2025</span>
                 <ArrowRight size={16} className="text-acc-blue" />
              </div>
            </div>
             <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <div className="text-xs font-bold text-blue-600 mb-1">Authority Magazine</div>
              <h3 className="font-bold text-acc-dark text-lg mb-2">Lauren Befus Of Memory Lane Jane: Five Things I Wish Someone Told Me When I First Launched My Business or Startup</h3>
              <div className="flex justify-between items-center">
                 <span className="text-gray-500 text-sm">February 15, 2025</span>
                 <ArrowRight size={16} className="text-acc-blue" />
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link to="/press" className="inline-block px-6 py-3 bg-acc-blue text-white font-bold rounded-full hover:bg-blue-700 transition-colors">
              Get all the news
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;