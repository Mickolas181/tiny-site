import { motion } from 'framer-motion';

const therapists = [
  {
    name: 'Dr. Priya Rajan',
    role: 'Occupational Therapist',
    bio: 'Over 10 years of experience helping children with sensory processing and fine motor skill development.',
    emoji: '👩‍⚕️',
    accentBorder: 'border-[#0F3460]',
    badgeBg: 'bg-[#0F3460] text-white',
    avatarBg: 'bg-gradient-to-br from-[#0F3460] to-[#16213E]',
  },
  {
    name: 'Mr. Karthik Suresh',
    role: 'Speech-Language Therapist',
    bio: 'Specialises in non-verbal communication, AAC devices, and language development for autism spectrum children.',
    emoji: '🧑‍⚕️',
    accentBorder: 'border-[#00ADB5]',
    badgeBg: 'bg-[#00ADB5] text-white',
    avatarBg: 'bg-gradient-to-br from-[#00ADB5] to-[#007A82]',
  },
  {
    name: 'Ms. Deepa Lakshmi',
    role: 'Physiotherapist',
    bio: 'Expert in gross motor skill development, balance training, and mobility improvement for children.',
    emoji: '👩‍🦳',
    accentBorder: 'border-[#E94560]',
    badgeBg: 'bg-[#E94560] text-white',
    avatarBg: 'bg-gradient-to-br from-[#E94560] to-[#B5223B]',
  },
  {
    name: 'Ms. Anitha Selvam',
    role: 'Special Educator',
    bio: 'Designs individualised education plans (IEPs) to help children with learning disabilities achieve their potential.',
    emoji: '👩‍🏫',
    accentBorder: 'border-[#0F3460]',
    badgeBg: 'bg-[#0F3460] text-white',
    avatarBg: 'bg-gradient-to-br from-[#0F3460] to-[#16213E]',
  },
];

export default function TherapistTeam() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-[#00ADB5] text-xs md:text-sm font-bold uppercase tracking-widest mb-2">
            Our Expert Team
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F3460]">
            Meet Our <span className="text-[#E94560]">Therapists</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto mt-3 text-base md:text-lg">
            Our dedicated professional team is passionate about transforming lives — one child at a time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {therapists.map((t, i) => (
            <motion.div
              key={i}
              className={`bg-[#F4F9FC] rounded-2xl shadow-md hover:shadow-xl border-l-4 ${t.accentBorder} overflow-hidden flex flex-col sm:flex-row items-stretch group cursor-pointer transition-all duration-300 hover:-translate-y-2`}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className={`relative flex items-center justify-center ${t.avatarBg} w-full sm:w-36 min-h-[140px] sm:min-h-full flex-shrink-0`}>
                <span className="text-6xl drop-shadow-xl group-hover:scale-110 transition-transform duration-300">
                  {t.emoji}
                </span>
              </div>

              <div className="p-6 flex flex-col justify-center gap-2 flex-1">
                <span className={`self-start px-3 py-1 rounded-full text-xs font-bold ${t.badgeBg}`}>
                  {t.role}
                </span>
                <h3 className="text-xl font-extrabold text-[#0F3460]">{t.name}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{t.bio}</p>
                <div className="flex gap-2 mt-2">
                  {['📘', '🐦', '💼'].map((icon, idx) => (
                    <button
                      key={idx}
                      className="w-8 h-8 rounded-full bg-white border border-slate-200 hover:bg-[#00ADB5] hover:border-[#00ADB5] flex items-center justify-center text-sm transition-all duration-200"
                    >
                      {icon}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
