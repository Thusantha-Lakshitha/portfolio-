import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Menu, X, Terminal } from 'lucide-react';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Certificates', href: '#certifications', id: 'certifications' },
    { label: 'Leadership', href: '#activities', id: 'activities' },
    { label: 'Resume', href: '#resume', id: 'resume' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section
      const scrollPosition = window.scrollY + 100;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
      setActiveSection(targetId);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'glass-nav py-3 shadow-lg shadow-slate-900/5 dark:shadow-black/20' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <a href="#home" onClick={(e) => handleClick(e, '#home')} className="flex items-center gap-2 font-display text-2xl font-bold tracking-tight">
              <span className="p-2 bg-brand-500 rounded-xl text-white flex items-center justify-center">
                <Terminal size={20} />
              </span>
              <span className="font-extrabold text-slate-800 dark:text-slate-100">
                Thusantha <span className="text-brand-500">Lakshitha</span>
              </span>
            </a>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-baseline space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-250 ${
                    activeSection === item.id
                      ? 'text-brand-500 dark:text-brand-400 bg-brand-50/60 dark:bg-brand-950/30'
                      : 'text-slate-600 dark:text-slate-350 hover:text-brand-500 dark:hover:text-brand-400 hover:bg-slate-100/50 dark:hover:bg-slate-900/30'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Dark/Light mode toggle */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors text-slate-600 dark:text-slate-300"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            {/* Dark/Light mode toggle for mobile */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors text-slate-600 dark:text-slate-300"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 glass shadow-2xl transition-all duration-300 transform origin-top ${
          isOpen ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-95 invisible pointer-events-none'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all duration-200 ${
                activeSection === item.id
                  ? 'text-brand-500 dark:text-brand-400 bg-brand-50 dark:bg-brand-950/40'
                  : 'text-slate-700 dark:text-slate-300 hover:text-brand-500 dark:hover:text-brand-400 hover:bg-slate-100 dark:hover:bg-slate-900'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
