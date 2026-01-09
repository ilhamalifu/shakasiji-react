import { useState, useEffect } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Careers from './pages/Careers';
import BlogPage from './pages/BlogPage';
import ComingSoon from './pages/ComingSoon';
import Login from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';
import BlogList from './pages/admin/BlogList';
import BlogEditor from './pages/admin/BlogEditor';

function AppRoutes() {
  const [currentPage, setCurrentPage] = useState('home');
  const [postId, setPostId] = useState(null);
  const { isAuthenticated, isLoading } = useAuth();

  useEffect(() => {
    const handleNavigation = () => {
      const path = window.location.pathname;

      // Admin routes
      if (path.startsWith('/admin')) {
        if (path === '/admin' || path === '/admin/') {
          setCurrentPage('admin-dashboard');
        } else if (path === '/admin/login') {
          setCurrentPage('admin-login');
        } else if (path === '/admin/posts') {
          setCurrentPage('admin-posts');
        } else if (path.match(/^\/admin\/posts\/.+/)) {
          const id = path.split('/').pop();
          setPostId(id);
          setCurrentPage('admin-editor');
        } else if (path === '/admin/settings') {
          setCurrentPage('admin-settings');
        } else {
          setCurrentPage('admin-dashboard');
        }
      }
      // Public routes
      else if (path === '/portfolio' || path === '/portfolio/') {
        setCurrentPage('portfolio');
      } else if (path === '/about' || path === '/about/') {
        setCurrentPage('about');
      } else if (path === '/faq' || path === '/faq/') {
        setCurrentPage('faq');
      } else if (path === '/careers' || path === '/careers/') {
        setCurrentPage('careers');
      } else if (path === '/blog' || path === '/blog/') {
        setCurrentPage('blog');
      } else if (path === '/coming-soon' || path === '/coming-soon/') {
        setCurrentPage('coming-soon');
      } else {
        setCurrentPage('home');
      }
    };

    // Check initial route
    handleNavigation();

    // Listen for navigation events
    window.addEventListener('popstate', handleNavigation);
    return () => window.removeEventListener('popstate', handleNavigation);
  }, []);

  // Handle link clicks for SPA navigation
  useEffect(() => {
    const handleClick = (e) => {
      const target = e.target.closest('a[href]');
      if (target && target.href) {
        const url = new URL(target.href);
        const href = target.getAttribute('href');

        // Handle hash links
        if (href && href.startsWith('#')) {
          if (currentPage !== 'home' && !currentPage.startsWith('admin')) {
            e.preventDefault();
            window.history.pushState({}, '', '/');
            setCurrentPage('home');
            setTimeout(() => {
              const hash = href.substring(1);
              const element = document.getElementById(hash);
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }, 100);
          }
          return;
        }

        // Handle combined path and hash (like /#contact)
        if (href && href.startsWith('/#')) {
          e.preventDefault();
          if (currentPage !== 'home') {
            window.history.pushState({}, '', '/');
            setCurrentPage('home');
          }
          setTimeout(() => {
            const hash = href.substring(2);
            const element = document.getElementById(hash);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }, currentPage !== 'home' ? 100 : 0);
          return;
        }

        // Handle internal navigation
        if (url.origin === window.location.origin) {
          e.preventDefault();
          window.history.pushState({}, '', url.pathname + url.hash);
          window.dispatchEvent(new PopStateEvent('popstate'));
          window.scrollTo(0, 0);
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [currentPage]);

  // Show loading while checking auth
  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-indigo-600 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  // Admin routes - require authentication
  if (currentPage.startsWith('admin')) {
    // Login page doesn't require auth
    if (currentPage === 'admin-login') {
      if (isAuthenticated) {
        // Redirect to dashboard if already logged in
        window.history.replaceState({}, '', '/admin');
        return <Dashboard />;
      }
      return <Login />;
    }

    // Other admin pages require auth
    if (!isAuthenticated) {
      window.history.replaceState({}, '', '/admin/login');
      return <Login />;
    }

    switch (currentPage) {
      case 'admin-dashboard':
        return <Dashboard />;
      case 'admin-posts':
        return <BlogList />;
      case 'admin-editor':
        return <BlogEditor postId={postId} />;
      case 'admin-settings':
        return <Dashboard />; // Placeholder for now
      default:
        return <Dashboard />;
    }
  }

  // Public routes
  switch (currentPage) {
    case 'portfolio':
      return <Portfolio />;
    case 'about':
      return <About />;
    case 'faq':
      return <FAQ />;
    case 'careers':
      return <Careers />;
    case 'blog':
      return <BlogPage />;
    case 'coming-soon':
      return <ComingSoon />;
    case 'home':
    default:
      return <Home />;
  }
}

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;
