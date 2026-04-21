import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Home from './pages/Home';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => setPath(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (newPath: string) => {
    window.history.pushState({}, '', newPath);
    setPath(newPath);
    window.scrollTo(0, 0);
  };

  const renderComponent = () => {
    switch (path) {
      case '/privacy': 
        document.title = "Privacy Policy | [APP_NAME]";
        return <Privacy />;
      case '/terms': 
        document.title = "Terms of Service | [APP_NAME]";
        return <Terms />;
      case '/about': 
        document.title = "About Us | [APP_NAME]";
        return <About />;
      case '/contact': 
        document.title = "Contact Us | [APP_NAME]";
        return <Contact />;
      case '/':
      default: 
        document.title = "[APP_NAME] | [APP_SUBTITLE_PLACEHOLDER]";
        return <Home />;
    }
  };

  return (
    <>
      <div className="absolute top-6 left-6 z-50">
         {path !== '/' && (
            <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }} className="text-[var(--accent)] hover:text-white font-bold text-[14px] transition-colors flex items-center gap-2">
               &larr; Back to App
            </a>
         )}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={path}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="w-full"
        >
          {renderComponent()}
        </motion.div>
      </AnimatePresence>

      <footer className="mt-4 pt-6 border-t border-[var(--card-border)] w-full flex flex-col items-center justify-center text-center text-[12px] text-[var(--text-secondary)] py-8 max-w-3xl mx-auto px-4">
        <div className="flex flex-wrap gap-4 mb-4 font-semibold text-[13px] tracking-wide">
          <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }} className="hover:text-white transition-colors">Home</a>
          <a href="/about" onClick={(e) => { e.preventDefault(); navigate('/about'); }} className="hover:text-white transition-colors">About</a>
          <a href="/contact" onClick={(e) => { e.preventDefault(); navigate('/contact'); }} className="hover:text-white transition-colors">Contact</a>
          <a href="/terms" onClick={(e) => { e.preventDefault(); navigate('/terms'); }} className="hover:text-white transition-colors">Terms of Service</a>
          <a href="/privacy" onClick={(e) => { e.preventDefault(); navigate('/privacy'); }} className="hover:text-white transition-colors">Privacy Policy</a>
        </div>
        <div className="opacity-70">
          Produced and Copyright &copy; {new Date().getFullYear()} by the good folks at{' '}
          <a href="https://powershifter.com" target="_blank" rel="noreferrer" className="text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors font-semibold">
            POWER SHIFTER Digital
          </a>
        </div>
      </footer>
    </>
  );
}
