
import React from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Articles from './pages/Articles';
import ArticleDetail from './pages/ArticleDetail';
import Team from './pages/Team';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <LanguageProvider>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Navigate to="/en" replace />} />
              <Route path="/:lang" element={<Home />} />
              <Route path="/:lang/services" element={<Services />} />
              <Route path="/:lang/articles" element={<Articles />} />
              <Route path="/:lang/articles/:slug" element={<ArticleDetail />} />
              <Route path="/:lang/team" element={<Team />} />
              <Route path="/:lang/contact" element={<Contact />} />
              <Route path="*" element={<Navigate to="/en" replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </Router>
  );
}

export default App;
