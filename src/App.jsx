import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Team from './components/Team';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Consultation from './components/Consultation';
import Footer from './components/Footer';
import WebVapt from './pages/WebVapt';
import MobilePentest from './pages/MobilePentest';
import ApiPentest from './pages/ApiPentest';
import NetworkPentest from './pages/NetworkPentest';
import IotPentest from './pages/IotPentest';
import Awareness from './pages/Awareness';
import InitRecon from './pages/InitRecon';
import EndpointCrawler from './pages/EndpointCrawler';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Services />
              <Team />
              <Achievements />
              <Consultation />
              <Contact />
              <Footer />
            </>
          } />
          <Route path="/webvapt" element={<WebVapt />} />
          <Route path="/mobile" element={<MobilePentest />} />
          <Route path="/api" element={<ApiPentest />} />
          <Route path="/network" element={<NetworkPentest />} />
          <Route path="/iot" element={<IotPentest />} />
          <Route path="/awareness" element={<Awareness />} />
          <Route path="/init-recon" element={<InitRecon />} />
          <Route path="/init-recon/endpoint-crawler" element={<EndpointCrawler />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;