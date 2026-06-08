import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Activities from './components/Activities';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Full Portfolio component containing all sections
const Portfolio = () => {
  const { theme } = useTheme();
  
  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'gradient-bg-dark bg-slate-950 text-slate-100' : 'gradient-bg-light bg-slate-50 text-slate-900'}`}>
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Certifications />
        <Activities />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

// Standalone Full-Page Resume Viewer Component
const StandaloneResume = () => {
  const { theme } = useTheme();

  const handleDownload = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/Thusantha_Lakshitha.pdf');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'Thusantha_Lakshitha.pdf');
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
      window.open('/Thusantha_Lakshitha.pdf', '_blank');
    }
  };

  return (
    <div className={`min-h-screen flex flex-col p-4 sm:p-6 md:p-8 ${theme === 'dark' ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      <div className="max-w-5xl mx-auto w-full flex-1 flex flex-col gap-4">
        <div className="flex justify-between items-center bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-slate-800 dark:text-slate-100">
              Thusantha <span className="text-brand-500">Lakshitha</span>
            </span>
            <span className="text-slate-400">|</span>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Resume Page</span>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="/"
              className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-bold transition-colors"
            >
              Back to Portfolio
            </a>
            <button
              onClick={handleDownload}
              className="px-4 py-2 rounded-xl bg-brand-500 hover:bg-brand-600 text-white text-xs font-bold transition-colors shadow-sm"
            >
              Download PDF
            </button>
          </div>
        </div>
        
        <div className="flex-1 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-lg overflow-hidden">
          <iframe
            src="/Thusantha_Lakshitha.pdf"
            className="w-full h-full border-0"
            title="Thusantha Lakshitha Resume Full Screen"
          />
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/resume" element={<StandaloneResume />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
