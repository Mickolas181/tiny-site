import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    quote: "Tiny Todds has been a blessing for our son. Within 6 months of occupational therapy, his sensory sensitivity reduced and he now enjoys school. The therapists are incredibly patient and skilled.",
    name: "Ramya Krishnan",
    initials: "RK",
    location: "Chennai",
    note: "Mother of 5-year-old with ASD",
    stars: 5,
  },
  {
    quote: "Our daughter couldn't speak a single word when we enrolled her. After 8 months of speech therapy at Tiny Todds Anna Nagar, she started forming sentences. We are so grateful!",
    name: "Suresh Babu",
    initials: "SB",
    location: "Anna Nagar",
    note: "Father of 4-year-old with Speech Delay",
    stars: 5,
  },
  {
    quote: "The team is very caring and professional. They helped us understand our child's ADHD and gave us home strategies. Now he focuses much better and even does his homework independently.",
    name: "Kavitha Mohan",
    initials: "KM",
    location: "Coimbatore",
    note: "Mother of 7-year-old with ADHD",
    stars: 5,
  },
  {
    quote: "I was worried when we first visited, but the friendly environment and patient therapists immediately put us at ease. The physiotherapy sessions have improved my son's walking posture completely.",
    name: "Arun Selvakumar",
    initials: "AS",
    location: "Madurai",
    note: "Father of 6-year-old with Motor Delay",
    stars: 5,
  },
  {
    quote: "Tiny Todds offered us hope when other centres couldn't. The special education program they designed for my daughter is personalised and effective. Highly recommend to all parents.",
    name: "Priya Sundaram",
    initials: "PS",
    location: "Tiruchirappalli",
    note: "Mother of 8-year-old with Learning Disability",
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
      {/* Subtle decorations */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#00ADB5]/8 rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E94560]/6 rounded-full translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-[#00ADB5] text-xs md:text-sm font-semibold uppercase tracking-widest mb-2">
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
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.98 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex justify-center mb-4 text-[#00ADB5]/60">
                <FaQuoteLeft className="text-3xl" />
              </div>

              <div className="flex justify-center gap-1 mb-4">
                {[...Array(t.stars)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>

              <p className="text-white/85 text-base md:text-lg leading-relaxed mb-8">
                {t.quote}
              </p>

              <div className="flex flex-col items-center gap-3">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#00ADB5] to-[#008B93] flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {t.initials}
                </div>
                <div>
                  <p className="text-white font-bold text-lg">{t.name}</p>
                  <p className="text-[#00ADB5] text-sm font-medium">{t.note}</p>
                  <p className="text-white/40 text-xs mt-0.5">{t.location}</p>
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
