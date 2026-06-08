import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const titles = ["Software Engineer", "Full-Stack Developer", "MERN Stack Specialist", "Physical Science University of Kelaniya"];
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentTitle = titles[titleIndex];
    const speed = isDeleting ? 40 : 85;

    if (!isDeleting && displayText === currentTitle) {
      // Pause at the end of typing
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
    } else {
      timer = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentTitle.substring(0, displayText.length - 1)
            : currentTitle.substring(0, displayText.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex]);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Decorative Blur Spheres */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 bg-brand-500/10 rounded-full blur-3xl dark:bg-brand-500/15 animate-float" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl dark:bg-purple-500/10 animate-float-delayed" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 space-y-6 text-left"
        >
          
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 dark:text-slate-50 leading-tight">
            Hi, I'm <span className="text-gradient">Thusantha Lakshitha</span>
          </h1>

          <h2 className="text-xl sm:text-2xl font-bold text-slate-700 dark:text-slate-350 h-8 flex items-center">
            I build &amp; design{' '}
            <span className="text-brand-500 dark:text-brand-400 ml-2 font-mono border-r-2 border-brand-500 dark:border-brand-400 pr-1 animate-pulse">
              {displayText}
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-350 max-w-xl leading-relaxed">
            A highly motivated Physical Science undergraduate from the University of Kelaniya, combining a strong foundation in Computer Science, Pure Mathematics, and Physics with full-stack web and mobile application expertise.
          </p>

          {/* Social Links */}
          <div className="flex gap-4 items-center">
            <a 
              href="https://github.com/Thusantha-Lakshitha" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-brand-500 dark:hover:text-brand-400 hover:border-brand-500/50 dark:hover:border-brand-400/50 hover:bg-slate-100 dark:hover:bg-slate-900 transition-all duration-200 shadow-sm"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/thusantha-lakshitha-77a15427b/"
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-brand-500 dark:hover:text-brand-400 hover:border-brand-500/50 dark:hover:border-brand-400/50 hover:bg-slate-100 dark:hover:bg-slate-900 transition-all duration-200 shadow-sm"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:thusanthabandara41@gmail.com"
              className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-brand-500 dark:hover:text-brand-400 hover:border-brand-500/50 dark:hover:border-brand-400/50 hover:bg-slate-100 dark:hover:bg-slate-900 transition-all duration-200 shadow-sm"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button
              onClick={() => handleScrollTo('projects')}
              className="px-6 py-3.5 rounded-xl bg-brand-500 hover:bg-brand-600 dark:bg-brand-600 dark:hover:bg-brand-700 text-white font-semibold transition-all duration-250 shadow-md shadow-brand-500/10 dark:shadow-brand-900/20 hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-2 group"
            >
              Explore Projects
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => handleScrollTo('contact')}
              className="px-6 py-3.5 rounded-xl glass hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-800 dark:text-slate-200 font-semibold border border-slate-200 dark:border-slate-800 transition-all duration-250 hover:shadow-md hover:-translate-y-0.5"
            >
              Contact Me
            </button>
          </div>
        </motion.div>

        {/* Right Column: Visual Photo & Tech Badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center items-center relative"
        >
          <div className="relative group w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
            {/* Glow background backing */}
            <div className="absolute -inset-2 bg-gradient-to-r from-brand-500 to-purple-500 rounded-3xl blur opacity-30 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
            
            {/* Profile avatar card container */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden glass border border-slate-200/50 dark:border-slate-800 shadow-2xl flex items-center justify-center p-4">
              <img 
                src="/profile.jpg" 
                alt="Thusantha Lakshitha Profile" 
                className="w-full h-full object-cover rounded-2xl bg-slate-100 dark:bg-slate-900"
              />
              
              {/* Floating tech badge 1 */}
              <div className="absolute -top-4 -right-4 p-3 rounded-2xl glass border border-slate-200 dark:border-slate-800 shadow-lg flex items-center justify-center text-brand-500 animate-float">
                <Code2 size={24} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
