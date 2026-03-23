import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import logo from '../assets/tttclogo.jpg';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen bg-[#F8FAFC] overflow-hidden flex flex-col justify-center">

      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#00ADB5]/8 rounded-full blur-3xl" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-[#E94560]/6 rounded-full blur-3xl" />
        <div className="absolute top-[30%] left-[20%] w-[300px] h-[300px] bg-[#0F3460]/5 rounded-full blur-3xl" />
      </div>

      {/* Subtle background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[16vw] font-black text-[#0F3460]/[0.03] tracking-tighter whitespace-nowrap leading-none">
          TINY TODDS
        </span>
      </div>

      {/* Top-left pill label */}
      <motion.div
        className="absolute top-6 left-6 flex items-center gap-2 bg-[#0F3460] text-white text-xs font-semibold px-4 py-2 rounded-full z-20"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <span className="w-2 h-2 rounded-full bg-[#00ADB5] animate-pulse" />
        EST. 2010 · TAMIL NADU
      </motion.div>

      {/* Top-right tag */}
      <motion.div
        className="absolute top-6 right-6 text-xs font-medium text-[#0F3460]/40 uppercase tracking-widest z-20 hidden md:block"
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
          <motion.p
            className="text-[#00ADB5] text-xs font-semibold uppercase tracking-widest"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
          >
            Therapy & Care Centre
          </motion.p>

          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight text-[#0F3460]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="block">We Care</span>
            <span className="block text-[#E94560]">For Your</span>
            <span className="block">Child.</span>
          </motion.h1>

          <motion.p
            className="text-slate-500 text-base md:text-lg max-w-md leading-relaxed mt-2"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
          >
            Tiny Todds Therapy Care Centre — providing expert Occupational Therapy, Speech Therapy, Physiotherapy & Special Education across Tamil Nadu.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 mt-2"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
          >
            <Link
              to="/contact"
              className="bg-gradient-to-r from-[#E94560] to-[#B5223B] text-white px-8 py-3.5 rounded-full font-semibold text-sm hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(233,69,96,0.35)] transition-all duration-300"
            >
              Book Free Consultation →
            </Link>
            <Link
              to="/about"
              className="border-2 border-[#0F3460]/20 text-[#0F3460] px-8 py-3.5 rounded-full font-semibold text-sm hover:bg-[#0F3460] hover:text-white hover:border-[#0F3460] transition-all duration-300"
            >
              About Us
            </Link>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-8 mt-4 pt-4 border-t border-slate-200"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
          >
            {[
              { num: '565+', label: 'Children Helped' },
              { num: '22',   label: 'Branches' },
              { num: '20+',  label: 'Years Experience' },
            ].map((s, i) => (
              <div key={i}>
                <p className="text-2xl font-black text-[#0F3460]">{s.num}</p>
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: Logo / image block */}
        <motion.div
          className="flex-shrink-0 relative w-[280px] h-[320px] sm:w-[340px] sm:h-[400px] lg:w-[400px] lg:h-[540px]"
          initial={{ opacity: 0, scale: 0.95, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Decorative offset blocks */}
          <div className="absolute top-6 right-0 w-full h-full bg-[#00ADB5]/15 rounded-3xl transform translate-x-4" />
          <div className="absolute top-3 right-0 w-full h-full bg-[#E94560]/10 rounded-3xl transform translate-x-2" />

          {/* Main image */}
          <img
            src={logo}
            alt="Tiny Todds Therapy Care"
            className="relative z-10 w-full h-full object-cover rounded-3xl shadow-[0_20px_60px_rgba(15,52,96,0.15)]"
          />

          {/* Floating badge */}
          <motion.div
            className="absolute -bottom-4 -left-4 z-20 bg-[#0F3460] text-white px-5 py-3 rounded-2xl shadow-xl"
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
          >
            <p className="text-xs text-[#00ADB5] font-semibold uppercase tracking-widest">Trusted By</p>
            <p className="text-xl font-black">1000+ Parents</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#0F3460]/30 z-10"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
      >
        <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
        <motion.div
          className="w-0.5 h-8 bg-[#0F3460]/20 rounded-full"
          animate={{ scaleY: [0.3, 1, 0.3] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
}
