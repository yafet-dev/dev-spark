import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';

function CountUp({ target, suffix, duration = 2 }: { target: number; suffix: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

export default function SocialProof() {
  return (
    <section className="bg-[#010104] py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-6">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-brand text-xs font-medium uppercase tracking-[0.2em] mb-4"
          >
            Testimonials
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-semibold tracking-tight font-display text-white leading-tight"
          >
            Trusted by growing <br />
            businesses in Australia and beyond
          </motion.h2>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-white/40 text-sm md:text-base font-light max-w-lg mx-auto mb-20 leading-relaxed"
        >
          From startups to scale-ups, we build products that help teams move faster and grow.
        </motion.p>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Testimonial Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7 bg-white/[0.03] border border-white/[0.06] rounded-3xl p-10 md:p-14 flex flex-col justify-between relative overflow-hidden group min-h-[420px]"
          >
            <div className="relative z-10">
              <span className="inline-block px-3 py-1 rounded-[4px] bg-[#F3FF9B] text-black text-[10px] font-semibold uppercase tracking-wider mb-10">
                Client testimonial
              </span>
              <p className="text-lg md:text-2xl font-light text-white/90 leading-[1.7] mb-12 font-display">
                "DevSpark took our product from wireframes to launch in record time. Clean code, solid architecture, and they actually understood our business. Our dashboard handles 10x the traffic now—no hiccups."
              </p>
            </div>

            <div className="flex items-end justify-between relative z-10">
              <div>
                <h4 className="text-base font-medium text-white">Sarah M.</h4>
                <p className="text-sm text-white/30 font-light mt-1">Head of Product, Sydney</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-brand rounded-sm flex items-center justify-center">
                  <div className="w-3 h-3 bg-black rotate-45" />
                </div>
                <span className="text-lg font-bold tracking-tight text-white">DevSpark.</span>
              </div>
            </div>

            <div className="absolute top-0 right-0 w-80 h-80 bg-brand/[0.03] blur-[120px] -mr-40 -mt-40 group-hover:bg-brand/[0.06] transition-colors duration-700" />
          </motion.div>

          {/* Stats Column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Stat Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-[#0c0c0f] border border-white/[0.08] rounded-3xl p-10 flex flex-col justify-between group flex-1"
            >
              <div className="flex items-start justify-between mb-8">
                <span className="text-5xl md:text-6xl font-semibold text-white tracking-tighter font-display">
                  <CountUp target={15} suffix="+" duration={2} />
                </span>
                <span className="px-3 py-1.5 rounded-[4px] bg-[#D8F7D6] border border-[#D8F7D6]/30 text-black text-[10px] font-semibold uppercase tracking-wider">
                  Years of experience
                </span>
              </div>
              <p className="text-sm text-white/40 font-light leading-relaxed max-w-[280px]">
                Delivering web products with clean code, solid architecture, and design that scales.
              </p>
            </motion.div>

            {/* Stat Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="bg-[#0c0c0f] border border-white/[0.08] rounded-3xl p-10 flex flex-col justify-between group flex-1"
            >
              <div className="flex items-start justify-between mb-8">
                <span className="text-5xl md:text-6xl font-semibold text-white tracking-tighter font-display">
                  <CountUp target={98} suffix="%" duration={2.5} />
                </span>
                <span className="px-3 py-1.5 rounded-[4px] bg-[#D8F7D6] border border-[#D8F7D6]/30 text-black text-[10px] font-semibold uppercase tracking-wider">
                  Client satisfaction
                </span>
              </div>
              <p className="text-sm text-white/40 font-light leading-relaxed max-w-[280px]">
                Fast delivery, reliable products, and support that goes beyond launch.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
