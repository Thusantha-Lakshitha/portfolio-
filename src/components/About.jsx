import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, Award, Star, Terminal, Code2 } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <BookOpen size={18} className="text-brand-500" />, value: 'BSc. (UG)', label: 'Physical Science' },
    { icon: <Calendar size={18} className="text-brand-500" />, value: '2023 - 2026', label: 'Academic Period' },
    { icon: <Award size={18} className="text-brand-500" />, value: '4+', label: 'Certifications' },
  ];

  const highlights = [
    'Object-Oriented Programming (OOP) & Design Patterns',
    'Database Management & Optimization (SQL, MongoDB)',
    'Responsive Full-Stack Web Development (MERN, Spring Boot)',
    'Android Mobile Application Development (Java, Kotlin)',
    'Layered Software Architecture & Modularity',
    'Version Control & Collaboration (Git/GitHub)'
  ];

  return (
    <section id="about" className="py-20 bg-slate-50/50 dark:bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest font-black text-brand-500 dark:text-brand-400 mb-2">About Me</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-50">
            Passionate About Technology &amp; Solving Complex Problems
          </h3>
          <div className="h-1 w-20 bg-brand-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Code Editor Mockup Window */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 hidden lg:block"
          >
            <div className="relative group text-left">
              {/* Glow backing */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-500 to-purple-500 rounded-2xl blur opacity-25" />
              
              {/* Window Card */}
              <div className="relative w-full rounded-2xl bg-[#0d1117] border border-slate-800 shadow-xl overflow-hidden font-mono text-xs text-slate-300">
                {/* Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-slate-800">
                  <div className="flex gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                  </div>
                  <span className="text-slate-500 text-2xs flex items-center gap-1">
                    <Terminal size={10} /> developer.json
                  </span>
                  <div className="w-6" />
                </div>
                
                {/* Code Panel */}
                <div className="p-5 space-y-2.5 overflow-x-auto">
                  <div>
                    <span className="text-pink-500">"skills"</span>: &#123;
                  </div>
                  <div className="pl-4">
                    <span className="text-pink-500">"frontend"</span>: [<span className="text-green-300">"React.js"</span>, <span className="text-green-300">"HTML5/CSS3"</span>, <span className="text-green-300">"Tailwind"</span>],
                  </div>
                  <div className="pl-4">
                    <span className="text-pink-500">"backend"</span>: [<span className="text-green-300">"Node.js"</span>, <span className="text-green-300">"Spring Boot"</span>, <span className="text-green-300">"Express"</span>],
                  </div>
                  <div className="pl-4">
                    <span className="text-pink-500">"databases"</span>: [<span className="text-green-300">"MySQL"</span>, <span className="text-green-300">"MongoDB"</span>],
                  </div>
                  <div className="pl-4">
                    <span className="text-pink-500">"languages"</span>: [<span className="text-green-300">"Java"</span>, <span className="text-green-300">"JavaScript"</span>, <span className="text-green-300">"C#"</span>, <span className="text-green-300">"C"</span>]
                  </div>
                  <div>&#125;,</div>
                  <div>
                    <span className="text-pink-500">"attributes"</span>: [
                  </div>
                  <div className="pl-4 text-purple-400">
                    "Analytical Thinker"<span className="text-slate-300">,</span>
                  </div>
                  <div className="pl-4 text-purple-400">
                    "Quick Learner"<span className="text-slate-300">,</span>
                  </div>
                  <div className="pl-4 text-purple-400">
                    "Team Leader"
                  </div>
                  <div>]</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Bio and Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <h4 className="text-2xl font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
              <Star size={22} className="text-brand-500" /> Professional Summary
            </h4>
            
            <p className="text-slate-650 dark:text-slate-350 leading-relaxed text-sm sm:text-base">
              I am a highly motivated Physical Science undergraduate from the **University of Kelaniya** (having completed final year examinations) with a strong foundation in **Computer Science, Pure Mathematics, and Physics**.
            </p>
            
            <p className="text-slate-650 dark:text-slate-350 leading-relaxed text-sm sm:text-base">
              My mathematical and physics background has trained me to approach logical problems with structured, analytical, and optimized methods. I apply these methodologies to build efficient, scalable, and modular software solutions.
            </p>

            {/* Core Competencies Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-650 dark:text-slate-300 font-semibold">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex gap-2 items-center">
                  <div className="p-1 rounded bg-brand-50 dark:bg-brand-950/45 text-brand-500 flex-shrink-0">
                    <Code2 size={12} />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-100 dark:border-slate-850">
              {stats.map((stat, i) => (
                <div key={i} className="p-4 rounded-2xl glass border border-slate-100 dark:border-slate-800/80 shadow-sm flex flex-col items-center text-center">
                  <div className="p-2 bg-brand-50 dark:bg-brand-950/30 rounded-xl mb-3 text-brand-500">
                    {stat.icon}
                  </div>
                  <span className="text-lg sm:text-xl font-black text-slate-800 dark:text-slate-50">{stat.value}</span>
                  <span className="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5 font-bold uppercase tracking-wider">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
