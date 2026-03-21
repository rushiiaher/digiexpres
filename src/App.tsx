import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import ChatBot from './components/common/chatbot';
import AnimatedRoutes from './AnimatedRoutes';

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router>
          <ScrollToTop />
          <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
            <Header />
            <main className="flex-grow flex flex-col relative w-full overflow-hidden">
              <AnimatedRoutes />
            </main>
            <Footer />
            <ChatBot />
          </div>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;