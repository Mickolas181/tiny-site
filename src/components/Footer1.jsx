import logo from '../assets/tttclogo.jpg';
import { HiArrowRight } from "react-icons/hi";
import { Link } from 'react-router-dom';

export default function Footer1() {
  return (
    <footer className="bg-[#0F3460] text-white py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row flex-wrap gap-12 md:gap-16 text-center md:text-left">

        {/* Brand */}
        <div className="flex-1 min-w-[280px] flex flex-col items-center md:items-start">
          <Link to="/">
            <img className="w-[160px] md:w-[180px] mb-5 rounded-xl" src={logo} alt="Logo" />
          </Link>
          <p className="text-white/60 leading-relaxed max-w-sm text-sm">
            The society today has to face lots of health challenges. Tiny Todds is committed to providing holistic therapy care to every child in need across Tamil Nadu.
          </p>
          <div className="flex gap-3 mt-6">
            {['📘', '📸', '🐦', '▶️'].map((icon, i) => (
              <button key={i} className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#00ADB5] flex items-center justify-center text-sm transition-all duration-300 hover:scale-110">
                {icon}
              </button>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="min-w-[180px] flex flex-col items-center md:items-start">
          <h2 className="text-lg font-bold text-white border-b-2 border-[#E94560] pb-2 mb-6 w-fit">Quick Links</h2>
          <ul className="space-y-3 w-full flex flex-col items-center md:items-start">
            <li><Link to="/" className="flex items-center gap-2 text-white/60 hover:text-[#00ADB5] transition-colors text-sm"><HiArrowRight className="text-[#E94560]" /> Home</Link></li>
            <li><Link to="/about-autism" className="flex items-center gap-2 text-white/60 hover:text-[#00ADB5] transition-colors text-sm"><HiArrowRight className="text-[#E94560]" /> About Autism</Link></li>
            <li><Link to="/about" className="flex items-center gap-2 text-white/60 hover:text-[#00ADB5] transition-colors text-sm"><HiArrowRight className="text-[#E94560]" /> About Us</Link></li>
            <li><Link to="/services" className="flex items-center gap-2 text-white/60 hover:text-[#00ADB5] transition-colors text-sm"><HiArrowRight className="text-[#E94560]" /> Services</Link></li>
            <li><Link to="/contact" className="flex items-center gap-2 text-white/60 hover:text-[#00ADB5] transition-colors text-sm"><HiArrowRight className="text-[#E94560]" /> Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="min-w-[250px] flex flex-col items-center md:items-start">
          <h2 className="text-lg font-bold text-white border-b-2 border-[#E94560] pb-2 mb-6 w-fit">Contact Us</h2>
          <ul className="space-y-3 w-full flex flex-col items-center md:items-start">
            <li className="flex items-start gap-2 text-white/60 text-sm">
              <HiArrowRight className="text-[#00ADB5] shrink-0 mt-1" />
              <span className="break-all">tinytoddstherapycare@gmail.com</span>
            </li>
            <li className="flex items-center gap-2 text-white/60 text-sm font-medium">
              <HiArrowRight className="text-[#00ADB5]" />
              <span>+91 99413 50646</span>
            </li>
            <li className="flex items-center gap-2 text-white/60 text-sm font-medium">
              <HiArrowRight className="text-[#00ADB5]" />
              <span>+91 72995 35600</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="mt-12 border-t border-white/10 pt-6 text-center text-white/40 text-xs">
        © {new Date().getFullYear()} Tiny Todds Therapy Care. All rights reserved.
      </div>
    </footer>
  );
}
