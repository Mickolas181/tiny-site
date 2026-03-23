import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// One scrolling track
function Track({ items, direction = 1, baseSpeed = 30 }) {
  // Build duplicated list for seamless loop
  const list = [...items, ...items, ...items];

  return (
    <div className="overflow-hidden whitespace-nowrap">
      <motion.div
        className="flex gap-0 w-max"
        animate={{ x: direction > 0 ? ['0%', '-33.333%'] : ['-33.333%', '0%'] }}
        transition={{ repeat: Infinity, duration: baseSpeed, ease: 'linear' }}
      >
        {list.map((item, i) => (
          <span
            key={i}
            className="text-[8vw] sm:text-[6vw] font-black uppercase tracking-tighter px-6 inline-flex items-center gap-4"
            style={{ color: item.color, WebkitTextStrokeWidth: item.outline ? '1px' : '0', WebkitTextStrokeColor: item.color, color: item.outline ? 'transparent' : item.color }}
          >
            {item.text}
            <span className="text-[4vw] text-[#E94560]">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function MarqueeStrip() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  const row1 = [
    { text: 'OCCUPATIONAL THERAPY', color: '#0F3460' },
    { text: 'SPEECH THERAPY',       color: '#0F3460', outline: true },
    { text: 'PHYSIOTHERAPY',        color: '#0F3460' },
    { text: 'SPECIAL EDUCATION',    color: '#0F3460', outline: true },
  ];

  const row2 = [
    { text: 'COMPASSIONATE CARE',   color: '#00ADB5' },
    { text: 'TRUSTED BY 1000+ PARENTS', color: '#00ADB5', outline: true },
    { text: 'AUTISM SUPPORT',       color: '#00ADB5' },
    { text: '22 CENTERS',           color: '#00ADB5', outline: true },
  ];

  return (
    <motion.section
      ref={ref}
      style={{ opacity }}
      className="py-10 bg-[#0F3460] overflow-hidden select-none"
    >
      <Track items={row1} direction={1}  baseSpeed={35} />
      <div className="h-2" />
      <Track items={row2} direction={-1} baseSpeed={28} />
    </motion.section>
  );
}
