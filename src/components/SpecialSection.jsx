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
    <section className='flex flex-wrap items-center gap-10 md:gap-16 px-6 md:px-24 py-12 md:py-20 bg-white overflow-hidden'>
      <motion.div
        className='flex-1 min-w-[300px] max-w-xl'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h1 className='text-3xl md:text-4xl font-extrabold text-gray-900 mb-5'>{config.title}</h1>
        <p className='text-gray-500 leading-relaxed mb-3'>{config.p1}</p>
        <p className='text-gray-500 leading-relaxed mb-3'>{config.p2}</p>
        <p className='text-gray-500 leading-relaxed mb-8'>{config.p3}</p>
        <button className='border-2 border-orange-500 text-orange-500 px-8 py-3 rounded-full font-semibold hover:bg-orange-500 hover:text-white transition-colors duration-300'>
          Learn More
        </button>
      </motion.div>

      <motion.div
        className='flex-1 min-w-[280px] relative flex justify-center'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className='w-64 h-64 md:w-80 md:h-80 overflow-hidden shadow-2xl' style={{ borderRadius: '60% 40% 55% 45%/50% 60% 40% 50%' }}>
          <img src={AboutImg} alt="Therapy" className='w-full h-full object-cover' />
        </div>
        <div className='absolute w-72 h-72 md:w-96 md:h-96 border-4 border-orange-400 opacity-30 top-[-10px] md:top-[-15px]' style={{ borderRadius: '60% 40% 55% 45%/50% 60% 40% 50%' }} />
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