import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle, Clock, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certs = [
    {
      title: 'Web Design',
      issuer: 'University of Moratuwa',
      status: 'Ongoing',
      id: 'moratuwa-web',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'Web Design',
      issuer: 'University of Kelaniya',
      status: 'Completed',
      id: 'kelaniya-web',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'JavaScript Development',
      issuer: 'Udemy Academic',
      status: 'Completed',
      id: 'udemy-js',
      color: 'from-amber-500 to-orange-500'
    },
    {
      title: 'Python Programming',
      issuer: 'Udemy Academic',
      status: 'Ongoing',
      id: 'udemy-python',
      color: 'from-emerald-500 to-teal-500'
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-slate-50/50 dark:bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest font-black text-brand-500 dark:text-brand-400 mb-2">Credentials</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-50">
            Certifications &amp; Courses
          </h3>
          <div className="h-1 w-20 bg-brand-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {certs.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative rounded-3xl glass border border-slate-200/50 dark:border-slate-800/80 shadow-xs hover:shadow-lg hover:border-brand-500/20 dark:hover:border-brand-500/20 transition-all duration-300 p-6 flex flex-col justify-between overflow-hidden"
            >
              {/* Card visual accent */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${cert.color}`} />

              <div className="space-y-4 pt-2">
                {/* Header Icon */}
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-brand-50 dark:bg-brand-950/30 rounded-xl text-brand-500">
                    <Award size={22} />
                  </div>
                  
                  {/* Status badge */}
                  <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-4xs font-extrabold tracking-wide uppercase ${
                    cert.status === 'Completed'
                      ? 'bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-450 border border-emerald-100 dark:border-emerald-900/30'
                      : 'bg-yellow-50 dark:bg-yellow-950/20 text-yellow-600 dark:text-yellow-450 border border-yellow-100 dark:border-yellow-900/30'
                  }`}>
                    {cert.status === 'Completed' ? <CheckCircle size={10} /> : <Clock size={10} />}
                    {cert.status}
                  </span>
                </div>

                <div className="space-y-1">
                  <h4 className="text-lg font-extrabold text-slate-800 dark:text-slate-100 group-hover:text-brand-500 dark:group-hover:text-brand-400 transition-colors">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-slate-400 dark:text-slate-450 font-bold uppercase tracking-wider">
                    {cert.issuer}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-500 dark:text-slate-450">
                <span className="font-semibold">Verification</span>
                <span className="flex items-center gap-1 text-brand-500 dark:text-brand-400 font-extrabold group-hover:underline cursor-pointer">
                  View <ExternalLink size={12} />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
