import React from 'react';
import { BlogPost } from '../types';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogPage: React.FC = () => {
  // Updated posts with categories matching the new structure where applicable
  const posts: BlogPost[] = [
    {
      id: 1,
      category: "Small Business Growth",
      title: "Introducing Acc Perks: Your hub for small business growth",
      excerpt: "We're thrilled to introduce Acc Perks, a new hub designed to help you discover trusted partners, powerful tools, and exclusive offers that make running and growing your business smarter.",
      image: "https://picsum.photos/600/400?random=1"
    },
    {
      id: 2,
      category: "Bookkeeping & Accounting",
      title: "The ultimate daily bookkeeping checklist",
      excerpt: "Daily bookkeeping doesn't need to take hours or require a finance degree. With just a few minutes each day—and the right tools—you can stay on top of your money, keep stress low, and actually understand your cash flow.",
      image: "https://picsum.photos/600/400?random=2"
    },
    {
      id: 3,
      category: "Bookkeeping & Accounting",
      title: "Spreadsheet vs. accounting software: When to make the switch",
      excerpt: "Unsure whether to stick with spreadsheets or switch to accounting software? Find out when it's time to upgrade and how accounting software like Acc Firm can streamline your business finances.",
      image: "https://picsum.photos/600/400?random=3"
    },
    {
      id: 4,
      category: "Bookkeeping & Accounting",
      title: "How bank reconciliation keeps your business on track",
      excerpt: "Account reconciliation is an important part of every business. This guide details how to tackle it in Acc Firm so you're always on top of your record keeping.",
      image: "https://picsum.photos/600/400?random=4"
    },
    {
      id: 5,
      category: "Cashflow",
      title: "Managing cash flow: 7 tips for solo-preneurs to avoid money crunches",
      excerpt: "Struggling with inconsistent income? Discover 7 practical tips to manage your cash flow, avoid money crunches, and thrive as a solopreneur.",
      image: "https://picsum.photos/600/400?random=5"
    },
    {
      id: 6,
      category: "Financial Statements",
      title: "What is a profit and loss statement?",
      excerpt: "Learn what a profit and loss statement is, why it matters for your business, and how to read one with ease. Understand key terms, examples, and take control of your finances today.",
      image: "https://picsum.photos/600/400?random=6"
    },
    {
      id: 7,
      category: "Cashflow",
      title: "How to keep track of business expenses: 4 easy steps",
      excerpt: "Discover four easy steps to track your business expenses effectively. Stay organized, save time, and gain control of your company's finances today.",
      image: "https://picsum.photos/600/400?random=7"
    },
    {
      id: 8,
      category: "Financial Statements",
      title: "What is a balance sheet? Beginner's guide with examples and tips",
      excerpt: "Learn how to read one, break down assets and liabilities, and improve your business finances with this easy guide.",
      image: "https://picsum.photos/600/400?random=8"
    },
    {
      id: 9,
      category: "Bookkeeping & Accounting",
      title: "Small business bookkeeping: Step-by-step guide to master your money",
      excerpt: "Bookkeeping is important because it gives you insight into where your money is going and how your business is performing, helping you make smart business decisions.",
      image: "https://picsum.photos/600/400?random=9"
    },
    {
      id: 10,
      category: "Small Business Taxes",
      title: "The complete guide to small business tax season",
      excerpt: "Take the fear and stress out of tax season with this comprehensive guide to confidently managing your books, audit-proofing your business, and getting your taxes done right.",
      image: "https://picsum.photos/600/400?random=10"
    },
    {
      id: 11,
      category: "News",
      title: "Wave x Shorty Awards Elevate Creatives Fund: Announcing the sec-ond annual recipients",
      excerpt: "Acc Firm is proud to say we're continuing our mission of helping creatives break the internet, not the bank, with a second year of the $120,000 USD Elevate Creatives Fund.",
      image: "https://picsum.photos/600/400?random=11"
    },
    {
      id: 12,
      category: "Security",
      title: "What is domain spoofing? How to protect yourself from fraudsters",
      excerpt: "Everything you need to know about domain spoofing, and how to keep yourself safe from fraudsters.",
      image: "https://picsum.photos/600/400?random=12"
    }
  ];

  const categories = [
    {
      name: "Bookkeeping & Accounting",
      description: "Manage your finances and streamline your bookkeeping, so you're spending less time on paperwork and more time running your business.",
      linkText: "Read more bookkeeping posts"
    },
    {
      name: "Business Planning",
      description: "Learn how to set up your business for success, including how different legal structures work, how to register your business, and how to pay yourself.",
      linkText: "Read more business planning posts"
    },
    {
      name: "Cashflow",
      description: "Learn how to maintain healthy cash flow for your business, including tips and tricks on tracking business expenses and building cash reserves.",
      linkText: "Read more cash flow posts"
    },
    {
      name: "Entrepreneurship",
      description: "Helpful tips on everything from running a smoother business to creating a better work/life balance—plus insights into productivity and inspiration.",
      linkText: "Check out more entrepreneurship articles"
    },
    {
      name: "Financial Statements",
      description: "Financial statements help you keep your organized and prepped for tax season. Learn more about P&Ls, balance sheets, cash flow statements, and more!",
      linkText: "Read more financial statement posts"
    },
    {
      name: "Small Business Taxes",
      description: "Learn all about how to stay prepped for tax season, including tips on tax readiness, tax filing, deductions, forms, audits, and more!",
      linkText: "Read more tax posts"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
       <div className="bg-slate-50 py-16 px-4">
         <div className="max-w-7xl mx-auto">
           <h1 className="text-5xl font-serif text-acc-dark mb-8">Blog</h1>
           
           <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-8 group cursor-pointer hover:shadow-md transition-shadow">
             <div className="flex-1">
               <span className="text-acc-purple font-bold text-xs uppercase tracking-wide">Featured</span>
               <h2 className="text-3xl font-bold text-acc-dark mt-2 mb-4 group-hover:text-acc-blue transition-colors">Your business, your way—with a little help from Acc Firm</h2>
               <p className="text-gray-600 mb-6">Everything we build starts with one question: How can we help you run your business with more ease and confidence?</p>
               <button className="text-acc-blue font-bold hover:underline">Read the full story</button>
             </div>
             <div className="flex-1">
               <img src="https://picsum.photos/800/500?office" alt="Featured" className="rounded-xl w-full object-cover" />
             </div>
           </div>
         </div>
       </div>

       <div className="max-w-7xl mx-auto px-4 py-16">
         <h2 className="text-2xl font-bold text-acc-dark mb-8">Our newest posts</h2>
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map(post => (
              <div key={post.id} className="group cursor-pointer flex flex-col h-full">
                <div className="overflow-hidden rounded-xl mb-4 border border-gray-100">
                  <img src={post.image} alt={post.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex-1 flex flex-col">
                  <p className="text-xs font-bold text-gray-500 uppercase mb-2">{post.category}</p>
                  <h3 className="text-xl font-bold text-acc-dark mb-3 group-hover:text-acc-blue transition-colors">{post.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">{post.excerpt}</p>
                </div>
              </div>
            ))}
         </div>

         <div className="text-center mt-12 mb-20">
            <button className="px-8 py-3 bg-acc-blue text-white font-bold rounded-full hover:bg-blue-700 transition-colors">
              Load More
            </button>
         </div>

         <div className="mt-20 border-t border-gray-100 pt-16">
           <h3 className="text-3xl font-bold text-acc-dark mb-12">Browse by category</h3>
           
           <div className="space-y-12">
             {categories.map((cat, index) => (
               <div key={index} className="group cursor-pointer">
                 <h4 className="text-xl font-bold text-acc-dark mb-3 group-hover:text-acc-blue">{cat.name}</h4>
                 <p className="text-gray-600 max-w-4xl mb-3 leading-relaxed">
                   {cat.description}
                 </p>
                 <div className="flex items-center text-acc-blue font-bold text-sm">
                   {cat.linkText} <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                 </div>
               </div>
             ))}
           </div>
         </div>
       </div>

       {/* Bottom CTA */}
       <div className="bg-purple-200 py-20 text-center px-4">
          <h2 className="text-3xl sm:text-4xl font-serif text-acc-dark mb-4">
             Money management solutions <br/> to help you button-up your <br/> books and run your business
          </h2>
          <div className="mt-8">
            <Link to="/pricing" className="px-8 py-3 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-colors shadow-lg">
               Get started for free
            </Link>
          </div>
       </div>
    </div>
  );
};

export default BlogPage;