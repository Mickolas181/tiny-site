import aboutImage from '../assets/about.png';
import { motion } from 'framer-motion';

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
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-[#00ADB5] text-xs md:text-sm font-bold uppercase tracking-widest">On Going Branches</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F3460] mb-2">Our <span className="text-[#E94560]">Active Branches</span></h2>
          <h3 className="text-xl md:text-2xl font-semibold text-slate-500">Join A Center Near You</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CLASSES_DATA.map((classItem, index) => (
            <motion.div
              key={classItem.id}
              className="relative bg-white/0 rounded-2xl transition-all duration-300 group cursor-pointer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="overflow-hidden relative rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                <img src={aboutImage} alt={classItem.title} className="w-full h-56 md:h-64 object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6 bg-white text-center relative z-10 -mt-8 mx-4 md:mx-6 rounded-xl shadow-xl hover:shadow-2xl border-t-4 border-[#0F3460] group-hover:border-[#E94560] transition-all duration-300">
                <p className="text-[#00ADB5] text-sm font-bold mb-1 tracking-wider uppercase group-hover:text-[#E94560] transition-colors duration-300">📞 {classItem.subtitle}</p>
                <h3 className="text-xl font-extrabold text-[#0F3460]">{classItem.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-20 pt-10"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-[#00ADB5] text-xs md:text-sm font-bold uppercase tracking-widest">Join Our New Session</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F3460] mb-4 px-2">Call To Enroll Your Child</h2>
          <p className="text-2xl md:text-3xl font-bold text-[#E94560] mb-2 tracking-tight">+91 99413 50646</p>
          <p className="text-2xl md:text-3xl font-bold text-[#E94560] tracking-tight">+91 72995 35600</p>
        </motion.div>

      </div>
    </section>
  );
}