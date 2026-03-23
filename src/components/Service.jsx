import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

const services = [
  { title: "Our Vision", text: "Our vision to provide autism free children.", bg: "bg-[#EFF6FF]", color: "text-[#0F3460]", icon: "👁️", accent: "border-[#0F3460]" },
  { title: "Our Mission", text: "A program that meets the life skill needs of every child.", bg: "bg-[#E6FAFA]", color: "text-[#00ADB5]", icon: "🎯", accent: "border-[#00ADB5]" },
  { title: "We Care", text: "We care with compassion on every child even they are autism, ADHD.", bg: "bg-[#FFF0F3]", color: "text-[#E94560]", icon: "💙", accent: "border-[#E94560]" },
];

const statsData = [
  { id: 1, number: 160, label: 'Qualified Teachers' },
  { id: 2, number: 20, label: 'Years Of Experience' },
  { id: 3, number: 565, label: 'Students Enrolled' },
  { id: 4, number: 22, label: 'Total Branches' },
];

export default function ServicesSection() {
  return (
    <section className="py-16 bg-gray-50 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-[#00ADB5] text-xs md:text-sm font-bold uppercase tracking-widest">Service We Provide</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F3460]">Providing <span className="text-[#E94560]">Good Qualities</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((item, index) => (
            <motion.div
              key={index}
              className={item.bg + ` rounded-2xl p-8 md:p-10 text-center shadow-md hover:shadow-xl hover:-translate-y-3 transition-all duration-300 border-t-4 ${item.accent} relative overflow-hidden group cursor-pointer`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="relative z-10 w-16 h-16 mx-auto bg-white rounded-2xl shadow-md flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">{item.icon}</span>
              </div>
              <h3 className={item.color + " text-2xl font-extrabold mb-4 relative z-10"}>{item.title}</h3>
              <p className="text-slate-600 font-medium relative z-10 leading-relaxed">{item.text}</p>
              <div className={`absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 ${item.accent.replace('border-','bg-')}`} />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 md:mt-20 bg-[#0F3460] rounded-2xl py-10 md:py-12 px-4 md:px-6"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="text-center mb-10">
            <p className="text-[#00ADB5] text-xs font-bold uppercase tracking-widest mb-1">Numbers Speak</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Our <span className="text-[#E94560]">Impact</span></h2>
          </div>
          <div className="grid grid-cols-2 md:flex md:flex-row justify-around items-center gap-6 md:gap-10">
            {statsData.map((stat, index) => (
              <motion.div
                key={stat.id}
                className="text-center flex flex-col items-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <h3 className="text-4xl md:text-6xl font-extrabold text-[#00ADB5] mb-2 tracking-tight">
                  <CountUp start={0} end={stat.number} duration={3} enableScrollSpy scrollSpyOnce />
                </h3>
                <p className="text-sm md:text-lg font-bold text-white/80">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}