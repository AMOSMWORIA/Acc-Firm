import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import GeminiAssistant from './components/GeminiAssistant';

// Page Imports
import LandingPage from './pages/LandingPage';
import PricingPage from './pages/PricingPage';
import FeaturesPage from './pages/FeaturesPage';
import AdvisorsPage from './pages/AdvisorsPage';
import BlogPage from './pages/BlogPage';
import SignInPage from './pages/SignInPage';

// Resource Sub-pages
import ResourcesPage from './pages/ResourcesPage';
import AboutPage from './pages/AboutPage';
import CareersPage from './pages/CareersPage';
import AffiliatePage from './pages/AffiliatePage';
import PressPage from './pages/PressPage';

// Scroll handling with hash support
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there is a hash, scroll to the element
    if (hash) {
      // Small timeout to ensure DOM is ready
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Otherwise scroll to top
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/signin" element={<SignInPage />} />
        <Route path="*" element={
          <Layout>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/features" element={<FeaturesPage />} />
              <Route path="/advisors" element={<AdvisorsPage />} />
              <Route path="/blog" element={<BlogPage />} />
              
              {/* Resources Section */}
              <Route path="/resources" element={<ResourcesPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/affiliate" element={<AffiliatePage />} />
              <Route path="/press" element={<PressPage />} />
            </Routes>
            <GeminiAssistant />
          </Layout>
        } />
      </Routes>
    </Router>
  );
};

export default App;