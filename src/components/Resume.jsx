import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, Phone, Mail, UserCheck, Briefcase } from 'lucide-react';

const Resume = () => {
  const references = [
    {
      name: 'Dr. K D B H Gunawardana',
      title: 'Senior Lecturer Grade II',
      dept: 'Department of Physics & Electronics',
      inst: 'University of Kelaniya',
      email: 'binukah@kln.ac.lk',
      phone: '0753316395'
    },
    {
      name: 'Dr. C. Kadigamuwa',
      title: 'Senior Lecturer (Grade II)',
      dept: 'Department of Chemistry',
      inst: 'University of Kelaniya',
      email: 'cckadigamuwa@kln.ac.lk',
      phone: '+94 (0)76 981 1982'
    }
  ];

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
    <section id="resume" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest font-black text-brand-500 dark:text-brand-400 mb-2">Resume</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-50">
            Qualifications &amp; Documents
          </h3>
          <div className="h-1 w-20 bg-brand-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Column: Summary & References */}
          <div className="lg:col-span-5 flex flex-col gap-8 text-left">
            {/* Quick Summary Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5 }}
              className="p-6 sm:p-8 rounded-3xl glass border border-slate-200/50 dark:border-slate-800 shadow-sm"
            >
              <h4 className="text-xl font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2 mb-4">
                <Briefcase size={20} className="text-brand-500" /> Career Goal
              </h4>
              <p className="text-slate-650 dark:text-slate-350 text-sm leading-relaxed">
                Seeking a Software Engineering Internship to apply technical knowledge, enhance practical software development skills, and actively contribute to real-world production projects.
              </p>
            </motion.div>

            {/* References Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 sm:p-8 rounded-3xl glass border border-slate-200/50 dark:border-slate-800 shadow-sm flex-1"
            >
              <h4 className="text-xl font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2 mb-6">
                <UserCheck size={20} className="text-brand-500" /> Academic References
              </h4>
              
              <div className="space-y-6">
                {references.map((ref, idx) => (
                  <div key={idx} className="space-y-2 text-sm">
                    <h5 className="font-extrabold text-slate-800 dark:text-slate-200 text-sm">
                      {ref.name}
                    </h5>
                    <p className="text-xs text-slate-500 dark:text-slate-400 -mt-1 font-semibold">
                      {ref.title} &bull; {ref.dept} <br />
                      <span className="text-slate-450">{ref.inst}</span>
                    </p>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-slate-500 dark:text-slate-400 text-xs pt-1">
                      <a href={`mailto:${ref.email}`} className="flex items-center gap-1 hover:text-brand-500 dark:hover:text-brand-400 transition-colors">
                        <Mail size={12} /> {ref.email}
                      </a>
                      <a href={`tel:${ref.phone}`} className="flex items-center gap-1 hover:text-brand-500 dark:hover:text-brand-400 transition-colors">
                        <Phone size={12} /> {ref.phone}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: PDF Viewer Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col items-center gap-4 text-left"
          >
            {/* Embedded PDF Viewer Card */}
            <div className="w-full flex-1 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col h-[520px] bg-slate-100 dark:bg-slate-900/40 relative group">
              {/* Toolbar */}
              <div className="px-5 py-3.5 bg-slate-50 dark:bg-slate-900 border-b border-slate-200/50 dark:border-slate-800 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                  <FileText size={14} /> Thusantha_Lakshitha.pdf
                </span>
                
                <button
                  onClick={handleDownload}
                  className="px-3 py-1.5 rounded-lg bg-brand-500 hover:bg-brand-600 text-white font-bold text-xs transition-colors flex items-center gap-1.5 shadow-sm"
                >
                  <Download size={12} /> Download
                </button>
              </div>

              {/* PDF frame container */}
              <div className="w-full flex-1 relative bg-slate-200 dark:bg-slate-900">
                {/* Fallback for Mobile Device rendering */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-0">
                  <FileText size={48} className="text-slate-400 dark:text-slate-600 mb-3" />
                  <h5 className="font-bold text-slate-700 dark:text-slate-300">Document Reader Fallback</h5>
                  <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xs mt-1.5">
                    If the preview doesn't load, you can click download above or read the summarized sections in the details columns.
                  </p>
                </div>
                
                {/* Interactive Viewer Object */}
                <object
                  data="/Thusantha_Lakshitha.pdf"
                  type="application/pdf"
                  className="w-full h-full relative z-10 border-0"
                >
                  <iframe
                    src={`/Thusantha_Lakshitha.pdf#toolbar=0`}
                    className="w-full h-full border-0"
                    title="Thusantha Lakshitha Resume"
                  />
                </object>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
