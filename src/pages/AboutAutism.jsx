import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import autismBg from '../assets/autism_hero_bg.jpg';

const autismData = [
  { year: '1970', tech: '', rate: '1 in 10,000 children' },
  { year: '1971', tech: 'Colour TV common in USA', rate: '1 in 5000 children' },
  { year: '1975', tech: 'Microsoft & Apple Founded', rate: '1 in 2500 children' },
  { year: '1980', tech: 'CNN News station starts broadcasting', rate: '1 in 2000 children' },
  { year: '1985', tech: 'First internet domain registered', rate: '1 in 1500 children' },
  { year: '1990', tech: 'Launch of World Wide Web', rate: '1 in 1000 children' },
  { year: '1995', tech: 'Commercialization of internet', rate: '1 in 500 children' },
  { year: '2000', tech: 'Launch of broadband & GPS', rate: '1 in 250 children' },
  { year: '2005', tech: 'YouTube Launches', rate: '1 in 150 children' },
  { year: '2010', tech: 'Instagram Launches / 4G rollout', rate: '1 in 100 children' },
  { year: '2015', tech: 'Amazon Alexa / Self driving car testing starts', rate: '1 in 60 children' },
  { year: '2020', tech: 'SpaceX first private launch into orbit', rate: '1 in 32 children' },
  { year: '2022', tech: 'Metaverse / AI (ChatGPT v1) mainstream', rate: '1 in 20 children' },
  { year: '2024', tech: 'Apple Vision Pro / AI (Gemini 1.5) and human-like bots', rate: '1 in 15 children' },
  { year: '2026', tech: 'Realtime Language conversion (Universal Translator)', rate: '1 in 10 children' },
  { year: '2028', tech: 'Meta Human AI bots widespread', rate: '1 in 5 children' },
  { year: '2030', tech: 'Neuralink human trials / AI Humanoid robots', rate: '1 in 2 children' },
];

export default function AboutAutism() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen overflow-hidden">
      <div className="relative h-[300px] md:h-[400px] flex items-center justify-center text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url("${autismBg}")` }}
        ></div>
        <div className="absolute inset-0 bg-[#0F3460]/70"></div>
        
        <motion.div 
          className="relative z-10 text-center px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight drop-shadow-lg">About Autism</h1>
          <nav className="flex items-center justify-center gap-2 text-sm font-semibold bg-white/10 backdrop-blur-sm px-5 py-2 rounded-full mx-auto w-fit border border-white/20">
            <Link to="/" className="text-[#00ADB5] hover:text-white transition-colors">Home</Link>
            <span className="text-white/40">/</span>
            <span className="text-white">About Autism</span>
          </nav>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 md:py-20">
        <motion.div 
          className="mb-8 md:mb-12 px-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#0F3460] mb-3">India Autism Statistics</h2>
          <p className="text-slate-500">The prevalence of autism in India has been increasing significantly over the years.</p>
        </motion.div>

        <motion.div 
          className="overflow-x-auto rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-slate-100 -mx-4 md:mx-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <table className="w-full text-left border-collapse bg-white">
            <thead>
              <tr className="bg-[#0F3460] text-white uppercase text-xs md:text-sm font-semibold tracking-wider">
                <th className="px-4 md:px-8 py-4 md:py-5">Year</th>
                <th className="px-4 md:px-8 py-4 md:py-5">Technology Development</th>
                <th className="px-4 md:px-8 py-4 md:py-5">Rate of Autism</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {autismData.map((item, index) => (
                <tr 
                  key={index} 
                  className="hover:bg-slate-50 transition-colors text-[#0F3460]"
                >
                  <td className="px-4 md:px-8 py-4 font-bold text-sm md:text-base">{item.year}</td>
                  <td className="px-4 md:px-8 py-4 text-slate-500 text-sm md:text-base">{item.tech || "—"}</td>
                  <td className="px-4 md:px-8 py-4 font-semibold text-[#E94560] text-sm md:text-base whitespace-nowrap">{item.rate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </div>
  );
}
