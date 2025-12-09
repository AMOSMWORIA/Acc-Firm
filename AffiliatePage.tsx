import React from 'react';
import { ArrowRight, DollarSign, Share2, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const AffiliatePage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-purple-50 pt-20 pb-24 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
           <div className="flex-1 text-center md:text-left">
              <h1 className="text-5xl font-serif text-acc-dark mb-6">
                Share the love, <br /> make some <span className="text-acc-purple">money</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Join our affiliate program and earn commission for spreading the word about Acc Firm.
              </p>
              <Link to="/signin" className="inline-block px-8 py-4 bg-acc-purple text-white font-bold rounded-full shadow-lg hover:bg-purple-700 transition-colors">
                Sign Up
              </Link>
           </div>
           <div className="flex-1">
             <div className="bg-white p-6 rounded-2xl shadow-xl transform rotate-2">
                <div className="flex justify-between items-center border-b pb-4 mb-4">
                   <div className="flex items-center gap-3">
                     <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                       <DollarSign size={20} />
                     </div>
                     <div>
                       <div className="font-bold text-gray-800">Affiliate Payout</div>
                       <div className="text-xs text-gray-500">Just now</div>
                     </div>
                   </div>
                   <div className="font-bold text-green-600">+$462.84</div>
                </div>
                 <div className="flex justify-between items-center opacity-50">
                   <div className="flex items-center gap-3">
                     <div className="w-10 h-10 bg-gray-100 rounded-full"></div>
                     <div>
                       <div className="font-bold text-gray-800">Referral Bonus</div>
                       <div className="text-xs text-gray-500">Yesterday</div>
                     </div>
                   </div>
                   <div className="font-bold text-gray-800">+$150.00</div>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* Who is this for */}
      <section className="bg-acc-blue text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Who is this for?</h2>
          <p className="text-xl opacity-90 leading-relaxed">
            If you're an individual with a newsletter or social media following, or a website owner with a US or Canada-based audience who goes to you for small biz, financial education, or business software advice, you're the perfect fit for the program.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
           <h2 className="text-3xl font-serif text-acc-dark text-center mb-16">How does it work?</h2>
           <div className="grid md:grid-cols-3 gap-12">
             <div className="flex flex-col items-center text-center">
               <div className="w-16 h-16 bg-blue-100 text-acc-blue rounded-full flex items-center justify-center font-bold text-2xl mb-6">1</div>
               <p className="text-gray-700 font-medium">Sign up to be an Acc Firm affiliate - it takes 5 minutes.</p>
             </div>
             <div className="flex flex-col items-center text-center">
               <div className="w-16 h-16 bg-blue-100 text-acc-blue rounded-full flex items-center justify-center font-bold text-2xl mb-6">2</div>
               <p className="text-gray-700 font-medium">Once approved, we'll give you a unique link to share with your audience.</p>
             </div>
             <div className="flex flex-col items-center text-center">
               <div className="w-16 h-16 bg-blue-100 text-acc-blue rounded-full flex items-center justify-center font-bold text-2xl mb-6">3</div>
               <p className="text-gray-700 font-medium">Each time someone new uses your link to sign up for Acc Firm, you earn commission.</p>
             </div>
           </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-gray-50 py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif text-acc-dark mb-12">What's the benefit to my network?</h2>
          <div className="bg-white p-8 rounded-2xl shadow-sm text-left flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
               <h3 className="text-xl font-bold text-acc-dark mb-4">Acc Firm is the trusted money management platform for over 300,000 North American small business owners.</h3>
               <p className="text-gray-600 text-sm leading-relaxed">It's free to create an account, and customers get access to a suite of easy-to-use accounting, invoicing, payments, and payroll tools — plus a team of experienced financial advisors.</p>
            </div>
            <div className="flex-1">
               <img src="https://picsum.photos/400/300?app" alt="Platform" className="rounded-lg shadow-md" />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto border-2 border-acc-accent/20 bg-orange-50 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-acc-dark mb-6">Join Acc Firm's affiliate program.</h2>
          <Link to="/signin" className="inline-block px-8 py-3 bg-acc-purple text-white font-bold rounded-full hover:bg-purple-700 transition-colors">
            Sign Up
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AffiliatePage;