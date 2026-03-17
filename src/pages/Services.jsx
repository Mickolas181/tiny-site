import React from 'react';
import { Link } from 'react-router-dom';  
import { motion } from 'framer-motion';
// Unga hero background image-ah inga import pannikonga
// import servicesBg from '../assets/services-bg.jpg'; 

export default function Services() {

    return (
    <div className="font-sans overflow-hidden">
      
      {/* --- Hero Banner Section --- */}
      <div 
        className="relative w-full h-[300px] md:h-[400px] bg-cover bg-center flex flex-col justify-center items-center text-white"
        // style={{ backgroundImage: `url(${servicesBg})` }} // Image add panna idha uncomment pannunga
        style={{ backgroundColor: '#4a5568' }} // Image illana indha dummy color theriyum
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          
        <motion.div 
          className="relative z-10 text-center px-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight drop-shadow-lg">Services</h1>
          <nav className="flex items-center justify-center gap-2 text-lg font-semibold bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full mx-auto w-fit border border-white/20">
            <Link to="/" className="text-orange-400 hover:text-orange-300 transition-colors">Home</Link>
            <span className="text-gray-400">/</span>
            <span className="text-white">Services</span>  
          </nav>
        </motion.div>
      </div>

      {/* --- Main Content Section --- */}
      <div className="max-w-6xl mx-auto px-4 py-16 text-gray-700">
        
        {/* Top Two Columns: Our Services & Used Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 ml-4 md:ml-10">
          
          {/* Our Services */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-[#fe5d44] mb-6">Our Services</h2>
            <ul className="space-y-3 text-gray-600 font-medium">
              <li>Occupation Therapy</li>
              <li>Speech Therapy</li>
              <li>Physiotherapy</li>
              <li>Special Education</li>
            </ul>
          </motion.div>

          {/* Used Methods */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-[#fe5d44] mb-6">Used Methods</h2>
            <ul className="space-y-3 text-gray-600 font-medium">
              <li>Inclusion</li>
              <li>Mainstreaming</li>
              <li>Exclusion</li>
              <li>Segreation</li>
            </ul>
          </motion.div>
          
        </div>

        {/* Common Special Needs Section */}
        <div className="ml-4 md:ml-10">
          <motion.h2 
            className="text-2xl font-bold text-[#fe5d44] mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Common Special needs include
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
            
            {/* Neurodevelopmental */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3 className="text-lg font-bold text-gray-800 mb-4 uppercase">NEURODEVELOPMENTAL THERAPY:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Poor Head Control</li>
                <li>Poor Trunk Control</li>
                <li>Poor Sitting Balance</li>
                <li>Difficulty in Crawling</li>
                <li>Poor Standing Balance and Walking</li>
              </ul>
            </motion.div>

            {/* Sensory Integration */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3 className="text-lg font-bold text-gray-800 mb-4 uppercase">SENSORY INTEGRATION THERAPY:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Fear of Height (gravitational insecurity)</li>
                <li>Aversion to touch eg., refuse to hair cut and nail cut, refuse to wear certain textured cloth, avoid Sticky things, feel irritable while walking in grass with bare foot.</li>
                <li>Difficulty in concentrate an activity.</li>
                <li>Difficulty in sitting straight for long period. (frequently changing the posture)</li>
                <li>Closes ear for loud noise and seek more noise</li>
                <li>Hyperactivity and inattention</li>
                <li>Poor Social Interaction</li>
                <li>Clumsiness and Poor Gross and Fine Motor Co-ordination</li>
              </ul>
            </motion.div>

            {/* Hand Writing */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3 className="text-lg font-bold text-gray-800 mb-4 uppercase">HAND WRITING IMPROVEMENT:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Poor Legibility</li>
                <li>Inadequate Spacing and Size</li>
                <li>Slow Writing</li>
                <li>Poor Copying</li>
                <li>Mirror Image in Writing eg, Write "WAS" as "SAW"</li>
              </ul>
            </motion.div>

            {/* Cognitive Function */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3 className="text-lg font-bold text-gray-800 mb-4 uppercase">COGNITIVE FUNCTION:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Poor Memory</li>
                <li>Poor Attention and Concentration</li>
                <li>Poor Problem Solving</li>
                <li>Poor Judgement</li>
              </ul>
            </motion.div>

          </div>
        </div>

      </div>
    </div>
  );
}