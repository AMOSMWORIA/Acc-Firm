import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Star, ChevronDown, ChevronUp, ArrowUpRight } from 'lucide-react';

const LandingPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const comparisons = [
    "HoneyBook", "QuickBooks", "FreshBooks", "ZipBooks", "Xero", "Sage"
  ];

  const faqs = [
    {
      q: "Is Acc Firm's software something I need to install?",
      a: "Acc Firm is web-based, so you just need an Internet connection and browser—no installation is necessary for our online software! If you're looking for an on-the-go solution, you can install our mobile app."
    },
    {
      q: "Is my bank information secure?",
      a: "Yes. Acc Firm uses 256-bit encryption and is PCI-DSS Level 1 certified to keep your data safe. We do not sell your data."
    },
    {
      q: "Can I upgrade or downgrade my plan?",
      a: "Absolutely. You can start on the free plan and upgrade to Pro whenever you need more advanced features, or downgrade if your needs change."
    }
  ];

  return (
    <div className="bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        {/* Doodle Background Elements */}
        <div className="absolute top-20 left-10 w-24 h-24 opacity-20 animate-pulse hidden md:block">
           <svg viewBox="0 0 100 100" fill="none" className="text-acc-purple">
              <path d="M10 50 Q 25 10 50 50 T 90 50" stroke="currentColor" strokeWidth="4" />
              <path d="M10 70 Q 25 30 50 70 T 90 70" stroke="currentColor" strokeWidth="4" />
           </svg>
        </div>
        
        <div className="absolute inset-0 bg-acc-lightBlue z-0 transform -skew-y-3 origin-top-left scale-110"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-8">
              <div className="relative">
                 <h1 className="text-5xl md:text-6xl font-serif text-acc-dark leading-tight">
                  One less thing to <br/> <span className="text-acc-blue italic font-bold relative inline-block">
                    worry about
                    {/* Underline Doodle */}
                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-acc-accent opacity-80" viewBox="0 0 100 10" preserveAspectRatio="none">
                       <path d="M0 5 Q 50 10, 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                    </svg>
                  </span>
                 </h1>
              </div>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Your bookkeeping, invoicing, and payments in one place. Totally free for starters.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/pricing" className="px-8 py-4 bg-acc-accent text-white rounded-full font-bold text-lg hover:opacity-90 transition-opacity text-center shadow-lg hover:shadow-xl relative group">
                  Create your free account
                  <span className="absolute top-0 right-0 -mr-2 -mt-2 w-4 h-4 bg-yellow-400 rounded-full animate-ping opacity-75"></span>
                </Link>
                <Link to="/features" className="px-8 py-4 bg-white text-acc-dark rounded-full font-bold text-lg border border-gray-200 hover:bg-gray-50 transition-colors text-center">
                  Explore features
                </Link>
              </div>
              <p className="text-sm text-gray-500 font-medium flex items-center gap-2">
                 <Star className="w-4 h-4 text-yellow-400 fill-current" />
                 No credit card required • Cancel anytime
              </p>
            </div>
            <div className="flex-1 relative">
              {/* Abstract doodle behind image */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-acc-purple/10 rounded-full blur-2xl"></div>
              
              <div className="relative">
                 <img 
                    src="https://picsum.photos/600/500?dashboard" 
                    alt="Dashboard Preview" 
                    className="rounded-2xl shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500 relative z-10"
                  />
                  {/* Tape doodle */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-yellow-200/80 rotate-1 z-20 shadow-sm"></div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg animate-bounce z-20 border border-gray-50">
                <div className="flex items-center gap-2">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="font-bold text-acc-dark">Invoice #1024 Paid</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-8">Trusted by over 300,000 small businesses</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Simple placeholders for logos */}
             <div className="text-2xl font-black text-gray-800 tracking-tighter">FORBES</div>
             <div className="text-2xl font-black text-gray-800 tracking-tight">CNBC</div>
             <div className="text-2xl font-black text-gray-800 font-serif">TechCrunch</div>
             <div className="text-2xl font-black text-gray-800 font-mono">WIRED</div>
             <div className="text-2xl font-black text-gray-800 italic">Vogue</div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-24 px-4 bg-white relative">
        {/* Doodle star */}
        <div className="absolute top-20 right-20 text-acc-blue opacity-20 hidden lg:block">
           <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
           </svg>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-serif text-acc-dark mb-6">Manage your money like a boss</h2>
            <p className="text-xl text-gray-600">Everything you need to take control of your business finances, all in one easy-to-use platform.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Professional Invoicing",
                desc: "Create beautiful invoices in seconds. Get paid faster with online payments and automatic reminders.",
                img: "https://picsum.photos/400/300?invoice",
                doodle: "M10 10 L30 30 M30 10 L10 30" // X shape
              },
              {
                title: "Organized Books",
                desc: "Connect your bank account to automatically import and categorize transactions. Tax time made easy.",
                img: "https://picsum.photos/400/300?accounting",
                doodle: "M5 20 Q 20 5, 35 20 T 65 20" // Wave shape
              },
              {
                title: "Advisory Services",
                desc: "Get 1:1 coaching from our team of bookkeeping experts. We'll help you stay on track.",
                img: "https://picsum.photos/400/300?meeting",
                doodle: "M20 20 A 10 10 0 1 1 20 21" // Circleish
              }
            ].map((item, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="mb-6 overflow-hidden rounded-2xl relative">
                   <img src={item.img} alt={item.title} className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500" />
                   
                   {/* Sticker Doodle */}
                   <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-lg shadow-sm transform rotate-6 group-hover:rotate-12 transition-transform">
                      <svg width="24" height="24" viewBox="0 0 40 40" stroke="black" strokeWidth="3" fill="none">
                        <path d={item.doodle} />
                      </svg>
                   </div>
                </div>
                <h3 className="text-2xl font-bold text-acc-dark mb-3 group-hover:text-acc-blue transition-colors">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{item.desc}</p>
                <Link to="/features" className="text-acc-blue font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparisons */}
      <section className="py-24 bg-slate-50 px-4 relative overflow-hidden">
        {/* Background Scribble */}
        <div className="absolute inset-0 pointer-events-none opacity-5">
           <svg width="100%" height="100%">
             <path d="M0 100 Q 200 200 400 100 T 800 100" stroke="black" strokeWidth="2" fill="none"/>
           </svg>
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-acc-dark mb-4">Why business owners switch to Acc Firm</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {comparisons.map((comp, i) => (
               <div key={i} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-center justify-between group">
                 <span className="font-bold text-gray-700">vs {comp}</span>
                 <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-acc-blue" />
               </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-acc-dark text-white px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-acc-blue rounded-full filter blur-[100px] opacity-20"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="flex justify-center mb-8 relative">
            <div className="flex gap-1 text-yellow-400">
              {[1,2,3,4,5].map(s => <Star key={s} fill="currentColor" className="w-6 h-6" />)}
            </div>
            {/* Hand drawn arrow pointing to stars */}
            <div className="absolute -right-24 top-0 hidden md:block opacity-50 rotate-12">
               <svg width="80" height="40" viewBox="0 0 80 40" fill="none" stroke="white">
                 <path d="M70 30 Q 40 40 10 10" strokeWidth="2" markerEnd="url(#arrowhead)"/>
                 <defs>
                   <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                     <polygon points="0 0, 10 3.5, 0 7" fill="white" />
                   </marker>
                 </defs>
               </svg>
               <span className="text-xs font-handwriting block text-right mt-1">Real reviews!</span>
            </div>
          </div>
          <blockquote className="text-3xl md:text-4xl font-serif leading-tight mb-10">
            "Before Acc Firm, I was drowning in spreadsheets. Now I actually look forward to checking my finances. It's that good."
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <img src="https://picsum.photos/100/100?portrait" alt="User" className="w-12 h-12 rounded-full border-2 border-white/20" />
            <div className="text-left">
              <div className="font-bold">Sarah Jenkins</div>
              <div className="text-sm opacity-60">Founder, Bloom & Co.</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-12">
            <h2 className="text-3xl font-bold text-acc-dark text-center">Common questions</h2>
             {/* Question mark doodle */}
             <svg width="30" height="30" viewBox="0 0 30 30" fill="none" className="text-acc-blue">
                <circle cx="15" cy="15" r="14" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2"/>
                <path d="M11 10C11 8 13 6 15 6C17 6 19 8 19 10C19 13 15 14 15 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="15" cy="21" r="1" fill="currentColor"/>
             </svg>
          </div>
          
          <div className="space-y-4">
            {faqs.map((item, i) => (
              <div key={i} className="border-b border-gray-100 pb-4">
                <button 
                  onClick={() => toggleFaq(i)}
                  className="w-full flex justify-between items-center py-4 text-left focus:outline-none group"
                >
                  <span className="font-bold text-lg text-acc-dark group-hover:text-acc-blue transition-colors">{item.q}</span>
                  {openFaq === i ? <ChevronUp className="text-acc-blue" /> : <ChevronDown className="text-gray-400" />}
                </button>
                {openFaq === i && (
                  <div className="pb-4 text-gray-600 leading-relaxed animate-fadeIn pl-4 border-l-2 border-acc-lightBlue ml-1">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-purple-100 px-4 text-center relative overflow-hidden">
        {/* Confetti Doodles */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10">
           <svg width="100%" height="100%">
              <circle cx="10%" cy="20%" r="5" fill="#6d5ae5" />
              <rect x="80%" y="30%" width="10" height="10" fill="#ff7043" transform="rotate(45 800 300)" />
              <path d="M 50 50 L 70 70" stroke="#0053a6" strokeWidth="3" />
           </svg>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
           <h2 className="text-4xl md:text-5xl font-serif text-acc-dark mb-8">Ready to get started?</h2>
           <Link to="/pricing" className="inline-block px-10 py-4 bg-acc-blue text-white rounded-full font-bold text-lg shadow-xl hover:bg-blue-700 hover:scale-105 transition-all">
             Create free account
           </Link>
           <p className="mt-6 text-gray-600">No credit card required.</p>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;