import React from 'react';
import { ChevronUp, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="py-12 border-t border-slate-200/50 dark:border-slate-800 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand/Credits */}
        <div className="text-center md:text-left space-y-1">
          <p className="text-sm font-bold text-slate-800 dark:text-slate-250">
            &copy; {currentYear} Thusantha Lakshitha. All rights reserved.
          </p>
          <p className="text-xs text-slate-400 dark:text-slate-500 font-semibold">
            Designed &amp; Developed with React, Tailwind CSS &amp; Vite.
          </p>
        </div>

        {/* Action Panel */}
        <div className="flex items-center gap-6">
          {/* Social icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Thusantha-Lakshitha"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300 transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/thusantha-lakshitha-77a15427b/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:thusanthabandara41@gmail.com"
              className="p-2 rounded-lg text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300 transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={handleScrollToTop}
            className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors text-slate-500 dark:text-slate-400"
            aria-label="Scroll to top"
          >
            <ChevronUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
