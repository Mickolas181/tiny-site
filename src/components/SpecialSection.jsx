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
        className='flex-1 min-w-[300px] max-w-xl relative'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h1 className='text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight'>{config.title}</h1>
        <p className='text-gray-500 leading-relaxed mb-4 text-base md:text-lg'>{config.p1}</p>
        <p className='text-gray-500 leading-relaxed mb-4 text-base md:text-lg'>{config.p2}</p>
        <p className='text-gray-500 leading-relaxed mb-10 text-base md:text-lg'>{config.p3}</p>
        
        <div className="flex flex-wrap items-center gap-6">
          <button className='border-2 border-[#E94560] text-[#E94560] px-8 py-3.5 rounded-full font-bold hover:bg-[#E94560] hover:text-white hover:shadow-[0_8px_30px_rgba(233,69,96,0.35)] hover:-translate-y-1 transition-all duration-300'>
            Learn More
          </button>
          
          <button className="flex items-center gap-4 group cursor-pointer">
            <div className="relative flex items-center justify-center w-14 h-14">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#00ADB5] opacity-50 animate-ping"></span>
              <div className="relative flex items-center justify-center w-full h-full bg-[#00ADB5] rounded-full text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4l12 6-12 6V4z" /></svg>
              </div>
            </div>
            <span className="font-bold text-[#0F3460] group-hover:text-[#00ADB5] transition-colors pt-1">Watch Video</span>
          </button>
        </div>
      </motion.div>

      <motion.div
        className='flex-1 min-w-[280px] relative flex justify-center group mt-10 md:mt-0'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Animated decorative blobs/blur shapes */}
        <motion.div 
          className='absolute w-40 h-40 md:w-56 md:h-56 bg-[#00ADB5]/30 rounded-full mix-blend-multiply filter blur-2xl opacity-80 top-[-10%] left-[-10%] z-0'
          animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        />
        <motion.div 
          className='absolute w-40 h-40 md:w-56 md:h-56 bg-[#E94560]/20 rounded-full mix-blend-multiply filter blur-2xl opacity-80 bottom-[-10%] right-[-10%] z-0'
          animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        />

        {/* The main image box */}
        <div className='w-64 h-64 md:w-80 md:h-80 overflow-hidden shadow-2xl transition-transform duration-700 ease-out group-hover:scale-105 relative z-10' style={{ borderRadius: '60% 40% 55% 45%/50% 60% 40% 50%' }}>
          <img src={AboutImg} alt="Therapy" className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110' />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F3460]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* Rotating border frame */}
        <motion.div 
          className='absolute w-72 h-72 md:w-96 md:h-96 border-4 border-dashed border-[#00ADB5] opacity-40 top-[-10px] md:top-[-15px] z-0' 
          style={{ borderRadius: '60% 40% 55% 45%/50% 60% 40% 50%' }} 
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        />

        {/* Bouncing star */}
        <motion.span
          className='absolute bottom-6 right-2 md:-right-4 text-4xl md:text-5xl z-20 drop-shadow-xl'
          animate={{ rotate: 360, y: [0, -15, 0] }}
          transition={{ rotate: { repeat: Infinity, duration: 15, ease: "linear" }, y: { repeat: Infinity, duration: 2.5, ease: "easeInOut" } }}
        >
          ✨
        </motion.span>
      </motion.div>
    </section>
  );
}