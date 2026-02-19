import React from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, ArrowUpRight, Linkedin, Twitter, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-[#010104] border-t border-white/6 overflow-hidden">
      {/* Subtle gradient glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(207, 254, 37, 0.08) 0%, transparent 60%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/8">
          {/* Brand column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <a href="/" className="inline-flex items-center gap-2 mb-6 hover:opacity-90 transition-opacity">
              <div className="w-9 h-9 bg-brand rounded-sm flex items-center justify-center">
                <div className="w-4 h-4 bg-black rotate-45" />
              </div>
              <span className="text-2xl font-bold tracking-tight font-display text-white">
                DevSpark.
              </span>
            </a>
            <p className="text-white/50 text-sm md:text-base max-w-sm leading-relaxed font-sans mb-6">
              Australia-based web development studio. We build websites and apps that scale with your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 text-sm">
              <a
                href="mailto:hello@devspark.com.au"
                className="inline-flex items-center gap-2 text-white/70 hover:text-brand transition-colors"
              >
                <Mail size={16} className="shrink-0" />
                hello@devspark.com.au
              </a>
              <span className="hidden sm:inline text-white/20">·</span>
              <span className="inline-flex items-center gap-2 text-white/50">
                <MapPin size={16} className="shrink-0" />
                Sydney, Australia
              </span>
            </div>
          </motion.div>

          {/* Links grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8"
          >
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4 font-sans">
                Services
              </h4>
              <ul className="space-y-3">
                {['Web Apps', 'UI/UX Design', 'Integrations', 'Automation'].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-white/70 hover:text-brand text-sm font-light transition-colors inline-flex items-center gap-1 group"
                    >
                      {item}
                      <ArrowUpRight
                        size={14}
                        className="opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4 font-sans">
                Company
              </h4>
              <ul className="space-y-3">
                {['About Us', 'Careers', 'Blog', 'Contact'].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-white/70 hover:text-brand text-sm font-light transition-colors inline-flex items-center gap-1 group"
                    >
                      {item}
                      <ArrowUpRight
                        size={14}
                        className="opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4 font-sans">
                Connect
              </h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-white/50 hover:text-brand hover:border-brand/40 hover:bg-brand/5 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-white/50 hover:text-brand hover:border-brand/40 hover:bg-brand/5 transition-all duration-300"
                  aria-label="Twitter"
                >
                  <Twitter size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-white/50 hover:text-brand hover:border-brand/40 hover:bg-brand/5 transition-all duration-300"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-white/30 text-xs font-light">
            © {new Date().getFullYear()} DevSpark. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs">
            <a href="#" className="text-white/40 hover:text-white/70 transition-colors">
              Privacy
            </a>
            <a href="#" className="text-white/40 hover:text-white/70 transition-colors">
              Terms
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
