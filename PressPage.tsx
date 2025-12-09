import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';

const PressPage: React.FC = () => {
  const news = [
    { source: "CityBiz", date: "May 30, 2025", title: "Q&A with Estelle Tracy: How I Found My Way to Chocolate", link: "#" },
    { source: "Authority Magazine", date: "February 25, 2025", title: "Lauren Befus Of Memory Lane Jane: Five Things I Wish Someone Told Me When I First Launched My Business", link: "#" },
    { source: "NetInfluencer.com", date: "January 13, 2025", title: "How Acc Firm and The Shorty Awards Spot Future Digital Media Leaders", link: "#" },
    { source: "BadCredit.org", date: "January 9, 2025", title: "Simple Money Management That Gives Small Businesses a Unified View of Their Financial Health", link: "#" },
    { source: "Forbes", date: "January 9, 2025", title: "Four Trends That Could Define Microbusiness Success In 2025", link: "#" },
    { source: "Canadian Business", date: "November 1, 2024", title: "Highlights From CB's 2024 Evolution Summit", link: "#" }
  ];

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-slate-50 py-20 px-4 text-center">
        <h1 className="text-5xl font-serif text-acc-dark mb-6">News and Media</h1>
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Acc Firm provides simple money management solutions that empower small business owners and solopreneurs to take control of their finances.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-serif text-acc-dark text-center mb-16">Acc Firm in the news</h2>
        
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
          {news.map((item, idx) => (
            <a key={idx} href={item.link} className="group block border-b border-gray-100 pb-8 hover:border-acc-blue transition-colors">
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-bold text-acc-blue uppercase tracking-wide">{item.source}</span>
                <span className="text-xs text-gray-400">{item.date}</span>
              </div>
              <h3 className="text-xl font-bold text-acc-dark group-hover:text-acc-blue transition-colors mb-2">
                {item.title}
              </h3>
              <div className="flex items-center text-sm text-acc-blue opacity-0 group-hover:opacity-100 transition-opacity">
                Read article <ExternalLink size={12} className="ml-1" />
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-20">
           <button className="px-8 py-3 bg-purple-100 text-acc-purple font-bold rounded-full hover:bg-purple-200 transition-colors">
             Get all the news
           </button>
        </div>
      </div>

      <div className="bg-acc-blue text-white py-20 px-4 mt-20">
         <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <h2 className="text-3xl font-serif">How to Thrive in the Creator Economy</h2>
            <button className="px-6 py-3 bg-white text-acc-blue font-bold rounded-full hover:bg-gray-100">
               Download playbook
            </button>
         </div>
      </div>
    </div>
  );
};

export default PressPage;