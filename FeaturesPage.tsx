import React from 'react';
import { ArrowRight, PieChart, DollarSign, Users, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturesPage: React.FC = () => {
  const features = [
    {
      id: "invoicing",
      title: "Invoicing",
      desc: "Stop chasing clients around. Send professional invoices, automated reminders, and get paid faster.",
      icon: <FileText size={32} />,
      color: "bg-blue-100 text-blue-600",
      img: "https://picsum.photos/400/300?random=10"
    },
    {
      id: "accounting",
      title: "Accounting",
      desc: "Accounting software to keep you organized. Track income and expenses without the headache.",
      icon: <PieChart size={32} />,
      color: "bg-purple-100 text-purple-600",
      img: "https://picsum.photos/400/300?random=11"
    },
    {
      id: "payments",
      title: "Payments",
      desc: "Online payments = on-time payments. Accept credit cards and bank transfers instantly.",
      icon: <DollarSign size={32} />,
      color: "bg-green-100 text-green-600",
      img: "https://picsum.photos/400/300?random=12"
    },
    {
      id: "payroll",
      title: "Payroll",
      desc: "Payroll that pays off. Pay employees and contractors in minutes, not hours.",
      icon: <Users size={32} />,
      color: "bg-orange-100 text-orange-600",
      img: "https://picsum.photos/400/300?random=13"
    }
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Doodle Background */}
      <div className="bg-acc-dark text-white py-20 px-4 relative">
        <div className="absolute top-10 left-10 opacity-10">
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
             <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="4" strokeDasharray="10 10"/>
          </svg>
        </div>
        <div className="absolute bottom-10 right-10 opacity-10">
          <svg width="120" height="80" viewBox="0 0 120 80" fill="none">
             <path d="M10 40 Q 30 10, 60 40 T 110 40" stroke="white" strokeWidth="4"/>
          </svg>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">Built for small business owners like you</h1>
          <p className="text-xl text-gray-300">From freelancing to running a team, we have the tools you need.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20 relative">
        {/* Floating shapes */}
        <div className="absolute top-40 left-0 hidden lg:block opacity-20">
             <svg width="150" height="150" viewBox="0 0 100 100" fill="none">
               <rect x="20" y="20" width="60" height="60" transform="rotate(15 50 50)" stroke="#6d5ae5" strokeWidth="3"/>
             </svg>
        </div>

        <div className="space-y-24">
          {features.map((f, i) => (
            <div id={f.id} key={i} className={`flex flex-col md:flex-row items-center gap-12 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''} relative`}>
              {/* Connector Doodle */}
              {i < features.length - 1 && (
                 <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 hidden md:block text-gray-200">
                    <svg width="2" height="60" viewBox="0 0 2 60">
                      <line x1="1" y1="0" x2="1" y2="60" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4"/>
                    </svg>
                 </div>
              )}

              <div className="flex-1 space-y-6 relative">
                 {/* Small sparkle doodle */}
                 <div className="absolute -top-6 -left-6 text-yellow-400 opacity-60">
                   <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                     <path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10L12 0Z" />
                   </svg>
                 </div>

                <div className={`w-16 h-16 ${f.color} rounded-2xl flex items-center justify-center mb-4`}>
                  {f.icon}
                </div>
                <h2 className="text-3xl font-bold text-acc-dark">{f.title}</h2>
                <p className="text-lg text-gray-600 leading-relaxed">{f.desc}</p>
                <ul className="space-y-3 mt-4">
                  <li className="flex items-center gap-2 text-gray-700">
                    <div className="w-1.5 h-1.5 bg-acc-blue rounded-full"></div>
                    Professional templates
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <div className="w-1.5 h-1.5 bg-acc-blue rounded-full"></div>
                    Mobile app included
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <div className="w-1.5 h-1.5 bg-acc-blue rounded-full"></div>
                    Secure data encryption
                  </li>
                </ul>
                <div className="pt-4">
                    <Link to="/pricing" className="text-acc-blue font-bold flex items-center gap-2 hover:gap-3 transition-all">
                        Get started with {f.title} <ArrowRight size={16} />
                    </Link>
                </div>
              </div>
              <div className="flex-1">
                <div className="relative group">
                    <div className="absolute inset-0 bg-acc-lightBlue rounded-3xl transform rotate-3 scale-95 z-0 transition-transform group-hover:rotate-6"></div>
                    
                    {/* Corner doodle on image */}
                    <div className="absolute -bottom-4 -right-4 z-20 text-acc-purple">
                       <svg width="60" height="60" viewBox="0 0 100 100" fill="none">
                          <path d="M0 50 Q 50 0, 100 50" stroke="currentColor" strokeWidth="8" strokeLinecap="round" opacity="0.5"/>
                          <path d="M20 80 Q 50 50, 80 80" stroke="currentColor" strokeWidth="8" strokeLinecap="round" opacity="0.5"/>
                       </svg>
                    </div>

                    <img src={f.img} alt={f.title} className="relative z-10 rounded-3xl shadow-xl border border-gray-100" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-acc-lightBlue py-20 text-center relative overflow-hidden">
         {/* Background pattern */}
         <div className="absolute inset-0 opacity-5 pointer-events-none">
             <svg width="100%" height="100%">
                 <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                     <circle cx="2" cy="2" r="1" fill="black"/>
                 </pattern>
                 <rect width="100%" height="100%" fill="url(#grid)"/>
             </svg>
         </div>

         <div className="relative z-10">
           <h2 className="text-3xl font-bold text-acc-dark mb-8">Ready to get organized?</h2>
           <Link to="/pricing" className="bg-acc-accent text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-orange-600 transition-colors">
              Create your free account
           </Link>
         </div>
      </div>
    </div>
  );
};

export default FeaturesPage;