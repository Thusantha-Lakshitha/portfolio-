import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, Send, MapPin, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSent(false);

    try {
      const response = await fetch("https://formsubmit.co/ajax/thusanthabandara41@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}: ${formData.subject}`
        })
      });

      const result = await response.json();
      if (response.ok && result.success === "true") {
        setIsSent(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        alert("Failed to send the message. Please try again or contact me directly via email.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again or contact me directly via email.");
    } finally {
      setIsSubmitting(false);
      // Reset success status after a delay
      setTimeout(() => setIsSent(false), 6000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const contactMethods = [
    {
      icon: <Mail className="text-brand-500" size={20} />,
      label: 'Email Me',
      value: 'thusanthabandara41@gmail.com',
      href: 'mailto:thusanthabandara41@gmail.com'
    },
    {
      icon: <Phone className="text-brand-500" size={20} />,
      label: 'Call / SMS',
      value: '+94 78 523 4254',
      href: 'tel:+94785234254'
    },
    {
      icon: <Linkedin className="text-brand-500" size={20} />,
      label: 'LinkedIn',
      value: 'Thusantha Lakshitha',
      href: 'https://www.linkedin.com/in/thusantha-lakshitha-77a15427b/'
    },
    {
      icon: <Github className="text-brand-500" size={20} />,
      label: 'GitHub',
      value: 'Thusantha-Lakshitha',
      href: 'https://github.com/Thusantha-Lakshitha'
    }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-slate-50/50 dark:bg-slate-950/40">
      {/* Glow Backing */}
      <div className="absolute left-0 bottom-0 w-80 h-80 bg-brand-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest font-black text-brand-500 dark:text-brand-400 mb-2">Contact</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-50">
            Get In Touch
          </h3>
          <div className="h-1 w-20 bg-brand-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
          {/* Left: Contact Info Grid */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <h4 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2">
              Let's build something great!
            </h4>
            <p className="text-slate-600 dark:text-slate-350 leading-relaxed text-sm sm:text-base">
              I am open to software engineering internships, freelance projects, or full-time opportunities. Drop me a line or connect with me via social media!
            </p>

            {/* Methods Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {contactMethods.map((method, idx) => (
                <a
                  key={idx}
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="p-5 rounded-2xl glass border border-slate-200/50 dark:border-slate-800 shadow-xs hover:shadow-md hover:border-brand-500/20 dark:hover:border-brand-500/20 hover:-translate-y-0.5 transition-all duration-250 flex flex-col gap-3 group"
                >
                  <div className="p-3 bg-brand-50 dark:bg-brand-950/30 rounded-xl w-fit group-hover:scale-105 transition-transform">
                    {method.icon}
                  </div>
                  <div>
                    <h5 className="font-extrabold text-xs text-slate-400 uppercase tracking-widest">
                      {method.label}
                    </h5>
                    <p className="font-bold text-slate-800 dark:text-slate-200 text-xs sm:text-sm mt-0.5 truncate max-w-full">
                      {method.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-400 font-semibold pt-4">
              <MapPin size={14} className="text-brand-500" />
              <span>Based in Kelaniya / Colombo, Sri Lanka</span>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="p-6 sm:p-8 rounded-3xl glass border border-slate-200/50 dark:border-slate-800 shadow-md">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/40 text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:border-brand-500/70 focus:ring-1 focus:ring-brand-500/20 transition-all text-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/40 text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:border-brand-500/70 focus:ring-1 focus:ring-brand-500/20 transition-all text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Project Inquiry / Job Opening"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/40 text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:border-brand-500/70 focus:ring-1 focus:ring-brand-500/20 transition-all text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Hi Thusantha, I'd like to talk about..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/40 text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:border-brand-500/70 focus:ring-1 focus:ring-brand-500/20 transition-all text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || isSent}
                  className="w-full py-3.5 rounded-xl bg-brand-500 hover:bg-brand-600 dark:bg-brand-600 dark:hover:bg-brand-700 text-white font-bold transition-all duration-200 shadow-md shadow-brand-500/10 dark:shadow-brand-900/20 hover:shadow-lg disabled:opacity-50 disabled:pointer-events-none flex items-center justify-center gap-2 group text-sm"
                >
                  {isSubmitting ? (
                    <span>Sending Message...</span>
                  ) : isSent ? (
                    <span className="flex items-center gap-1.5 text-emerald-450 dark:text-emerald-400">
                      <CheckCircle2 size={16} /> Message Sent Successfully!
                    </span>
                  ) : (
                    <>
                      Send Message
                      <Send size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
