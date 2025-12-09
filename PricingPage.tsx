import React, { useState } from 'react';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const PricingPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "What if I just want to try Acc Firm to see if it works?",
      answer: "No problem! You can start with our Free plan which gives you access to essential features like unlimited invoicing and receipt scanning. There's no credit card required to sign up, so you can explore the platform at your own pace."
    },
    {
      question: "Do I automatically qualify for online payments if I sign up for Pro?",
      answer: "While Pro features are instantly available, online payments require a quick verification process for security purposes. This typically takes 1-2 business days. Once approved, you can start accepting credit cards and bank transfers immediately."
    },
    {
      question: "Is it easy to cancel for any reason after I subscribe?",
      answer: "Absolutely. You can cancel your Pro subscription at any time directly from your dashboard settings. There are no cancellation fees, and you'll retain access to your data even after downgrading to the free plan."
    },
    {
      question: "Can I change plans easily?",
      answer: "Yes, you can upgrade to Pro or downgrade to the Free plan whenever you like. If you upgrade, the change is immediate. If you downgrade, your Pro features will remain active until the end of your current billing cycle."
    },
    {
      question: "Is the subscription fee for the Pro Plan per owner or per business?",
      answer: "The subscription fee is per business. If you manage multiple businesses within Acc Firm, you can choose to upgrade specific businesses to Pro while keeping others on the Free plan depending on their needs."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <div className="bg-acc-lightBlue pt-16 pb-32 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-serif text-acc-dark mb-4">
          Plans to make your plans <span className="italic text-acc-purple font-bold">happen</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">Start with our free tools and upgrade as you grow. No hidden fees.</p>
      </div>

      <div className="max-w-6xl mx-auto px-4 -mt-20">
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Starter Plan */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden flex flex-col">
            <div className="p-8 border-b border-gray-100">
              <div className="inline-block px-3 py-1 bg-gray-100 text-gray-600 rounded text-xs font-bold uppercase tracking-wider mb-4">Starter</div>
              <h2 className="text-2xl font-bold text-acc-dark mb-2">Free</h2>
              <div className="text-5xl font-bold text-acc-dark mb-1">$0</div>
              <p className="text-sm text-gray-500">forever</p>
              <p className="mt-6 text-gray-600">Just starting your business or looking for the basics? This is the place.</p>
              <Link to="/signin" className="block w-full py-3 mt-8 text-center border-2 border-acc-blue text-acc-blue font-bold rounded-full hover:bg-acc-blue hover:text-white transition-colors">
                Get started now
              </Link>
            </div>
            <div className="p-8 bg-gray-50 flex-grow">
              <ul className="space-y-4">
                {[
                  "Create unlimited estimates, invoices, bills",
                  "Option to accept online payments (pay-per-use)",
                  "Invoice on-the-go with mobile app",
                  "Manage cash flow in one dashboard",
                  "Secure document storage"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="text-green-500 w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="bg-white rounded-2xl shadow-xl border-2 border-acc-blue overflow-hidden flex flex-col relative">
            <div className="absolute top-0 right-0 bg-acc-blue text-white text-xs font-bold px-3 py-1 rounded-bl-lg">RECOMMENDED</div>
            <div className="p-8 border-b border-gray-100">
              <div className="inline-block px-3 py-1 bg-indigo-50 text-acc-blue rounded text-xs font-bold uppercase tracking-wider mb-4">Pro</div>
              <h2 className="text-2xl font-bold text-acc-dark mb-2">Monthly</h2>
              <div className="text-5xl font-bold text-acc-dark mb-1">$16<span className="text-2xl text-gray-400 font-normal">/mo</span></div>
              <p className="text-sm text-green-600 font-medium">Save with annual billing</p>
              <p className="mt-6 text-gray-600">Want to look more polished, save more time, and conquer cash flow? It's Pro time.</p>
              <Link to="/signin" className="block w-full py-3 mt-8 text-center bg-acc-blue text-white font-bold rounded-full hover:bg-blue-700 transition-colors shadow-lg">
                Get started now
              </Link>
            </div>
            <div className="p-8 bg-indigo-50/30 flex-grow">
               <p className="text-sm font-bold text-acc-blue mb-4 uppercase tracking-wide">Everything in Starter, plus...</p>
              <ul className="space-y-4">
                {[
                  "Discounted online payment rates",
                  "Auto-import bank transactions",
                  "Auto-merge and categorize transactions",
                  "Digitally capture unlimited receipts",
                  "Automate late payment reminders"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="text-acc-blue w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-24 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-acc-dark mb-8">Frequently Asked Questions</h3>
          <div className="space-y-4">
            {faqs.map((item, i) => (
              <div 
                key={i} 
                className="bg-white rounded-lg border border-gray-200 overflow-hidden transition-all duration-200 hover:border-acc-blue"
              >
                <button 
                  onClick={() => toggleFaq(i)}
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                >
                  <span className="font-bold text-acc-dark text-lg pr-8">{item.question}</span>
                  <div className={`w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center transition-colors flex-shrink-0 ${openFaq === i ? 'bg-acc-blue text-white' : 'text-gray-500'}`}>
                    {openFaq === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </button>
                
                {openFaq === i && (
                  <div className="px-6 pb-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100 animate-fadeIn">
                    <div className="mt-4">{item.answer}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;