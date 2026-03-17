import nav from '../assets/nav.jpg';
import { HiArrowRight } from "react-icons/hi";
import { Link } from 'react-router-dom';

export default function Footer1() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-20">
      <div className="max-w-7xl mx-auto px-10 flex flex-wrap gap-20">
        <div className="flex-1 min-w-[300px]">
          <Link to="/">
            <img className="w-[200px] mb-6" src={nav} alt="Logo" />
          </Link>
          <p className="text-gray-600 leading-relaxed max-w-sm">
            The society today has to face lots of health challenges. Some of the physical and mental disorders which were very rare in the olden times have started occurring and spreading fast as an epidemic.
          </p>
        </div>

        <div className="min-w-[200px]">
          <h2 className="text-xl font-bold text-gray-900 border-b-2 border-orange-500 pb-2 mb-6 w-fit">Quick Links</h2>
          <ul className="space-y-4">
            <li><Link to="/" className="flex items-center gap-2 text-gray-600 hover:text-orange-500 transition-colors"><HiArrowRight className="text-orange-500" /> Home</Link></li>
            <li><Link to="/about-autism" className="flex items-center gap-2 text-gray-600 hover:text-orange-500 transition-colors"><HiArrowRight className="text-orange-500" /> About Autism</Link></li>
            <li><Link to="/about" className="flex items-center gap-2 text-gray-600 hover:text-orange-500 transition-colors"><HiArrowRight className="text-orange-500" /> About Us</Link></li>
            <li><Link to="/services" className="flex items-center gap-2 text-gray-600 hover:text-orange-500 transition-colors"><HiArrowRight className="text-orange-500" /> Services</Link></li>
            <li><Link to="/contact" className="flex items-center gap-2 text-gray-600 hover:text-orange-500 transition-colors"><HiArrowRight className="text-orange-500" /> Contact Us</Link></li>
          </ul>
        </div>

        <div className="min-w-[250px]">
          <h2 className="text-xl font-bold text-gray-900 border-b-2 border-orange-500 pb-2 mb-6 w-fit">Contact Us</h2>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-gray-600">
              <HiArrowRight className="text-orange-500 shrink-0" />
              <span className="break-all">tinytoddstherapycare@gmail.com</span>
            </li>
            <li className="flex items-center gap-2 text-gray-600">
              <HiArrowRight className="text-orange-500" />
              <span>+91 99413 50646</span>
            </li>
            <li className="flex items-center gap-2 text-gray-600">
              <HiArrowRight className="text-orange-500" />
              <span>+91 72995 35600</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
