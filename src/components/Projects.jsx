import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ExternalLink, FolderGit2, Github, Info, Layers, User, Users, X } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = [
    {
      id: 1,
      title: 'Online Education Platform',
      type: 'Individual Project',
      year: '2026',
      image: '/project-education.png',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'MERN Stack', 'REST API'],
      summary: 'A full-stack MERN & SQL online education platform with role-based access controls for students, teachers, and admins.',
      details: 'Developed a comprehensive web application for managing online courses, quizzes, assignments, and student progress tracking. Designed an intuitive dashboard for teachers to upload materials, and students to view and complete assignments, with MongoDB storing course structure/assessments and MySQL handling secure relational student data.',
      features: [
        'Secure user authentication (JWT) with password hashing',
        'Role-based Access Control (RBAC) for Admin, Teacher, and Student roles',
        'Interactive quizzes, file assignments, and real-time grade calculations',
        'Responsive React frontend utilizing Tailwind CSS for smooth UX across mobile and desktop devices',
        'Comprehensive REST APIs built on Node/Express for seamless database integration'
      ],
      github: 'https://github.com/Thusantha-Lakshitha'
    },
    {
      id: 2,
      title: 'Inventory Management System',
      type: 'Individual Project',
      year: '2026',
      image: '/project-inventory.png',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'SQL', 'GitHub Version Control', 'Application Design'],
      summary: 'A web-based inventory utility designed to track stock levels, products, and warehouse operations.',
      details: 'Built to streamline operations, this system helps manage products, stock levels, and vendor orders. Designed with a layered architecture to segregate database management from UI logic, improving overall software modularity and maintainability.',
      features: [
        'Full CRUD (Create, Read, Update, Delete) actions for products and stock categories',
        'Interactive dashboard displaying low-stock warnings and total inventory valuation',
        'Layered code architecture for clear separation of concerns and robust error handling',
        'Reliable data storage utilizing optimized relational SQL queries',
        'Lightweight, vanilla frontend design for fast load times and clean user experience'
      ],
      github: 'https://github.com/Thusantha-Lakshitha'
    },
    {
      id: 3,
      title: 'Cinema Management System',
      type: 'Team Project',
      year: '2025',
      image: '/project-cinema.png',
      tech: ['React.js', 'Java', 'Spring Boot', 'MySQL', 'Postman API Testing', 'RESTful API'],
      summary: 'A ticket reservation and showtime management software featuring Java Spring Boot APIs.',
      details: 'Designed and developed in a team environment to orchestrate cinema ticket bookings, seating reservations, movie scheduling, and user transactions. Integrated structured database tables in MySQL and built resilient backend services in Java.',
      features: [
        'Robust RESTful API architecture built on Java and Spring Boot',
        'Responsive frontend web interface in React for user booking flows and admin management panels',
        'Real-time seat selection mechanism preventing double-bookings',
        'Role-based dashboard separating admin schedule controls from user movie reservation panels',
        'Strict API verification and testing executed via Postman'
      ],
      github: 'https://github.com/Thusantha-Lakshitha'
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest font-black text-brand-500 dark:text-brand-400 mb-2">Projects</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-50">
            Showcase of Work
          </h3>
          <div className="h-1 w-20 bg-brand-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group flex flex-col justify-between rounded-3xl glass border border-slate-200/50 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-brand-500/20 dark:hover:border-brand-500/20 transition-all duration-300 overflow-hidden"
            >
              {/* Card Thumbnail Image Banner */}
              <div className="relative aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-900 border-b border-slate-200/50 dark:border-slate-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Header & Content */}
              <div className="p-6 sm:p-8 space-y-4 flex-1">
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-1 text-xs font-bold text-slate-400 dark:text-slate-500">
                    <Calendar size={12} /> {project.year}
                  </span>
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-3xs font-extrabold tracking-wide uppercase ${
                    project.type.includes('Individual') 
                      ? 'bg-blue-50 dark:bg-blue-950/20 text-blue-600 dark:text-blue-400' 
                      : 'bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400'
                  }`}>
                    {project.type.includes('Individual') ? <User size={10} /> : <Users size={10} />}
                    {project.type}
                  </span>
                </div>

                <h4 className="text-xl font-extrabold text-slate-800 dark:text-slate-50 group-hover:text-brand-500 dark:group-hover:text-brand-400 transition-colors">
                  {project.title}
                </h4>

                <p className="text-sm text-slate-600 dark:text-slate-350 line-clamp-3 leading-relaxed">
                  {project.summary}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tech.slice(0, 4).map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded bg-slate-100/60 dark:bg-slate-900/60 text-slate-500 dark:text-slate-400 text-3xs font-bold uppercase tracking-wider"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-2 py-0.5 rounded bg-slate-100/60 dark:bg-slate-900/60 text-slate-400 text-3xs font-bold">
                      +{project.tech.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* Actions Footer */}
              <div className="px-6 py-4 bg-slate-50/50 dark:bg-slate-900/20 border-t border-slate-100 dark:border-slate-850 flex items-center justify-between">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-bold text-slate-500 dark:text-slate-450 hover:text-brand-500 dark:hover:text-brand-400 transition-colors"
                >
                  <Github size={14} /> Repository
                </a>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex items-center gap-1 text-xs font-black text-brand-500 dark:text-brand-400 hover:underline"
                >
                  <Info size={14} /> Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal Overlay for Details */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-slate-900/70 dark:bg-black/80 backdrop-blur-xs"
              />

              {/* Modal Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden text-left z-10 flex flex-col max-h-[90vh]"
              >
                {/* Header */}
                <div className="px-6 py-5 bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200/50 dark:border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FolderGit2 className="text-brand-500" size={20} />
                    <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Project Details</span>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-500 dark:text-slate-450"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Content Panel (Scrollable) */}
                <div className="p-6 sm:p-8 space-y-6 overflow-y-auto flex-1">
                  <div>
                    <h4 className="text-2xl font-black text-slate-900 dark:text-slate-50">
                      {selectedProject.title}
                    </h4>
                    <div className="flex flex-wrap gap-2 items-center mt-2.5">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-3xs font-extrabold bg-brand-50 dark:bg-brand-950/20 text-brand-600 dark:text-brand-400 border border-brand-100/50 dark:border-brand-900/30 uppercase">
                        {selectedProject.type}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-400">
                        <Calendar size={12} /> {selectedProject.year}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h5 className="text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Overview</h5>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                      {selectedProject.details}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h5 className="text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Key Features</h5>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex gap-2.5 items-start text-slate-600 dark:text-slate-350 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h5 className="text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 flex items-center gap-1">
                      <Layers size={12} /> Tech Stack &amp; Libraries
                    </h5>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {selectedProject.tech.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-lg bg-brand-50/50 dark:bg-brand-950/20 text-brand-600 dark:text-brand-400 text-xs font-semibold border border-brand-100/40 dark:border-brand-900/20"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="p-6 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200/50 dark:border-slate-800 flex gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-5 py-3 rounded-xl bg-slate-900 text-white hover:bg-black dark:bg-slate-800 dark:hover:bg-slate-700 font-semibold transition-all duration-200 text-center flex items-center justify-center gap-2 text-sm shadow-sm"
                  >
                    <Github size={16} /> View Repository
                  </a>
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-5 py-3 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-semibold transition-all duration-200 text-center flex items-center justify-center gap-2 text-sm shadow-md shadow-brand-500/10"
                  >
                    Live Demo <ExternalLink size={16} />
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
