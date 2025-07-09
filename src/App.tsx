import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Gaming from './components/Gaming';
import Events from './components/Events';
import Gallery from './components/Gallery';
import Dining from './components/Dining';
import Contact from './components/Contact';
import Footer from './components/Footer';
import VacancyPage from './components/VacancyPage';
import PrivacyPolicy from './components/privacypolicy';
import Term from './components/term';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-black text-white">
              <Header />
              <Hero />
              <Gaming />
              <Dining />
              <Events />
              <About />
              <Gallery />
              <Contact />
              <Footer />
            </div>
          }
        />
         <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>} />
        <Route path="/careers" element={<VacancyPage />} />
          <Route path="/term" element={<Term/>} />
      </Routes>
    </Router>
  );
}

export default App;