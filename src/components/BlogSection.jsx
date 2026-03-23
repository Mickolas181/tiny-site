import { motion } from 'framer-motion';

const articles = [
  {
    emoji: '🧩',
    tag: 'Autism Awareness',
    tagBg: 'bg-[#0F3460] text-white',
    title: 'Early Signs of Autism in Children Under 3',
    excerpt: 'Recognising early indicators — like limited eye contact, delayed speech, or repetitive behaviours — can lead to timely intervention and better outcomes.',
    date: 'March 10, 2025',
    author: 'Dr. Priya Rajan',
    readTime: '4 min read',
    headerBg: 'from-[#0F3460] to-[#16213E]',
    accentBar: 'bg-[#0F3460]',
  },
  {
    emoji: '🗣️',
    tag: 'Speech Therapy',
    tagBg: 'bg-[#00ADB5] text-white',
    title: 'Fun Speech Exercises You Can Do at Home Daily',
    excerpt: 'Simple, engaging activities using everyday objects — mirrors, songs, picture books — that support your child\'s speech progress outside of clinic sessions.',
    date: 'February 22, 2025',
    author: 'Mr. Karthik Suresh',
    readTime: '5 min read',
    headerBg: 'from-[#00ADB5] to-[#007A82]',
    accentBar: 'bg-[#00ADB5]',
  },
  {
    emoji: '🧠',
    tag: 'Child Development',
    tagBg: 'bg-[#E94560] text-white',
    title: 'Understanding Sensory Processing Disorder in Kids',
    excerpt: 'Many children with ADHD and ASD struggle with sensory overload. Learn effective coping strategies and how OT can help them manage daily sensory challenges.',
    date: 'January 15, 2025',
    author: 'Ms. Deepa Lakshmi',
    readTime: '6 min read',
    headerBg: 'from-[#E94560] to-[#B5223B]',
    accentBar: 'bg-[#E94560]',
  },
];

export default function BlogSection() {
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
            Tips & Resources
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F3460]">
            Latest <span className="text-[#E94560]">Articles & Tips</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto mt-3 text-base">
            Expert insights from our therapists to help you support your child's growth every day.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {articles.map((a, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl border border-slate-100 overflow-hidden group cursor-pointer transition-all duration-300 hover:-translate-y-2 flex flex-col"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className={`h-44 bg-gradient-to-br ${a.headerBg} flex items-center justify-center relative overflow-hidden`}>
                <span className="text-7xl group-hover:scale-125 transition-transform duration-500 drop-shadow-xl">
                  {a.emoji}
                </span>
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${a.tagBg}`}>
                    {a.tag}
                  </span>
                </div>
              </div>

              {/* Top accent bar on hover */}
              <div className={`h-1 w-0 group-hover:w-full transition-all duration-500 ${a.accentBar}`} />

              <div className="p-6 flex flex-col gap-3 flex-1">
                <h3 className="text-lg font-extrabold text-[#0F3460] leading-snug group-hover:text-[#E94560] transition-colors duration-300">
                  {a.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed flex-1">{a.excerpt}</p>

                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 pt-2 border-t border-slate-100">
                  <span>📅 {a.date}</span>
                  <span>·</span>
                  <span>✍️ {a.author}</span>
                  <span>·</span>
                  <span>⏱ {a.readTime}</span>
                </div>

                <button className="mt-1 text-[#00ADB5] font-bold text-sm flex items-center gap-1 hover:gap-3 transition-all duration-300 group/btn w-fit">
                  Read More
                  <span className="group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
