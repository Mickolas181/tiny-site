import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    quote: "Tiny Todds has been a blessing for our son. Within 6 months of occupational therapy, his sensory sensitivity reduced and he now enjoys school. The therapists are incredibly patient and skilled.",
    name: "Ramya Krishnan",
    location: "Chennai",
    note: "Mother of 5-year-old with ASD",
    avatar: "👩",
    stars: 5,
  },
  {
    quote: "Our daughter couldn't speak a single word when we enrolled her. After 8 months of speech therapy at Tiny Todds Anna Nagar, she started forming sentences. We are so grateful!",
    name: "Suresh Babu",
    location: "Anna Nagar",
    note: "Father of 4-year-old with Speech Delay",
    avatar: "👨",
    stars: 5,
  },
  {
    quote: "The team is very caring and professional. They helped us understand our child's ADHD and gave us home strategies. Now he focuses much better and even does his homework independently.",
    name: "Kavitha Mohan",
    location: "Coimbatore",
    note: "Mother of 7-year-old with ADHD",
    avatar: "👩‍🦱",
    stars: 5,
  },
  {
    quote: "I was worried when we first visited, but the friendly environment and patient therapists immediately put us at ease. The physiotherapy sessions have improved my son's walking posture completely.",
    name: "Arun Selvakumar",
    location: "Madurai",
    note: "Father of 6-year-old with Motor Delay",
    avatar: "🧔",
    stars: 5,
  },
  {
    quote: "Tiny Todds offered us hope when other centres couldn't. The special education program they designed for my daughter is personalised and effective. Highly recommend to all parents.",
    name: "Priya Sundaram",
    location: "Tiruchirappalli",
    note: "Mother of 8-year-old with Learning Disability",
    avatar: "👩‍🦳",
    stars: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[current];

  return (
    <section className="py-20 bg-[#0F3460] overflow-hidden relative">
      {/* Subtle geometric decorations */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#00ADB5]/10 rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E94560]/10 rounded-full translate-y-1/2 -translate-x-1/3 pointer-events-none" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEuNSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA0KSIvPjwvc3ZnPg==')] pointer-events-none opacity-60" />

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-[#00ADB5] text-xs md:text-sm font-bold uppercase tracking-widest mb-2">
            Parents Say
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            What Our <span className="text-[#E94560]">Parents Say</span>
          </h2>
        </motion.div>

        <div className="relative min-h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-12 text-center shadow-2xl w-full"
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.97 }}
              transition={{ duration: 0.45 }}
            >
              <div className="text-[#00ADB5] text-5xl font-serif mb-3 leading-none">"</div>

              <div className="flex justify-center gap-1 mb-4">
                {[...Array(t.stars)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>

              <p className="text-white/85 text-base md:text-lg leading-relaxed mb-8">
                {t.quote}
              </p>

              <div className="flex flex-col items-center gap-2">
                <span className="text-5xl">{t.avatar}</span>
                <div>
                  <p className="text-white font-extrabold text-lg">{t.name}</p>
                  <p className="text-[#00ADB5] text-sm font-semibold">{t.note}</p>
                  <p className="text-white/40 text-xs mt-0.5">📍 {t.location}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? 'bg-[#E94560] w-6' : 'bg-white/25 w-2 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
