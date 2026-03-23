import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHandPaper, FaComments, FaRunning, FaBookOpen, FaCheck, FaUserFriends, FaArrowRight, FaPhone } from 'react-icons/fa';
import servicesBg from '../assets/services_hero_bg.jpg';
import WhyChooseUs from '../components/WhyChooseUs';
import TherapistTeam from '../components/TherapistTeam';
import Testimonials from '../components/Testimonials';
import BlogSection from '../components/BlogSection';
import ClassesSection from '../components/Contactus';

const serviceData = {
  'occupational-therapy': {
    title: 'Occupational Therapy',
    icon: <FaHandPaper />,
    color: '#0F3460',
    tagline: 'Building Independence Through Purposeful Activity',
    intro: 'Occupational Therapy (OT) at Tiny Todds focuses on helping children develop the essential skills needed for daily life — from self-care to handwriting to social interaction. Our certified OTs use evidence-based methods tailored to each child\'s unique needs.',
    whatWeDo: [
      'Sensory Integration Therapy (SI)',
      'Fine Motor Skill Development',
      'Gross Motor Coordination',
      'Handwriting Improvement',
      'Self-Care & Daily Living Skills',
      'Cognitive Function Training',
    ],
    whoItHelps: ['Autism Spectrum Disorder (ASD)', 'ADHD', 'Developmental Delay', 'Cerebral Palsy', 'Sensory Processing Disorder', 'Learning Disabilities'],
  },
  'speech-therapy': {
    title: 'Speech Therapy',
    icon: <FaComments />,
    color: '#00ADB5',
    tagline: 'Giving Every Child a Voice',
    intro: 'Speech-Language Therapy at Tiny Todds addresses communication challenges across all levels — from non-verbal children to those with articulation difficulties. We use play-based, child-friendly techniques to build language, voice, and social communication skills.',
    whatWeDo: [
      'Expressive & Receptive Language Development',
      'Articulation & Phonological Therapy',
      'AAC (Augmentative & Alternative Communication)',
      'Fluency & Stuttering Therapy',
      'Social Communication Skills',
      'Swallowing & Feeding Therapy',
    ],
    whoItHelps: ['Autism Spectrum Disorder (ASD)', 'Speech Delay', 'Language Delay', 'Hearing Impairment', 'Apraxia of Speech', 'Selective Mutism'],
  },
  'physiotherapy': {
    title: 'Physiotherapy',
    icon: <FaRunning />,
    color: '#E94560',
    tagline: 'Moving Towards a Stronger Future',
    intro: 'Physiotherapy at Tiny Todds helps children improve their physical function, mobility, and independence. Our physiotherapists work on strength, balance, coordination, and posture correction using child-friendly therapy techniques in a safe, encouraging environment.',
    whatWeDo: [
      'Gross Motor Skill Development',
      'Balance & Coordination Training',
      'Neurodevelopmental Therapy (NDT)',
      'Gait Training & Walking Improvement',
      'Posture Correction',
      'Muscle Strength & Flexibility',
    ],
    whoItHelps: ['Cerebral Palsy', 'Muscular Dystrophy', 'Developmental Delay', 'Down Syndrome', 'Spina Bifida', 'Post-Surgical Rehabilitation'],
  },
  'special-education': {
    title: 'Special Education',
    icon: <FaBookOpen />,
    color: '#0F3460',
    tagline: 'Every Child Deserves to Learn Their Way',
    intro: 'Special Education at Tiny Todds provides personalised Individualised Education Plans (IEPs) designed to help children with learning disabilities reach their academic and life-skill potential. Our special educators are certified professionals who believe every child can achieve.',
    whatWeDo: [
      'Individualised Education Plans (IEP)',
      'Reading & Writing Remediation',
      'Mathematics Skill Building',
      'Behavioural Intervention Strategies',
      'Life Skills Training',
      'Inclusive Education Support',
    ],
    whoItHelps: ['Learning Disabilities (Dyslexia, Dyscalculia)', 'Autism Spectrum Disorder (ASD)', 'Intellectual Disability', 'ADHD', 'Slow Learners', 'Behavioural Challenges'],
  },
};

