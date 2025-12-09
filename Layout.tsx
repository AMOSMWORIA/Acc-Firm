import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Features', path: '/features' },
    { name: 'Advisors', path: '/advisors' },
    { name: 'Plans & Pricing', path: '/pricing' },
    { name: 'Blog', path: '/blog' },
  ];

  const handleSupportClick = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 font-sans">
      {/* Sticky Header */}
      <nav className="sticky top-0 z-40 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center gap-2 group">
                <div className="w-8 h-8 bg-acc-blue rounded-tr-xl rounded-bl-xl group-hover:rotate-12 transition-transform"></div>
                <span className="font-bold text-2xl text-acc-dark tracking-tight">Acc Firm</span>
              </Link>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-8 items-center">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  className={`text-sm font-medium hover:text-acc-blue transition-colors ${
                    location.pathname === link.path ? 'text-acc-blue' : 'text-gray-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              {/* Resources Dropdown */}
              <div className="relative group">
                <button 
                  className={`flex items-center gap-1 text-sm font-medium hover:text-acc-blue transition-colors ${
                    ['/about', '/careers', '/press', '/affiliate'].includes(location.pathname) ? 'text-acc-blue' : 'text-gray-600'
                  }`}
                >
                  Resources <ChevronDown size={14} />
                </button>
                <div className="absolute left-0 mt-0 pt-4 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden py-2">
                    <Link to="/about" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-acc-blue">About Us</Link>
                    <Link to="/careers" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-acc-blue">Careers</Link>
                    <Link to="/press" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-acc-blue">Press</Link>
                    <Link to="/affiliate" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-acc-blue">Become an Affiliate</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Link to="/signin" className="text-sm font-semibold text-acc-blue hover:underline">
                Sign in
              </Link>
              <Link to="/pricing" className="px-5 py-2.5 rounded-full bg-acc-accent text-white font-bold text-sm hover:opacity-90 transition-opacity">
                Create free account
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-600">
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl z-50">
            <div className="pt-2 pb-4 space-y-1 px-4 h-[80vh] overflow-y-auto">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3 text-base font-medium text-gray-700 hover:text-acc-blue hover:bg-gray-50 px-2 rounded-md"
                >
                  {link.name}
                </Link>
              ))}
              <div className="border-t border-gray-100 my-2 pt-2">
                 <div className="px-2 py-2 text-xs font-bold text-gray-400 uppercase tracking-wider">Resources</div>
                 <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-base font-medium text-gray-700 hover:text-acc-blue px-2">About Us</Link>
                 <Link to="/careers" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-base font-medium text-gray-700 hover:text-acc-blue px-2">Careers</Link>
                 <Link to="/press" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-base font-medium text-gray-700 hover:text-acc-blue px-2">Press</Link>
                 <Link to="/affiliate" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-base font-medium text-gray-700 hover:text-acc-blue px-2">Affiliates</Link>
              </div>

              <div className="pt-4 border-t border-gray-100 mt-2 flex flex-col space-y-3 pb-8">
                <Link to="/signin" onClick={() => setIsMobileMenuOpen(false)} className="w-full text-center py-3 font-semibold text-acc-blue">
                  Sign in
                </Link>
                <Link to="/pricing" onClick={() => setIsMobileMenuOpen(false)} className="w-full text-center py-3 rounded-full bg-acc-accent text-white font-bold">
                  Create free account
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-acc-dark text-white pt-16 pb-8 relative overflow-hidden">
        {/* Footer Doodle */}
        <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
           <svg width="300" height="300" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 10 C 50 100, 150 0, 190 90" stroke="white" strokeWidth="2" fill="none"/>
              <circle cx="150" cy="150" r="20" stroke="white" strokeWidth="2"/>
              <rect x="20" y="120" width="40" height="40" stroke="white" strokeWidth="2"/>
           </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
            <div className="col-span-2 lg:col-span-1">
               <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-6 bg-white rounded-tr-lg rounded-bl-lg"></div>
                <span className="font-bold text-xl tracking-tight">Acc Firm</span>
              </div>
              <div className="flex space-x-4 opacity-70">
                {/* Social placeholders */}
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 cursor-pointer">
                  <div className="w-4 h-4 border-2 border-white rounded-sm"></div>
                </div>
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 cursor-pointer">
                  <div className="w-4 h-4 border-2 border-white rounded-full"></div>
                </div>
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 cursor-pointer">
                  <div className="w-0 h-0 border-l-[6px] border-l-transparent border-t-[8px] border-t-white border-r-[6px] border-r-transparent"></div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-sm tracking-wider uppercase opacity-60">Features</h4>
              <ul className="space-y-3 text-sm opacity-80">
                <li><Link to="/features#invoicing" className="hover:text-white hover:opacity-100 hover:underline decoration-acc-blue underline-offset-4">Invoicing</Link></li>
                <li><Link to="/features#accounting" className="hover:text-white hover:opacity-100 hover:underline decoration-acc-blue underline-offset-4">Accounting</Link></li>
                <li><Link to="/features#payments" className="hover:text-white hover:opacity-100 hover:underline decoration-acc-blue underline-offset-4">Payments</Link></li>
                <li><Link to="/features#payroll" className="hover:text-white hover:opacity-100 hover:underline decoration-acc-blue underline-offset-4">Payroll</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-sm tracking-wider uppercase opacity-60">Company</h4>
              <ul className="space-y-3 text-sm opacity-80">
                <li><Link to="/about" className="hover:text-white hover:opacity-100 hover:underline decoration-acc-blue underline-offset-4">About Us</Link></li>
                <li><Link to="/advisors" className="hover:text-white hover:opacity-100 hover:underline decoration-acc-blue underline-offset-4">Advisors</Link></li>
                <li><Link to="/careers" className="hover:text-white hover:opacity-100 hover:underline decoration-acc-blue underline-offset-4">Careers</Link></li>
                <li><Link to="/press" className="hover:text-white hover:opacity-100 hover:underline decoration-acc-blue underline-offset-4">Press</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-sm tracking-wider uppercase opacity-60">Support</h4>
              <ul className="space-y-3 text-sm opacity-80">
                <li><a href="#" onClick={handleSupportClick} className="hover:text-white hover:opacity-100 cursor-default">Help Center</a></li>
                <li><a href="#" onClick={handleSupportClick} className="hover:text-white hover:opacity-100 cursor-default">Community</a></li>
                <li><a href="#" onClick={handleSupportClick} className="hover:text-white hover:opacity-100 cursor-default">API</a></li>
                <li><a href="#" onClick={handleSupportClick} className="hover:text-white hover:opacity-100 cursor-default">Status</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs opacity-50">
            <p>&copy; 2025 Acc Firm Inc. All Rights Reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" onClick={handleSupportClick} className="hover:opacity-100 cursor-default">Privacy Policy</a>
              <a href="#" onClick={handleSupportClick} className="hover:opacity-100 cursor-default">Terms of Service</a>
              <a href="#" onClick={handleSupportClick} className="hover:opacity-100 cursor-default">Security</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;