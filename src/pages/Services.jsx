import React from 'react';
import { Link } from 'react-router-dom';  
import { motion } from 'framer-motion';
import { FaCheck, FaArrowRight } from 'react-icons/fa';
import servicesBg from '../assets/services_hero_bg.jpg'; 

export default function Services() {
  return (
    <div className="overflow-hidden">
      <div 
        className="relative w-full h-[300px] md:h-[400px] bg-cover bg-center flex flex-col justify-center items-center text-white"
        style={{ backgroundImage: `url("${servicesBg}")` }}
      >
        <div className="absolute inset-0 bg-[#0F3460]/70"></div>
        <motion.div 
          className="relative z-10 text-center px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight drop-shadow-lg">Services</h1>
          <nav className="flex items-center justify-center gap-2 text-sm font-semibold bg-white/10 backdrop-blur-sm px-5 py-2 rounded-full mx-auto w-fit border border-white/20">
            <Link to="/" className="text-[#00ADB5] hover:text-white transition-colors">Home</Link>
            <span className="text-white/40">/</span>
            <span className="text-white">Services</span>  
          </nav>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-slate-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-xl font-bold text-[#E94560] mb-5 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-[#E94560] flex items-center justify-center text-white text-xs"><FaCheck /></span>
              Our Services
            </h2>
            <ul className="space-y-3">
              {['Occupational Therapy', 'Speech Therapy', 'Physiotherapy', 'Special Education'].map((s, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                  <FaArrowRight className="text-[#00ADB5] text-xs flex-shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-slate-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-xl font-bold text-[#E94560] mb-5 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-[#E94560] flex items-center justify-center text-white text-xs"><FaCheck /></span>
              Used Methods
            </h2>
            <ul className="space-y-3">
              {['Inclusion', 'Mainstreaming', 'Exclusion', 'Segregation'].map((s, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                  <FaArrowRight className="text-[#00ADB5] text-xs flex-shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div>
          <motion.h2 
            className="text-xl font-bold text-[#E94560] mb-8 flex items-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="w-8 h-8 rounded-lg bg-[#0F3460] flex items-center justify-center text-white text-xs"><FaCheck /></span>
            Common Special Needs Include
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Neurodevelopmental Therapy',
                items: ['Poor Head Control', 'Poor Trunk Control', 'Poor Sitting Balance', 'Difficulty in Crawling', 'Poor Standing Balance and Walking'],
              },
              {
                title: 'Sensory Integration Therapy',
                items: ['Fear of Height (gravitational insecurity)', 'Aversion to touch — refuse to hair cut and nail cut, refuse to wear certain textured cloth', 'Difficulty in concentrating on an activity', 'Difficulty in sitting straight for long periods', 'Closes ear for loud noise and seeks more noise', 'Hyperactivity and inattention', 'Poor Social Interaction', 'Clumsiness and Poor Gross and Fine Motor Co-ordination'],
              },
              {
                title: 'Handwriting Improvement',
                items: ['Poor Legibility', 'Inadequate Spacing and Size', 'Slow Writing', 'Poor Copying', 'Mirror Image in Writing e.g. Write "WAS" as "SAW"'],
              },
              {
                title: 'Cognitive Function',
                items: ['Poor Memory', 'Poor Attention and Concentration', 'Poor Problem Solving', 'Poor Judgement'],
              },
            ].map((section, si) => (
              <motion.div
                key={si}
                className="bg-white rounded-2xl p-7 shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-slate-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: si * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <h3 className="text-base font-bold text-[#0F3460] mb-4 uppercase tracking-wide">{section.title}</h3>
                <ul className="space-y-2.5">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-slate-600 text-sm leading-relaxed">
                      <FaArrowRight className="text-[#E94560] text-xs mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}