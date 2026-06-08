import React from 'react';
import { motion } from 'framer-motion';
import { Compass, ShieldCheck, Globe, Star } from 'lucide-react';

const Activities = () => {
  const activities = [
    {
      role: 'President',
      association: 'Astronomy & Space Science Association',
      institution: 'University of Kelaniya',
      color: 'bg-indigo-500/10 text-indigo-500 border-indigo-500/25',
      desc: 'Led astronomical observation projects, curated seminars, and coordinated annual celestial viewings for university students, managing executive committees and driving member engagement.'
    },
    {
      role: 'Assistant Coordinator',
      association: 'Mathematics Students\' Society (MSS)',
      institution: 'University of Kelaniya',
      color: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/25',
      desc: 'Coordinated student academic forums, mathematics Olympiad prep sessions, and managed public relations for university-wide mathematics challenges.'
    },
    {
      role: 'Committee Member',
      association: 'Physical Science Student Association',
      institution: 'University of Kelaniya',
      color: 'bg-amber-500/10 text-amber-500 border-amber-500/25',
      desc: 'Organized inter-departmental sports events, handled logistics for science exhibitions, and represented the undergraduate student body in faculty discussions.'
    }
  ];

  return (
    <section id="activities" className="py-20 relative overflow-hidden">
      {/* Decorative radial gradient */}
      <div className="absolute left-0 bottom-1/4 w-80 h-80 bg-brand-500/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest font-black text-brand-500 dark:text-brand-400 mb-2">Leadership</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-50">
            Extracurricular &amp; Activities
          </h3>
          <div className="h-1 w-20 bg-brand-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Activities List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {activities.map((act, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="group rounded-3xl glass border border-slate-200/50 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-brand-500/25 dark:hover:border-brand-500/25 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Visual Label */}
                <div className="flex justify-between items-start">
                  <span className={`inline-flex px-3 py-1 rounded-full text-3xs font-extrabold tracking-wide uppercase border ${act.color}`}>
                    {act.role}
                  </span>
                  <Compass className="text-slate-350 dark:text-slate-600 group-hover:rotate-45 transition-transform duration-300" size={20} />
                </div>

                <div className="space-y-2">
                  <h4 className="text-lg sm:text-xl font-extrabold text-slate-800 dark:text-slate-100 group-hover:text-brand-500 dark:group-hover:text-brand-400 transition-colors">
                    {act.association}
                  </h4>
                  <p className="text-xs text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider">
                    {act.institution}
                  </p>
                </div>

                <p className="text-sm text-slate-650 dark:text-slate-350 leading-relaxed pt-2">
                  {act.desc}
                </p>
              </div>

              {/* Card Footer Decor */}
              <div className="mt-8 flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-500 font-semibold pt-4 border-t border-slate-100 dark:border-slate-850">
                <Star size={12} className="text-brand-500" />
                <span>Executive Council</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