export default function ServicePage({ service }) {
  const data = serviceData[service];
  if (!data) return null;

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <div
        className="relative w-full h-[300px] md:h-[400px] bg-cover bg-center flex flex-col justify-center items-center text-white"
        style={{ backgroundImage: `url("${servicesBg}")` }}
      >
        <div className="absolute inset-0 bg-[#0F3460]/70" />
        <motion.div className="relative z-10 text-center px-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center text-2xl text-white shadow-lg">
            {data.icon}
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-3 drop-shadow-lg tracking-tight">{data.title}</h1>
          <p className="text-white/80 text-base md:text-lg mb-4">{data.tagline}</p>
          <nav className="flex items-center justify-center gap-2 text-sm font-semibold bg-white/10 backdrop-blur-sm px-5 py-2 rounded-full mx-auto w-fit border border-white/20">
            <Link to="/" className="text-[#00ADB5] hover:text-white transition-colors">Home</Link>
            <span className="text-white/40">/</span>
            <Link to="/services" className="text-[#00ADB5] hover:text-white transition-colors">Services</Link>
            <span className="text-white/40">/</span>
            <span className="text-white">{data.title}</span>
          </nav>
        </motion.div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Intro */}
        <motion.div className="text-center max-w-3xl mx-auto mb-14"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
          <p className="text-[#00ADB5] text-xs font-semibold uppercase tracking-widest mb-3">About This Service</p>
          <p className="text-slate-500 text-base md:text-lg leading-relaxed">{data.intro}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16">
          {/* What We Do */}
          <motion.div className="bg-white rounded-2xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-slate-100"
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-xl font-bold text-[#0F3460] mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-[#0F3460] text-white flex items-center justify-center text-sm shadow-md">
                <FaCheck />
              </span>
              What We Do
            </h2>
            <ul className="space-y-3">
              {data.whatWeDo.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700">
                  <FaArrowRight className="text-[#00ADB5] text-xs mt-1.5 flex-shrink-0" />
                  <span className="text-sm md:text-base font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Who It Helps */}
          <motion.div className="bg-white rounded-2xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-slate-100"
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-xl font-bold text-[#0F3460] mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-[#E94560] text-white flex items-center justify-center text-sm shadow-md">
                <FaUserFriends />
              </span>
              Who It Helps
            </h2>
            <ul className="space-y-3">
              {data.whoItHelps.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700">
                  <FaArrowRight className="text-[#E94560] text-xs mt-1.5 flex-shrink-0" />
                  <span className="text-sm md:text-base font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div className="text-center bg-[#0F3460] rounded-2xl py-12 px-6 shadow-xl"
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <p className="text-[#00ADB5] text-xs font-semibold uppercase tracking-widest mb-2">Get Started Today</p>
          <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4">Book a Free Consultation</h3>
          <p className="text-white/60 mb-6 text-sm md:text-base">Call us or visit your nearest Tiny Todds center across Tamil Nadu.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+919941350646" className="bg-gradient-to-r from-[#E94560] to-[#B5223B] text-white px-8 py-3.5 rounded-full font-semibold hover:shadow-[0_8px_30px_rgba(233,69,96,0.35)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 text-sm">
              <FaPhone className="text-xs" /> +91 99413 50646
            </a>
            <Link to="/contact" className="border-2 border-[#00ADB5] text-[#00ADB5] px-8 py-3.5 rounded-full font-semibold hover:bg-[#00ADB5] hover:text-white transition-all duration-300 text-sm">
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Shared homepage sections */}
      <WhyChooseUs />
      <TherapistTeam />
      <Testimonials />
      <BlogSection />
      <ClassesSection />
    </div>
  );
}

// Named page exports for each service
export function OccupationalTherapyPage() { return <ServicePage service="occupational-therapy" />; }
export function SpeechTherapyPage()        { return <ServicePage service="speech-therapy" />; }
export function PhysiotherapyPage()        { return <ServicePage service="physiotherapy" />; }
export function SpecialEducationPage()     { return <ServicePage service="special-education" />; }
