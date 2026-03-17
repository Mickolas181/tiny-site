import AboutImg from '../assets/about.png';
import { motion } from 'framer-motion';

const config = {
  title: 'They Are Special',
  p1: 'Autism, we all heard about this disorder. Earlier days it was very rare — 1 in 10,000 children in 1970. Recently, statistics says 1 in 40 children are affected.',
  p2: "Many researchers say Autism is not curable. When there is a problem there must be a solution — probably we haven't identified the cause yet.",
  p3: "Let's connect few dots to find out what might be the major cause for Autism.",
};

export default function SpecialSection() {
  return (
    <section className='flex flex-wrap items-center gap-16 px-24 py-50 bg-white overflow-hidden'>
      {/* Text Section Animation Wrapper */}
      <motion.div 
        className='flex-1 min-w-[300px] max-w-xl'
        initial={{ opacity: 0, x: -50 }} // Left la irunthu varum
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h1 className='text-4xl font-extrabold text-gray-900 mb-5'>{config.title}</h1>
        <p className='text-gray-500 leading-relaxed mb-3'>{config.p1}</p>
        <p className='text-gray-500 leading-relaxed mb-3'>{config.p2}</p>
        <p className='text-gray-500 leading-relaxed mb-8'>{config.p3}</p>
        <button className='border-2 border-orange-500 text-orange-500 px-8 py-3 rounded-full font-semibold hover:bg-orange-500 hover:text-white transition-colors duration-300'>
          Learn More
        </button>
      </motion.div>

      {/* Image Section Animation Wrapper */}
      <motion.div 
        className='flex-1 min-w-[280px] relative flex justify-center'
        initial={{ opacity: 0, x: 50 }} // Right la irunthu varum
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className='w-80 h-80 overflow-hidden shadow-2xl' style={{borderRadius:'60% 40% 55% 45%/50% 60% 40% 50%'}}>
          <img src={AboutImg} alt="Therapy" className='w-full h-full object-cover' />
        </div>
        <div className='absolute w-96 h-96 border-4 border-orange-400 opacity-30 top-[-15px]' style={{borderRadius:'60% 40% 55% 45%/50% 60% 40% 50%'}} />
        
        {/* Adhiga animation thevai na Star ku idhol pol tharalam */}
        <motion.span 
          className='absolute bottom-2 right-2 text-3xl'
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          ⭐
        </motion.span>

      </motion.div>
    </section>
  );
}