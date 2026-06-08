import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, MapPin } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: 'Bachelor of Science in Physical Science',
      institution: 'University of Kelaniya',
      period: '2023 – 2026',
      location: 'Kelaniya, Sri Lanka',
      details: 'Completed final year examinations. Specialized in Computer Science, Pure Mathematics, and Physics.',
      subjects: [
        'Database Systems', 'Linear Algebra', 'Algorithms', 'Data Structures', 
        'Software Development Life Cycle (SDLC)', 'Web Development', 
        'Mobile Application Development', 'Full-Stack Development'
      ]
    },
    {
      degree: 'GCE Advanced Level – Physical Science Stream',
      institution: 'Mo/Siyambalanduwa National School',
      period: 'Secondary Education',
      location: 'Siyambalanduwa, Sri Lanka',
      details: 'Studied Physics, Chemistry, and Combined Mathematics.',
      subjects: []
    }
  ];

  return (
    <section id="education" className="py-20 relative overflow-hidden">
      {/* Background shape */}
      <div className="absolute right-0 top-1/3 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest font-black text-brand-500 dark:text-brand-400 mb-2">Education</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-50">
            Academic Foundation
          </h3>
          <div className="h-1 w-20 bg-brand-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative pl-6 sm:pl-10">
          {/* Vertical Timeline Line */}
          <div className="absolute left-0 top-2 bottom-2 w-0.5 bg-slate-200 dark:bg-slate-800" />

          <div className="space-y-12">
            {educationData.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="relative text-left"
              >
                {/* Timeline Node Icon */}
                <div className="absolute -left-6 sm:-left-10 transform -translate-x-1/2 p-2 rounded-xl bg-brand-500 text-white shadow-lg border-4 border-slate-50 dark:border-slate-950 flex items-center justify-center z-10">
                  <GraduationCap size={18} />
                </div>

                {/* Timeline Card */}
                <div className="p-6 sm:p-8 rounded-3xl glass border border-slate-200/50 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-brand-500/20 dark:hover:border-brand-500/20 transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h4 className="text-xl sm:text-2xl font-extrabold text-slate-800 dark:text-slate-50">
                        {edu.degree}
                      </h4>
                      <p className="text-base font-bold text-brand-600 dark:text-brand-400 mt-1 flex items-center gap-1.5">
                        {edu.institution}
                      </p>
                    </div>
                    <div className="flex flex-col sm:items-end gap-1">
                      <span className="inline-flex px-3 py-1.5 rounded-full text-xs font-bold bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-350 border border-slate-200/50 dark:border-slate-800/80">
                        {edu.period}
                      </span>
                      <span className="text-xs text-slate-400 flex items-center gap-1 mt-1 sm:justify-end">
                        <MapPin size={12} /> {edu.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-slate-600 dark:text-slate-350 mt-4 leading-relaxed">
                    {edu.details}
                  </p>

                  {/* Coursework subjects */}
                  {edu.subjects.length > 0 && (
                    <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800/80">
                      <h5 className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-350 mb-3 flex items-center gap-1.5">
                        <BookOpen size={14} className="text-brand-500" /> Focus Subject Areas:
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {edu.subjects.map((sub, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-3 py-1 rounded-lg bg-slate-100/55 dark:bg-slate-900/60 text-slate-600 dark:text-slate-350 text-xs font-semibold border border-slate-200/40 dark:border-slate-800/60"
                          >
                            {sub}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
