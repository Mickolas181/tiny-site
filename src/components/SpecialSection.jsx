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
    <section className='flex flex-wrap items-center gap-10 md:gap-16 px-6 md:px-24 py-16 md:py-24 bg-white overflow-hidden'>
      <motion.div
        className='flex-1 min-w-[300px] max-w-xl relative'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className="text-[#00ADB5] text-xs font-semibold uppercase tracking-widest mb-3">Understanding Autism</p>
        <h1 className='text-3xl md:text-5xl font-extrabold text-[#0F3460] mb-6 tracking-tight'>{config.title}</h1>
        <p className='text-slate-500 leading-relaxed mb-4 text-base md:text-lg'>{config.p1}</p>
        <p className='text-slate-500 leading-relaxed mb-4 text-base md:text-lg'>{config.p2}</p>
        <p className='text-slate-500 leading-relaxed mb-10 text-base md:text-lg'>{config.p3}</p>
        
        <div className="flex flex-wrap items-center gap-6">
          <button className='border-2 border-[#E94560] text-[#E94560] px-8 py-3.5 rounded-full font-semibold hover:bg-[#E94560] hover:text-white hover:shadow-[0_8px_30px_rgba(233,69,96,0.25)] hover:-translate-y-1 transition-all duration-300'>
            Learn More
          </button>
          
          <button className="flex items-center gap-4 group cursor-pointer">
            <div className="relative flex items-center justify-center w-14 h-14">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#00ADB5]/20 animate-[ping_2s_ease-in-out_infinite]"></span>
              <div className="relative flex items-center justify-center w-full h-full bg-[#00ADB5] rounded-full text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4l12 6-12 6V4z" /></svg>
              </div>
            </div>
            <span className="font-semibold text-[#0F3460] group-hover:text-[#00ADB5] transition-colors">Watch Video</span>
          </button>
        </div>
      </motion.div>

      <motion.div
        className='flex-1 min-w-[280px] relative flex justify-center group mt-10 md:mt-0'
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Subtle decorative blobs */}
        <div className='absolute w-40 h-40 md:w-56 md:h-56 bg-[#00ADB5]/15 rounded-full blur-3xl top-[-10%] left-[-10%] z-0' />
        <div className='absolute w-40 h-40 md:w-56 md:h-56 bg-[#E94560]/10 rounded-full blur-3xl bottom-[-10%] right-[-10%] z-0' />

        {/* Main image with clean rounded shape */}
        <div className='w-64 h-64 md:w-80 md:h-80 overflow-hidden shadow-[0_20px_60px_rgba(15,52,96,0.15)] transition-transform duration-500 group-hover:scale-105 relative z-10 rounded-[32%_68%_50%_50%/50%_32%_68%_50%]'>
          <img src={AboutImg} alt="Therapy" className='w-full h-full object-cover' />
        </div>

        {/* Clean accent ring */}
        <div 
          className='absolute w-72 h-72 md:w-[22rem] md:h-[22rem] border-2 border-[#00ADB5]/20 top-[-8px] z-0 rounded-[32%_68%_50%_50%/50%_32%_68%_50%]' 
        />
      </motion.div>
    </section>
  );
}