import { useState, useEffect } from 'react';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    // Handle browser navigation (back/forward)
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === '/portfolio' || path === '/portfolio/') {
        setCurrentPage('portfolio');
      } else {
        setCurrentPage('home');
      }
    };

    // Check initial route
    const path = window.location.pathname;
    if (path === '/portfolio' || path === '/portfolio/') {
      setCurrentPage('portfolio');
    }

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Handle navigation
  useEffect(() => {
    const handleNavigation = (e) => {
      const target = e.target.closest('a[href]');
      if (target && target.href) {
        const url = new URL(target.href);
        const href = target.getAttribute('href');

        // Handle hash links (#services, #contact, etc.)
        if (href && href.startsWith('#')) {
          // If on portfolio page, navigate to home first
          if (currentPage === 'portfolio') {
            e.preventDefault();
            window.history.pushState({}, '', '/');
            setCurrentPage('home');
            // Wait for page to render, then scroll to hash
            setTimeout(() => {
              const hash = href.substring(1);
              const element = document.getElementById(hash);
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }, 100);
          }
          // If on home page, let default behavior handle it (smooth scroll)
          return;
        }

        // Handle full URL links
        if (url.pathname === '/portfolio' || url.pathname === '/portfolio/') {
          e.preventDefault();
          window.history.pushState({}, '', '/portfolio');
          setCurrentPage('portfolio');
          window.scrollTo(0, 0);
        } else if (url.pathname === '/' || url.pathname === '') {
          e.preventDefault();
          const hash = url.hash;
          window.history.pushState({}, '', hash ? `/${hash}` : '/');
          setCurrentPage('home');
          window.scrollTo(0, 0);
          // Scroll to hash if present
          if (hash) {
            setTimeout(() => {
              const element = document.getElementById(hash.substring(1));
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }, 100);
          }
        }
      }
    };

    document.addEventListener('click', handleNavigation);
    return () => document.removeEventListener('click', handleNavigation);
  }, [currentPage]);

  return (
    <>
      {currentPage === 'portfolio' ? <Portfolio /> : <Home />}
    </>
  );
}

export default App;
