import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import autismBg from '../assets/autism_hero_bg.jpg';

// const autismData = ...
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
    <div className="bg-white min-h-screen">
      {/* --- Hero Section --- */}
      <div className="relative h-[300px] md:h-[400px] bg-gray-800 flex items-center justify-center text-white overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 brightness-50"
          style={{ backgroundImage: `url(${autismBg})` }}
        ></div>
        
        <motion.div 
          className="relative z-10 text-center px-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight drop-shadow-lg">About Autism</h1>
          <nav className="flex items-center justify-center gap-2 text-lg font-semibold bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full mx-auto w-fit border border-white/20">
            <Link to="/" className="text-orange-400 hover:text-orange-300 transition-colors">Home</Link>
            <span className="text-gray-400">/</span>
            <span className="text-white">About Autism</span>
          </nav>
        </motion.div>
      </div>

      {/* --- Content Section --- */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-4xl font-bold text-[#fe5d44] mb-3">About Autism</h2>
          <p className="text-gray-600 font-medium tracking-wide">Our Understanding About Autism</p>
        </motion.div>

        {/* --- Data Table --- */}
        <motion.div 
          className="overflow-x-auto rounded-xl shadow-2xl border border-gray-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <table className="w-full text-left border-collapse bg-white">
            <thead>
              <tr className="bg-[#cfe2f3] text-[#113240] uppercase text-sm font-bold tracking-wider">
                <th className="px-8 py-6 border-b border-gray-200">Year</th>
                <th className="px-8 py-6 border-b border-gray-200">Technology Development</th>
                <th className="px-8 py-6 border-b border-gray-200">Rate of Autism</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {autismData.map((item, index) => (
                <motion.tr 
                  key={index} 
                  className="hover:bg-blue-50/50 transition-colors text-[#113240]"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <td className="px-8 py-5 font-bold">{item.year}</td>
                  <td className="px-8 py-5 text-gray-700 italic">{item.tech || "-"}</td>
                  <td className="px-8 py-5 font-semibold text-orange-600">{item.rate}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </div>
  );
}
