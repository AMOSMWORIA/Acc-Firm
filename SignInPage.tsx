import React from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

const SignInPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-acc-lightBlue flex items-center justify-center p-4 relative">
      {/* Close Button */}
      <Link to="/" className="absolute top-6 right-6 p-2 bg-white rounded-full text-gray-500 hover:text-acc-dark hover:bg-gray-100 shadow-md transition-all z-50">
        <X size={24} />
      </Link>

      <div className="grid md:grid-cols-2 max-w-5xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden min-h-[600px]">
        {/* Left Side: Marketing */}
        <div className="hidden md:flex flex-col justify-center p-12 bg-white items-center text-center">
            <div className="mb-8 relative">
              <div className="absolute top-0 right-0 -mr-4 -mt-4 w-20 h-20 bg-yellow-100 rounded-full z-0"></div>
              <div className="absolute bottom-0 left-0 -ml-4 -mb-4 w-16 h-16 bg-blue-100 rounded-full z-0"></div>
              <img src="https://picsum.photos/300/300?wallet" alt="Payments" className="relative z-10 w-48 h-48 object-contain" />
            </div>
            <h2 className="text-2xl font-bold text-acc-dark mb-4">Get paid like the pros</h2>
            <p className="text-gray-600 mb-8 max-w-xs">Give your customers every way to pay with Acc Firm Payments.</p>
            <ul className="text-left text-sm space-y-3">
              <li className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-green-100 text-green-600 flex items-center justify-center">✓</div>
                <span>Add a secure "Pay now" button</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-green-100 text-green-600 flex items-center justify-center">✓</div>
                <span>Accept credit cards & Apple Pay</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-green-100 text-green-600 flex items-center justify-center">✓</div>
                <span>Get paid in 1-2 business days</span>
              </li>
            </ul>
        </div>

        {/* Right Side: Form */}
        <div className="flex flex-col justify-center p-8 md:p-12 bg-slate-50/50">
          <div className="flex items-center gap-2 mb-8 justify-center md:justify-start">
             <div className="w-8 h-8 bg-acc-blue rounded-tr-xl rounded-bl-xl"></div>
             <span className="font-bold text-2xl text-acc-dark">Acc Firm</span>
          </div>
          
          <h2 className="text-3xl font-bold text-acc-dark mb-8">Sign in</h2>
          
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Email</label>
              <input type="email" className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-acc-blue focus:border-transparent outline-none transition-all" />
            </div>
            <div>
              <div className="flex justify-between items-center mb-1">
                 <label className="block text-sm font-bold text-gray-700">Password</label>
                 <a href="#" className="text-xs text-acc-blue font-bold hover:underline">Forgot it?</a>
              </div>
              <input type="password" className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-acc-blue focus:border-transparent outline-none transition-all" />
            </div>
            
            <button className="w-full bg-blue-600 text-white font-bold py-3 rounded-full hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
              Sign in
            </button>
          </form>

          <div className="relative my-8 text-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <span className="relative bg-slate-50/50 px-4 text-sm text-gray-500">or</span>
          </div>

          <div className="space-y-3">
            <button className="w-full bg-white border border-gray-300 text-gray-700 font-bold py-3 rounded-full hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
              <span className="text-lg">G</span> Sign in with Google
            </button>
            <button className="w-full bg-black text-white font-bold py-3 rounded-full hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
               Sign in with Apple
            </button>
          </div>
          
          <p className="mt-8 text-xs text-center text-gray-500">
            Don't have an account yet? <Link to="/pricing" className="text-acc-blue font-bold hover:underline">Sign up now.</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;