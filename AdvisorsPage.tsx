import React from 'react';
import { Calendar, User, Phone } from 'lucide-react';

const AdvisorsPage: React.FC = () => {
  
  const scrollToPricing = () => {
    const section = document.getElementById('advisor-pricing');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 relative">
        {/* Background Blob Doodle */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-50 rounded-full blur-3xl opacity-50 z-0"></div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center relative z-10">
          <div className="mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-5xl font-serif text-acc-dark mb-6">
              Personalized help with <br /> <span className="text-acc-blue relative inline-block">
                Acc Advisors
                {/* Underline Scribble */}
                <svg className="absolute w-full h-4 -bottom-2 left-0 text-acc-accent opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 25 10 50 5 T 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Get VIP treatment from our in-house bookkeepers and coaches. Save time and gain confidence.
            </p>
            <button 
              onClick={scrollToPricing}
              className="px-6 py-3 bg-acc-accent text-white rounded-full font-bold hover:opacity-90 transition-opacity shadow-lg"
            >
              Explore packages
            </button>
          </div>
          <div className="bg-acc-dark rounded-2xl p-8 shadow-2xl relative text-white">
            <div className="absolute -top-4 -right-4 bg-white text-acc-dark px-4 py-2 rounded-lg shadow font-bold text-sm transform rotate-2 border-2 border-acc-blue z-20">
              Human Experts
            </div>
            {/* Doodle arrow pointing to badge */}
            <div className="absolute -top-12 -right-16 hidden lg:block text-acc-blue">
               <svg width="60" height="60" viewBox="0 0 50 50">
                  <path d="M40 10 Q 30 30 10 30" stroke="currentColor" strokeWidth="2" fill="none" markerEnd="url(#arrow)"/>
                  <defs>
                     <marker id="arrow" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto">
                        <path d="M0 0 L0 6 L9 3 z" fill="currentColor" />
                     </marker>
                  </defs>
               </svg>
            </div>

             <img src="https://picsum.photos/500/400?business" alt="Advisor Dashboard" className="rounded-lg opacity-90 relative z-10" />
          </div>
        </div>

        <div id="advisor-pricing" className="mt-24 text-center">
          <h2 className="text-3xl font-serif font-medium text-acc-dark mb-12 relative inline-block">
             Have a trusted advisor by your side
             {/* Crown Doodle above text */}
             <svg className="absolute -top-8 -right-8 w-10 h-10 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5Z" />
             </svg>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Package 1 */}
            <div className="border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow text-left relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-20 h-20 bg-blue-50 rounded-bl-full -mr-10 -mt-10 group-hover:scale-110 transition-transform"></div>
              
              <h3 className="text-xl font-bold text-acc-dark mb-2 relative z-10">Bookkeeping Support</h3>
              <p className="text-gray-500 text-sm mb-6">Starting at</p>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold text-acc-blue">$149</span>
                <span className="text-gray-500">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <User size={16} className="text-acc-purple" /> Assigned in-house bookkeeper
                </li>
                 <li className="flex items-center gap-3 text-sm text-gray-700">
                  <Calendar size={16} className="text-acc-purple" /> Monthly review calls
                </li>
                 <li className="flex items-center gap-3 text-sm text-gray-700">
                  <Phone size={16} className="text-acc-purple" /> Collaboration with your coach
                </li>
              </ul>
              <button className="w-full py-2 bg-indigo-50 text-acc-blue font-bold rounded-lg hover:bg-indigo-100 transition-colors">
                Book a call
              </button>
            </div>

            {/* Package 2 */}
            <div className="border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow text-left relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-20 h-20 bg-purple-50 rounded-bl-full -mr-10 -mt-10 group-hover:scale-110 transition-transform"></div>

              <h3 className="text-xl font-bold text-acc-dark mb-2 relative z-10">Accounting Coaching</h3>
              <p className="text-gray-500 text-sm mb-6">Starting at</p>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold text-acc-blue">$229</span>
                <span className="text-gray-500">one time fee</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <User size={16} className="text-acc-purple" /> Live 1:1 coaching
                </li>
                 <li className="flex items-center gap-3 text-sm text-gray-700">
                  <Calendar size={16} className="text-acc-purple" /> 30-day email access
                </li>
                 <li className="flex items-center gap-3 text-sm text-gray-700">
                  <Phone size={16} className="text-acc-purple" /> Migration support
                </li>
              </ul>
              <button className="w-full py-2 bg-indigo-50 text-acc-blue font-bold rounded-lg hover:bg-indigo-100 transition-colors">
                Book a call
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvisorsPage;