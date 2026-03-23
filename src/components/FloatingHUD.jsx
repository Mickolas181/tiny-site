import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const facts = [
  'AUTISM AFFECTS 1 IN 40 CHILDREN',
  'EARLY INTERVENTION CHANGES LIVES',
  'WE SERVE 22+ CENTERS ACROSS TN',
  'SPEECH · OT · PHYSIO · SPECIAL ED',
  'TRUSTED BY 1000+ TAMIL NADU FAMILIES',
];

export default function FloatingHUD() {
  const [time, setTime] = useState('');
  const [factIdx, setFactIdx] = useState(0);
  const [open, setOpen] = useState(false);

  // Live clock
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const h = String(now.getHours()).padStart(2, '0');
      const m = String(now.getMinutes()).padStart(2, '0');
      setTime(`${h}:${m}`);
    };
    tick();
    const t = setInterval(tick, 10000);
    return () => clearInterval(t);
  }, []);

  // Cycle facts
  useEffect(() => {
    const t = setInterval(() => setFactIdx(i => (i + 1) % facts.length), 4000);
    return () => clearInterval(t);
  }, []);

  // Check open hours (9am–7pm)
  useEffect(() => {
    const h = new Date().getHours();
    setOpen(h >= 9 && h < 19);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 pointer-events-none">
      <div className="flex items-end justify-between px-4 md:px-8 pb-3 md:pb-4">

        {/* Left: Cycling fact */}
        <motion.div
          className="hidden md:flex flex-col items-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
        >
          <div className="flex items-center gap-2 mb-1">
            <span className={`w-2 h-2 rounded-full ${open ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`} />
            <span className="text-[10px] font-bold text-white/60 uppercase tracking-widest">
              {open ? 'OPEN NOW · 9AM–7PM' : 'CLOSED · OPENS 9AM'}
            </span>
          </div>
          <motion.p
            key={factIdx}
            className="text-[10px] md:text-xs font-black text-white/40 uppercase tracking-widest max-w-[260px]"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.4 }}
          >
            {facts[factIdx]}
          </motion.p>
        </motion.div>

        {/* Center: phone pill */}
        <motion.a
          href="tel:+919941350646"
          className="pointer-events-auto bg-[#E94560] text-white text-xs font-black px-5 py-2 rounded-full shadow-lg hover:shadow-[#E94560]/40 hover:-translate-y-1 transition-all duration-300 mx-auto md:mx-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2 }}
        >
          📞 +91 99413 50646
        </motion.a>

        {/* Right: Clock */}
        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
        >
          <p className="text-xl md:text-2xl font-black text-white/20 tabular-nums tracking-widest">
            {time}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
