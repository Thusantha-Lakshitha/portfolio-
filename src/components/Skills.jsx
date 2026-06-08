import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Sparkles } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code2 className="text-brand-500" size={20} />,
      skills: [
        { name: 'JavaScript', percentage: 90, level: 'Advanced' },
        { name: 'Java', percentage: 80, level: 'Intermediate' },
        { name: 'C#', percentage: 75, level: 'Intermediate' },
        { name: 'C', percentage: 70, level: 'Intermediate' },
        { name: 'Kotlin', percentage: 60, level: 'Familiar' },
        { name: 'PHP', percentage: 60, level: 'Familiar' },
        { name: 'Python', percentage: 55, level: 'Familiar' }
      ]
    },
    {
      title: 'Web & Backend Development',
      icon: <Layout className="text-brand-500" size={20} />,
      skills: [
        { name: 'React.js', percentage: 90, level: 'Advanced' },
        { name: 'HTML5 & CSS3', percentage: 90, level: 'Advanced' },
        { name: 'Node.js / Express.js', percentage: 80, level: 'Intermediate' },
        { name: 'Spring Boot', percentage: 75, level: 'Intermediate' },
        { name: '.NET Framework', percentage: 70, level: 'Intermediate' },
        { name: 'Joomla', percentage: 55, level: 'Familiar' }
      ]
    },
    {
      title: 'Databases & Tools',
      icon: <Database className="text-brand-500" size={20} />,
      skills: [
        { name: 'MySQL', percentage: 85, level: 'Advanced' },
        { name: 'Git & GitHub', percentage: 85, level: 'Advanced' },
        { name: 'VS Code / Visual Studio', percentage: 90, level: 'Advanced' },
        { name: 'MongoDB', percentage: 75, level: 'Intermediate' },
        { name: 'XAMPP / SQL Local', percentage: 80, level: 'Advanced' },
        { name: 'Postman API Testing', percentage: 75, level: 'Intermediate' },
        { name: 'IntelliJ IDEA / Android Studio', percentage: 70, level: 'Intermediate' }
      ]
    },
    {
      title: 'Professional Soft Skills',
      icon: <Sparkles className="text-brand-500" size={20} />,
      skills: [
        { name: 'Teamwork & Collaboration', percentage: 95, level: 'Strong' },
        { name: 'Effective Communication', percentage: 90, level: 'Strong' },
        { name: 'Time Management', percentage: 85, level: 'Strong' },
        { name: 'Work Under Pressure', percentage: 85, level: 'Strong' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50/50 dark:bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest font-black text-brand-500 dark:text-brand-400 mb-2">Skills</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-50">
            Technical &amp; Interpersonal Toolkit
          </h3>
          <div className="h-1 w-20 bg-brand-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="p-6 sm:p-8 rounded-3xl glass border border-slate-200/50 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-brand-500/20 dark:hover:border-brand-500/20 transition-all duration-300 text-left"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-brand-50 dark:bg-brand-950/30 rounded-xl">
                  {category.icon}
                </div>
                <h4 className="text-xl font-extrabold text-slate-800 dark:text-slate-100">
                  {category.title}
                </h4>
              </div>

              {/* Skills Items with progress bars */}
              <div className="space-y-5">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="space-y-1.5">
                    <div className="flex justify-between items-center text-sm font-semibold">
                      <span className="text-slate-700 dark:text-slate-350">{skill.name}</span>
                      <span className="text-slate-500 dark:text-slate-450 text-xs font-bold">{skill.percentage}%</span>
                    </div>
                    {/* Progress Bar Track */}
                    <div className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                      {/* Animated Progress Bar */}
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIdx * 0.05, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-brand-500 to-indigo-500 dark:from-brand-600 dark:to-indigo-600 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
