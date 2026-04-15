import { motion } from 'framer-motion';
import { FaBrain, FaMedal, FaUsers, FaGamepad, FaCrosshairs, FaShieldAlt } from 'react-icons/fa';

const features = [
  {
    icon: <FaBrain />,
    title: 'Structured Therapy',
    text: 'Evidence-based ABA, OT, and Speech therapy programs tailored for each child.',
    iconBg: 'bg-[#0F3460]',
  },
  {
    icon: <FaMedal />,
    title: 'Certified Therapists',
    text: 'Our team holds national certifications with years of hands-on clinical experience.',
    iconBg: 'bg-[#00ADB5]',
  },
  {
    icon: <FaUsers />,
    title: 'Parent Involvement',
    text: 'We train parents with practical home strategies to extend therapy outcomes.',
    iconBg: 'bg-[#E94560]',
  },
  {
    icon: <FaGamepad />,
    title: 'Play-Based Learning',
    text: 'Every session is fun and engaging — children learn best through joyful play.',
    iconBg: 'bg-[#0F3460]',
  },
  {
    icon: <FaCrosshairs />,
    title: 'Individual Attention',
    text: 'Low child-to-therapist ratio ensures personalised care for every child.',
    iconBg: 'bg-[#00ADB5]',
  },
  {
    icon: <FaShieldAlt />,
    title: 'Safe Environment',
    text: 'Specially designed sensory-friendly rooms that help children feel calm and secure.',
    iconBg: 'bg-[#E94560]',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 overflow-hidden relative bg-[#F0F4FF]">
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#00ADB5]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#0F3460]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-[#00ADB5] text-xs md:text-sm font-semibold uppercase tracking-widest mb-2">
            Why Parents Trust Us
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F3460] mb-4">
            Why Choose <span className="text-[#E94560]">Tiny Todds?</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-base md:text-lg">
            We provide holistic, compassionate therapy for children with Autism, ADHD, and developmental delays — right here in Tamil Nadu.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
          {features.map((f, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl p-7 flex flex-col items-start gap-4 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.10)] border border-slate-100/80 hover:-translate-y-2 transition-all duration-300 cursor-pointer group relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className={`w-12 h-12 rounded-xl ${f.iconBg} flex items-center justify-center text-white text-lg shadow-md group-hover:scale-110 transition-transform duration-300`}>
                {f.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#0F3460] mb-2">{f.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{f.text}</p>
              </div>
              <div className={`absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 ${f.iconBg}`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
