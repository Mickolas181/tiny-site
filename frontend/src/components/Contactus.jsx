import aboutImage from '../assets/about.png';
import { motion } from 'framer-motion';
import { FaPhone } from 'react-icons/fa';

const CLASSES_DATA = [
  { id: 1, title: "Anna Nagar", subtitle: "9176065624" },
  { id: 2, title: "Chennai", subtitle: "9176065624" },
  { id: 3, title: "Coimbatore", subtitle: "9176065624" },
  { id: 4, title: "Madurai", subtitle: "9176065624" },
  { id: 5, title: "Salem", subtitle: "9176065624" },
  { id: 6, title: "Tiruchirappalli", subtitle: "9176065624" },
];

export default function ClassesSection() {
  return (
    <section className="py-20 bg-[#F8FAFC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-[#00ADB5] text-xs md:text-sm font-semibold uppercase tracking-widest mb-2">On Going Branches</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F3460] mb-2">Our <span className="text-[#E94560]">Active Branches</span></h2>
          <p className="text-xl md:text-2xl font-medium text-slate-500">Join A Center Near You</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CLASSES_DATA.map((classItem, index) => (
            <motion.div
              key={classItem.id}
              className="relative bg-white/0 rounded-2xl transition-all duration-300 group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="overflow-hidden relative rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] group-hover:shadow-[0_8px_40px_rgba(0,0,0,0.10)] transition-all duration-300 group-hover:-translate-y-2">
                <img src={aboutImage} alt={classItem.title} className="w-full h-56 md:h-64 object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F3460]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6 bg-white text-center relative z-10 -mt-8 mx-4 md:mx-6 rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.08)] border-t-4 border-[#0F3460] group-hover:border-[#E94560] transition-all duration-300">
                <p className="text-[#00ADB5] text-sm font-semibold mb-1 tracking-wider uppercase group-hover:text-[#E94560] transition-colors duration-300 flex items-center justify-center gap-1.5">
                  <FaPhone className="text-xs" /> {classItem.subtitle}
                </p>
                <h3 className="text-xl font-bold text-[#0F3460]">{classItem.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-20 pt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-[#00ADB5] text-xs md:text-sm font-semibold uppercase tracking-widest mb-2">Join Our New Session</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F3460] mb-4 px-2">Call To Enroll Your Child</h2>
          <p className="text-2xl md:text-3xl font-bold text-[#E94560] mb-2 tracking-tight">+91 99413 50646</p>
          <p className="text-2xl md:text-3xl font-bold text-[#E94560] tracking-tight">+91 72995 35600</p>
        </motion.div>

      </div>
    </section>
  );
}