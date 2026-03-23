import { motion } from 'framer-motion';

const features = [
  {
    icon: '🧠',
    title: 'Structured Therapy',
    text: 'Evidence-based ABA, OT, and Speech therapy programs tailored for each child.',
    iconBg: 'bg-[#0F3460]',
    border: 'border-[#0F3460]/10',
    bg: 'bg-white',
    tagColor: 'text-[#00ADB5]',
  },
  {
    icon: '🏅',
    title: 'Certified Therapists',
    text: 'Our team holds national certifications with years of hands-on clinical experience.',
    iconBg: 'bg-[#00ADB5]',
    border: 'border-[#00ADB5]/10',
    bg: 'bg-white',
    tagColor: 'text-[#0F3460]',
  },
  {
    icon: '👨‍👩‍👧',
    title: 'Parent Involvement',
    text: 'We train parents with practical home strategies to extend therapy outcomes.',
    iconBg: 'bg-[#E94560]',
    border: 'border-[#E94560]/10',
    bg: 'bg-white',
    tagColor: 'text-[#E94560]',
  },
  {
    icon: '🎮',
    title: 'Play-Based Learning',
    text: 'Every session is fun and engaging — children learn best through joyful play.',
    iconBg: 'bg-[#0F3460]',
    border: 'border-[#0F3460]/10',
    bg: 'bg-white',
    tagColor: 'text-[#00ADB5]',
  },
  {
    icon: '🎯',
    title: 'Individual Attention',
    text: 'Low child-to-therapist ratio ensures personalised care for every child.',
    iconBg: 'bg-[#00ADB5]',
    border: 'border-[#00ADB5]/10',
    bg: 'bg-white',
    tagColor: 'text-[#0F3460]',
  },
  {
    icon: '🛡️',
    title: 'Safe Environment',
    text: 'Specially designed sensory-friendly rooms that help children feel calm and secure.',
    iconBg: 'bg-[#E94560]',
    border: 'border-[#E94560]/10',
    bg: 'bg-white',
    tagColor: 'text-[#E94560]',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 overflow-hidden relative bg-[#EFF6FF]">
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#00ADB5]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#0F3460]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-[#00ADB5] text-xs md:text-sm font-bold uppercase tracking-widest mb-2">
            Why Parents Trust Us
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F3460] mb-4">
            Why Choose <span className="text-[#E94560]">Tiny Todds?</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-base md:text-lg">
            We provide holistic, compassionate therapy for children with Autism, ADHD, and developmental delays — right here in Tamil Nadu.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              className={`${f.bg} rounded-2xl p-7 flex flex-col items-start gap-4 shadow-md hover:shadow-xl border ${f.border} hover:-translate-y-3 transition-all duration-300 cursor-pointer group relative overflow-hidden`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className={`w-14 h-14 rounded-xl ${f.iconBg} flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {f.icon}
              </div>
              <div>
                <h3 className={`text-lg md:text-xl font-extrabold text-[#0F3460] mb-2`}>{f.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm md:text-base">{f.text}</p>
              </div>
              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 ${f.iconBg}`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
