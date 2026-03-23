import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import logo from '../assets/tttclogo.jpg';

// Letter-by-letter stagger animation
function AnimatedLetters({ text, className, delay = 0 }) {
  return (
    <span className={className} aria-label={text}>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: delay + i * 0.045, ease: [0.22, 1, 0.36, 1] }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  );
}

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen bg-[#EFF6FF] overflow-hidden flex flex-col justify-center">

      {/* Background: giant decorative word */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span
          className="text-[18vw] font-black text-[#0F3460]/5 tracking-tighter whitespace-nowrap leading-none"
        >
          TINY TODDS
        </span>
      </div>

      {/* Top-left pill label */}
      <motion.div
        className="absolute top-6 left-6 flex items-center gap-2 bg-[#0F3460] text-white text-xs font-bold px-4 py-2 rounded-full z-20"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <span className="w-2 h-2 rounded-full bg-[#00ADB5] animate-pulse" />
        EST. 2010 · TAMIL NADU
      </motion.div>

      {/* Top-right tag */}
      <motion.div
        className="absolute top-6 right-6 text-xs font-bold text-[#0F3460]/50 uppercase tracking-widest z-20 hidden md:block"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Autism · ADHD · Therapy
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-0 w-full">

        {/* Left: Text */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Small label */}
          <motion.p
            className="text-[#00ADB5] text-xs font-bold uppercase tracking-widest"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
          >
            Therapy &amp; Care Centre
          </motion.p>

          {/* Giant headline */}
          <h1 className="text-[13vw] sm:text-[10vw] lg:text-[7vw] font-black leading-[0.9] tracking-tighter text-[#0F3460] select-none">
            <AnimatedLetters text="WE CARE" delay={0.1} className="block" />
            <AnimatedLetters text="FOR YOUR" delay={0.35} className="block text-[#E94560]" />
            <AnimatedLetters text="CHILD." delay={0.6} className="block" />
          </h1>

          {/* Description */}
          <motion.p
            className="text-slate-500 text-base md:text-lg max-w-md leading-relaxed mt-2"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }}
          >
            Tiny Todds Therapy Care Centre — providing expert Occupational Therapy, Speech Therapy, Physiotherapy & Special Education across Tamil Nadu.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            className="flex flex-wrap gap-4 mt-2"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3 }}
          >
            <Link
              to="/contact"
              className="bg-[#E94560] text-white px-8 py-3.5 rounded-full font-bold text-sm hover:bg-[#B5223B] hover:-translate-y-1 hover:shadow-xl hover:shadow-[#E94560]/30 transition-all duration-300"
            >
              Book Free Consultation →
            </Link>
            <Link
              to="/about"
              className="border-2 border-[#0F3460] text-[#0F3460] px-8 py-3.5 rounded-full font-bold text-sm hover:bg-[#0F3460] hover:text-white transition-all duration-300"
            >
              About Us
            </Link>
          </motion.div>

          {/* Stats row */}
          <motion.div
            className="flex flex-wrap gap-8 mt-4 pt-4 border-t border-[#0F3460]/10"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
          >
            {[
              { num: '565+', label: 'Children Helped' },
              { num: '22',   label: 'Branches' },
              { num: '20+',  label: 'Years Experience' },
            ].map((s, i) => (
              <div key={i}>
                <p className="text-2xl font-black text-[#0F3460]">{s.num}</p>
                <p className="text-xs text-slate-500 font-semibold uppercase tracking-wide">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: Logo / image block — arha.me style large image that bleeds off edge */}
        <motion.div
          className="flex-shrink-0 relative w-[280px] h-[320px] sm:w-[340px] sm:h-[400px] lg:w-[400px] lg:h-[540px]"
          initial={{ opacity: 0, scale: 0.9, x: 60 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Decorative offset bg block */}
          <div className="absolute top-6 right-0 w-full h-full bg-[#00ADB5]/20 rounded-3xl transform translate-x-4" />
          <div className="absolute top-3 right-0 w-full h-full bg-[#E94560]/15 rounded-3xl transform translate-x-2" />

          {/* Main image */}
          <img
            src={logo}
            alt="Tiny Todds Therapy Care"
            className="relative z-10 w-full h-full object-cover rounded-3xl shadow-2xl"
          />

          {/* Floating badge */}
          <motion.div
            className="absolute -bottom-4 -left-4 z-20 bg-[#0F3460] text-white px-5 py-3 rounded-2xl shadow-xl"
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
          >
            <p className="text-xs text-[#00ADB5] font-bold uppercase tracking-widest">Trusted By</p>
            <p className="text-xl font-black">1000+ Parents</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#0F3460]/40 z-10"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
      >
        <span className="text-xs font-bold uppercase tracking-widest">Scroll</span>
        <motion.div
          className="w-0.5 h-8 bg-[#0F3460]/30 rounded-full"
          animate={{ scaleY: [0.3, 1, 0.3] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
}
