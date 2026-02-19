import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Share2, Layout, Heart, Figma, Zap, Star, Globe } from 'lucide-react';

export default function Features() {
  return (
    <section className="bg-[#010104] py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-brand text-xs font-medium uppercase tracking-[0.2em] mb-4"
          >
            What we typically deliver
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-semibold tracking-tight font-display text-white mb-5"
          >
            Fast, reliable products <br /> that scale as you grow
          </motion.h2>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-white/40 text-sm md:text-base font-light max-w-lg mx-auto mb-20 leading-relaxed"
        >
          We take projects end-to-end so teams get products they can rely on.
        </motion.p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Large Card: Web Apps & Websites */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-2 bg-[#0c0c0f] border border-white/[0.08] rounded-3xl p-10 md:p-14 flex flex-col lg:flex-row gap-14 items-center overflow-hidden group"
          >
            <div className="flex-1">
              <span className="inline-block px-3.5 py-1.5 rounded-[4px] bg-[#D8F7D6] text-[#0c0c0f] text-[10px] font-semibold uppercase tracking-wider mb-8">
                Web apps & websites
              </span>
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-5 leading-snug font-display tracking-tight">
                Dashboards, portals, landing pages, admin systems.
              </h3>
              <p className="text-sm text-white/40 font-light leading-relaxed max-w-md">
                Built to perform and scale. Clean UI, solid architecture, real-time features when you need them.
              </p>
            </div>
            <div className="flex-1 w-full relative">
              <div className="bg-[#111116] border border-white/[0.06] rounded-2xl p-5 shadow-2xl transform lg:rotate-1 group-hover:rotate-0 transition-transform duration-700">
                <div className="flex items-center gap-1.5 mb-5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#fc605c]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#fcbb40]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#34c648]" />
                </div>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <div className="h-3 w-20 bg-white/[0.06] rounded-full" />
                    <div className="h-3 w-12 bg-white/[0.04] rounded-full" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="h-24 bg-white/[0.04] rounded-xl border border-white/[0.04]" />
                    <div className="h-24 bg-white/[0.04] rounded-xl border border-white/[0.04]" />
                  </div>
                  <div className="h-28 bg-white/[0.04] rounded-xl border border-white/[0.04]" />
                  <div className="flex gap-3">
                    <div className="h-3 w-16 bg-white/[0.06] rounded-full" />
                    <div className="h-3 w-24 bg-white/[0.04] rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Small Card: Integrations */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="bg-[#0c0c0f] border border-white/[0.08] rounded-3xl p-10 flex flex-col justify-between min-h-[420px] group overflow-hidden"
          >
            <div className="relative h-52 flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-52 h-52 rounded-full border border-white/[0.04] absolute" />
                <div className="w-36 h-36 rounded-full border border-white/[0.06] absolute" />
                <div className="w-20 h-20 rounded-full border border-white/[0.1] absolute" />
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute w-52 h-52"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-9 h-9 bg-brand rounded-xl flex items-center justify-center shadow-[0_0_24px_rgba(207,254,37,0.3)]">
                  <motion.div animate={{ rotate: -360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
                    <Share2 size={15} className="text-black" />
                  </motion.div>
                </div>
                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center border border-white/20">
                  <motion.div animate={{ rotate: -360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
                    <Heart size={14} className="text-white/70" />
                  </motion.div>
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center border border-white/20">
                  <motion.div animate={{ rotate: -360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
                    <Star size={14} className="text-white/70" />
                  </motion.div>
                </div>
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center border border-white/20">
                  <motion.div animate={{ rotate: -360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
                    <Globe size={14} className="text-white/70" />
                  </motion.div>
                </div>
                <div className="absolute top-[15%] right-[15%] w-7 h-7 bg-white/10 rounded-lg flex items-center justify-center border border-white/20">
                  <motion.div animate={{ rotate: -360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
                    <Zap size={13} className="text-white/70" />
                  </motion.div>
                </div>
              </motion.div>
              <div className="relative z-10 w-14 h-14 bg-brand rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(207,254,37,0.25)]">
                <Figma size={22} className="text-black" />
              </div>
            </div>
            <div className="mt-auto">
              <h3 className="text-xl font-semibold text-white mb-3 font-display tracking-tight">Integrations</h3>
              <p className="text-sm text-white/35 font-light leading-relaxed">
                Payments, email/SMS, analytics, CRMs, scheduling, maps, partner APIs.
              </p>
            </div>
          </motion.div>

          {/* Small Card: Automation / AI */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#0c0c0f] border border-white/[0.08] rounded-3xl p-10 flex flex-col justify-between min-h-[420px] relative overflow-hidden group"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[160px] font-bold text-white/[0.03] select-none tracking-tighter font-display">
              AI
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center h-52">
              <motion.button
                animate={{
                  scale: [1, 1.06, 1],
                  boxShadow: [
                    "0 0 40px rgba(207,254,37,0.3)",
                    "0 0 60px rgba(207,254,37,0.6)",
                    "0 0 40px rgba(207,254,37,0.3)",
                  ],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.1, translateY: -4 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2.5 bg-brand px-7 py-3.5 rounded-full transition-all duration-500 cursor-pointer"
              >
                <MessageSquare size={18} className="text-black" />
                <span className="text-black text-sm font-semibold">Automation / AI</span>
              </motion.button>
            </div>

            <div className="relative z-10 mt-auto">
              <h3 className="text-xl font-semibold text-white mb-3 font-display tracking-tight">Automation & AI</h3>
              <p className="text-sm text-white/35 font-light leading-relaxed">
                LLM integrations, RAG chatbots, structured outputs, safety controls—when you're ready.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
