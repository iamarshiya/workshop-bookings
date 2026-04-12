import React, { useState, useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Navbar, Footer } from './components/layout/Shell';
import { LandingPage } from './pages/Home';
import { WorkshopListingPage } from './pages/Workshops';
import { WorkshopDetailPage } from './pages/WorkshopDetail';
import { StudentDashboard } from './pages/Dashboard';
import { AdminDashboard } from './pages/Admin';
import { LoginPage, SignupPage, ForgotPasswordPage } from './pages/Auth';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  // Sync state with browser navigation
  useEffect(() => {
    const handlePopState = () => setCurrentPath(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    // Basic Routing Logic
    if (currentPath === '/') return <LandingPage onNavigate={navigate} />;
    if (currentPath === '/workshops') return <WorkshopListingPage onNavigate={navigate} />;
    if (currentPath.startsWith('/workshop/')) {
      const id = currentPath.split('/')[2];
      return <WorkshopDetailPage id={id} onNavigate={navigate} />;
    }
    if (currentPath === '/dashboard') return <StudentDashboard onNavigate={navigate} />;
    if (currentPath === '/admin') return <AdminDashboard onNavigate={navigate} />;
    if (currentPath === '/login') return <LoginPage onNavigate={navigate} />;
    if (currentPath === '/signup') return <SignupPage onNavigate={navigate} />;
    if (currentPath === '/forgot-password') return <ForgotPasswordPage onNavigate={navigate} />;
    
    return <LandingPage onNavigate={navigate} />;
  };

  // Check if we are on an Auth page to hide Navbar/Footer
  const isAuthPage = ['/login', '/signup', '/forgot-password'].includes(currentPath);

  return (
    <HelmetProvider>
      <div className="flex flex-col min-h-screen">
        <Helmet>
          <title>FOSSEE Portal | Premium Workshop Platform</title>
          <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        </Helmet>

        {!isAuthPage && <Navbar onNavigate={navigate} currentPath={currentPath} />}
        
        <main className="flex-grow">
          {renderPage()}
        </main>

        {!isAuthPage && <Footer onNavigate={navigate} />}
      </div>
    </HelmetProvider>
  );
}

export default App;
