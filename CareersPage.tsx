import React from 'react';
import { ArrowRight, Globe, Heart, Shield } from 'lucide-react';

const CareersPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-acc-dark text-white pt-24 pb-32 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif mb-6">
            This is you, <span className="text-acc-blue font-bold italic">thriving</span>
          </h1>
          <p className="text-xl opacity-80 max-w-2xl mx-auto">
            At Acc Firm, your work makes a difference. Join us in empowering small businesses everywhere.
          </p>
        </div>
      </section>

      {/* Culture */}
      <section className="bg-yellow-50 py-20 px-4">
         <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm flex flex-col md:flex-row gap-12 items-center">
               <div className="flex-1">
                 <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">Culture</span>
                 <h2 className="text-3xl font-bold text-acc-dark mt-4 mb-4"><span className="bg-yellow-200 px-1">Inspired action</span> guides us.</h2>
                 <p className="text-gray-600 mb-6">Our work is inspiring and fulfilling because we share a goal to serve the underserved and make a real difference. We act with an inner desire to create, contribute, and achieve something meaningful.</p>
               </div>
               <div className="flex-1 grid gap-4">
                 <div className="flex gap-4 items-start">
                    <div className="p-2 bg-blue-50 text-acc-blue rounded-lg"><Globe size={24} /></div>
                    <div>
                      <h3 className="font-bold text-acc-dark">We have the freedom to be flexible.</h3>
                      <p className="text-sm text-gray-600">No matter where you are or how you choose to work, you have what you need to be successful.</p>
                    </div>
                 </div>
                 <div className="flex gap-4 items-start mt-4">
                    <div className="p-2 bg-blue-50 text-acc-blue rounded-lg"><Shield size={24} /></div>
                    <div>
                      <h3 className="font-bold text-acc-dark">Challenge yourself, grow from the learnings, and repeat!</h3>
                      <p className="text-sm text-gray-600">The mark of true success at Acc Firm is the ability to be bold, learn quickly, and share your knowledge.</p>
                    </div>
                 </div>
               </div>
            </div>
         </div>
      </section>

      {/* Values Split */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-serif text-acc-dark mb-6">Belonging at Acc Firm</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              At Acc Firm, we do what is right. That means working hard to make Acc Firm a place where everyone is valued for their unique voice and contributions.
            </p>
            <div className="flex items-start gap-3">
              <Heart className="text-green-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-acc-dark">Thrive Networks</h3>
                <p className="text-sm text-gray-600">Employee-led groups that are supported by the organization to share experiences and advance equity.</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-serif text-acc-dark mb-6">Working at Acc Firm</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Everyone is unique in how they feel most enabled to be successful and productive. At Acc Firm, we understand that there are many ways to collaborate and work together.
            </p>
             <div className="space-y-4">
               <div className="flex items-center gap-3">
                 <div className="w-2 h-2 bg-acc-blue rounded-full"></div>
                 <span className="text-gray-700">Work where you work best</span>
               </div>
               <div className="flex items-center gap-3">
                 <div className="w-2 h-2 bg-acc-blue rounded-full"></div>
                 <span className="text-gray-700">Flex Fund for wellness and healthcare</span>
               </div>
               <div className="flex items-center gap-3">
                 <div className="w-2 h-2 bg-acc-blue rounded-full"></div>
                 <span className="text-gray-700">100% covered health benefits</span>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="bg-acc-lightBlue py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-acc-dark mb-10">Explore careers at Acc Firm</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-acc-dark mb-4 border-b border-gray-200 pb-2">Customer Experience</h3>
              <div className="bg-white p-4 rounded-lg shadow-sm flex justify-between items-center group cursor-pointer hover:shadow-md transition-all">
                <div>
                   <div className="font-bold text-acc-blue group-hover:underline">Accounting Associate</div>
                   <div className="text-xs text-gray-500 mt-1">Nairobi, Kenya • Full-time / Remote</div>
                </div>
                <ArrowRight size={18} className="text-gray-400 group-hover:text-acc-blue" />
              </div>
            </div>

             <div>
              <h3 className="text-xl font-bold text-acc-dark mb-4 border-b border-gray-200 pb-2">Engineering</h3>
              <div className="bg-white p-4 rounded-lg shadow-sm flex justify-between items-center group cursor-pointer hover:shadow-md transition-all mb-3">
                <div>
                   <div className="font-bold text-acc-blue group-hover:underline">Full Stack Software Engineer</div>
                   <div className="text-xs text-gray-500 mt-1">Addis Ababa, Ethiopia • Full-time / Remote</div>
                </div>
                <ArrowRight size={18} className="text-gray-400 group-hover:text-acc-blue" />
              </div>
               <div className="bg-white p-4 rounded-lg shadow-sm flex justify-between items-center group cursor-pointer hover:shadow-md transition-all">
                <div>
                   <div className="font-bold text-acc-blue group-hover:underline">Manager, Engineering</div>
                   <div className="text-xs text-gray-500 mt-1">Kigali, Rwanda • Full-time / Remote</div>
                </div>
                <ArrowRight size={18} className="text-gray-400 group-hover:text-acc-blue" />
              </div>
            </div>

             <div>
              <h3 className="text-xl font-bold text-acc-dark mb-4 border-b border-gray-200 pb-2">Marketing</h3>
              <div className="bg-white p-4 rounded-lg shadow-sm flex justify-between items-center group cursor-pointer hover:shadow-md transition-all">
                <div>
                   <div className="font-bold text-acc-blue group-hover:underline">Product Marketing Manager</div>
                   <div className="text-xs text-gray-500 mt-1">Nairobi, Kenya • Full-time / Remote</div>
                </div>
                <ArrowRight size={18} className="text-gray-400 group-hover:text-acc-blue" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;