import React, { useState, useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Navbar, Footer } from './components/layout/Shell';
import { LandingPage } from './pages/Home';
import { WorkshopListingPage } from './pages/Workshops';
import { WorkshopDetailPage } from './pages/WorkshopDetail';
import { StudentDashboard } from './pages/Dashboard';
import { AdminDashboard } from './pages/Admin';
import { StatisticsPage } from './pages/Stats';
import { LoginPage, SignupPage, ForgotPasswordPage } from './pages/Auth';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [user, setUser] = useState(window.userData || null);
  const [workshops, setWorkshops] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handlePopState = () => setCurrentPath(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    fetch('/workshop/api/workshops/')
      .then(res => res.json())
      .then(data => {
        setWorkshops(data.workshops || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Fetch error:', err);
        setLoading(false);
      });
  }, []);

  const navigate = (path) => {
    if (path.startsWith('/workshop/login') || path.startsWith('/workshop/logout')) {
      return;
    }
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    if (loading) return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-pulse flex flex-col items-center">
           <div className="w-12 h-12 bg-accent rounded-full mb-4"></div>
           <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">Loading FOSSEE Portal</p>
        </div>
      </div>
    );

    if (currentPath === '/' || currentPath === '/workshop/') return <LandingPage onNavigate={navigate} workshops={workshops} />;
    
    if (currentPath === '/workshops' || currentPath === '/workshop/types/') 
      return <WorkshopListingPage onNavigate={navigate} workshops={workshops} />;
    
    if (currentPath.startsWith('/workshop/')) {
      const parts = currentPath.split('/');
      const id = parts[parts.length - 2] || parts[parts.length - 1]; // Handle trailing slash
      if (!isNaN(id)) {
        return <WorkshopDetailPage id={id} onNavigate={navigate} />;
      }
    }
    
    if (currentPath === '/dashboard' || currentPath === '/workshop/status_coordinator/' || currentPath === '/workshop/status_instructor/') 
      return <StudentDashboard onNavigate={navigate} user={user} />;
    
    if (currentPath === '/stats' || currentPath === '/statistics/public/') return <StatisticsPage />;

    if (currentPath === '/admin') return <AdminDashboard onNavigate={navigate} />;
    if (currentPath === '/login' || currentPath === '/workshop/login/') return <LoginPage onNavigate={navigate} />;
    if (currentPath === '/signup' || currentPath === '/workshop/register/') return <SignupPage onNavigate={navigate} />;
    if (currentPath === '/forgot-password') return <ForgotPasswordPage onNavigate={navigate} />;
    
    return <LandingPage onNavigate={navigate} workshops={workshops} />;
  };

  const isAuthPage = ['/login', '/signup', '/forgot-password', '/workshop/login/', '/workshop/register/'].includes(currentPath);

  return (
    <HelmetProvider>
      <div className="flex flex-col min-h-screen">
        <Helmet>
          <title>FOSSEE Portal | Premium Workshop Platform</title>
          <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        </Helmet>

        {!isAuthPage && <Navbar onNavigate={navigate} currentPath={currentPath} user={user} />}
        
        <main className="flex-grow">
          {renderPage()}
        </main>

        {!isAuthPage && <Footer onNavigate={navigate} />}
      </div>
    </HelmetProvider>
  );
}

export default App;
