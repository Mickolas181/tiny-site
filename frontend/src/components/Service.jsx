import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { FaEye, FaBullseye, FaHeart } from 'react-icons/fa';
import axios from 'axios';

const services = [
  { title: "Our Vision", text: "Our vision to provide autism free children.", bg: "bg-[#F0F4FF]", color: "text-[#0F3460]", icon: <FaEye />, iconBg: "bg-[#0F3460]" },
  { title: "Our Mission", text: "A program that meets the life skill needs of every child.", bg: "bg-[#E8FAFA]", color: "text-[#00ADB5]", icon: <FaBullseye />, iconBg: "bg-[#00ADB5]" },
  { title: "We Care", text: "We care with compassion on every child even they are autism, ADHD.", bg: "bg-[#FFF0F3]", color: "text-[#E94560]", icon: <FaHeart />, iconBg: "bg-[#E94560]" },
];

export default function ServicesSection() {
  // DB-la irunthu vara numbers-ah save panna State
  const [dbStats, setDbStats] = useState([
    { id: 1, number: 160, label: 'Qualified Teachers' },
    { id: 2, number: 20, label: 'Years Of Experience' },
    { id: 3, number: 565, label: 'Students Enrolled' },
    { id: 4, number: 22, label: 'Total Branches' },
  ]);

  // Page open aanathum numbers-ah API vazhiya eduthutu varom
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/get-data/')
      .then(response => {
        if (response.data) {
          setDbStats([
            { id: 1, number: response.data.teachers_count || 160, label: 'Qualified Teachers' },
            { id: 2, number: response.data.experience_years || 20, label: 'Years Of Experience' },
            { id: 3, number: response.data.students_enrolled || 565, label: 'Students Enrolled' },
            { id: 4, number: response.data.total_branches || 22, label: 'Total Branches' },
          ]);
        }
      })
      .catch(error => console.error("Error fetching stats:", error));
  }, []);

  return (
    <section className="py-20 bg-[#F8FAFC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        {/* ... (Unga pazhaya header and services mapping code apdiye varum) ... */}
        <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true, amount: 0.3 }}>
          <p className="text-[#00ADB5] text-xs md:text-sm font-semibold uppercase tracking-widest mb-2">Service We Provide</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F3460]">Providing <span className="text-[#E94560]">Good Qualities</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((item, index) => (
            <motion.div key={index} className={`${item.bg} rounded-2xl p-8 md:p-10 text-center shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.10)] hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group cursor-pointer`} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.15 }} viewport={{ once: true, amount: 0.3 }}>
              <div className={`relative z-10 w-14 h-14 mx-auto ${item.iconBg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 text-white text-xl shadow-lg`}>
                {item.icon}
              </div>
              <h3 className={item.color + " text-xl font-bold mb-3 relative z-10"}>{item.title}</h3>
              <p className="text-slate-500 font-medium relative z-10 leading-relaxed text-sm">{item.text}</p>
              <div className={`absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 ${item.iconBg}`} />
            </motion.div>
          ))}
        </div>

        {/* Inga thaan namma DB Stats-ah mapping pandrom */}
        <motion.div className="mt-20 bg-[#0F3460] rounded-2xl py-12 px-6" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true, amount: 0.3 }}>
          <div className="text-center mb-10">
            <p className="text-[#00ADB5] text-xs font-semibold uppercase tracking-widest mb-1">Numbers Speak</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Our <span className="text-[#E94560]">Impact</span></h2>
          </div>
          <div className="grid grid-cols-2 md:flex md:flex-row justify-around items-center gap-6 md:gap-10">
            {dbStats.map((stat, index) => (
              <motion.div key={stat.id} className="text-center flex flex-col items-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true, amount: 0.3 }}>
                <h3 className="text-4xl md:text-5xl font-extrabold text-[#00ADB5] mb-2 tracking-tight">
                  {/* stat.number ippo namma DB la irunthu varum! */}
                  <CountUp start={0} end={stat.number} duration={3} enableScrollSpy scrollSpyOnce />
                </h3>
                <p className="text-sm md:text-base font-medium text-white/70">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}