import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import AISolutions from './pages/AISolutions';
import CaseStudies from './pages/CaseStudies';
import CaseStudyDetail from './pages/CaseStudyDetails';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import PageTransition from './components/common/PageTransition';

type PageProps = {
    element: React.ReactNode;
    bgColor?: string;
};

function TransitionWrapper({ element, bgColor }: PageProps) {
    return <PageTransition bgColor={bgColor}>{element}</PageTransition>;
}

export default function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<TransitionWrapper element={<Home />} bgColor="#0b1f3a" />} />
                <Route path="/about" element={<TransitionWrapper element={<About />} bgColor="#0b1f3a" />} />
                <Route path="/services" element={<TransitionWrapper element={<Services />} bgColor="#0b1f3a" />} />
                <Route path="/ai-solutions" element={<TransitionWrapper element={<AISolutions />} bgColor="#0b1f3a" />} />
                <Route path="/case-studies" element={<TransitionWrapper element={<CaseStudies />} bgColor="#0b1f3a" />} />
                <Route path="/case-studies/:id" element={<TransitionWrapper element={<CaseStudyDetail />} bgColor="#0b1f3a" />} />
                <Route path="/blog" element={<TransitionWrapper element={<Blog />} bgColor="#0b1f3a" />} />
                <Route path="/blog/:id" element={<TransitionWrapper element={<BlogPost />} bgColor="#0b1f3a" />} />
                <Route path="/contact" element={<TransitionWrapper element={<Contact />} bgColor="#0b1f3a" />} />
                <Route path="/admin/login" element={<TransitionWrapper element={<AdminLogin />} bgColor="#0b1f3a" />} />
                <Route path="/admin/dashboard" element={<TransitionWrapper element={<AdminDashboard />} bgColor="#0b1f3a" />} />
            </Routes>
        </AnimatePresence>
    );
}
