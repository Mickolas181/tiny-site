import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import logo from '../assets/tttclogo.jpg';

export default function Header1() {
  const [show, setShow] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);
      if (currentScrollY > lastY.current) {
        setShow(false);
        setIsOpen(false);
      } else {
        setShow(true);
      }
      lastY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', path: '/' },
    { 
      name: 'About', 
      path: '#',
      dropdown: [
        { name: 'About Us', path: '/about' },
        { name: 'About Autism', path: '/about-autism' }
      ]
    },
    { 
      name: 'Services', 
      path: '/services',
      dropdown: [
        { name: 'Occupational Therapy', path: '/services/occupational-therapy' },
        { name: 'Speech Therapy',       path: '/services/speech-therapy' },
        { name: 'Physiotherapy',        path: '/services/physiotherapy' },
        { name: 'Special Education',    path: '/services/special-education' }
      ]
    },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <header
      className={`fixed w-full h-[70px] flex justify-between items-center px-6 md:px-10 z-50 transition-all duration-500 ${
        show ? 'top-0' : '-top-[70px]'
      } ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-[0_1px_20px_rgba(0,0,0,0.06)] border-b border-slate-200/60'
          : 'bg-white/95 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <Link to="/" className='h-[40px] md:h-[50px] flex items-center'>
        <img className="h-full" src={logo} alt="Tiny Todds Therapy Care" />
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden lg:flex items-center gap-8 font-medium text-slate-700">
        {navLinks.map((link) => (
          <li key={link.name} className="relative group">
            <Link to={link.path} className="hover:text-[#E94560] transition-colors duration-300 py-6 flex items-center gap-1 font-semibold text-[#0F3460]">
              {link.name}
              {link.dropdown && (
                <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
              )}
            </Link>
            {link.dropdown && (
              <div className="absolute top-14 left-0 w-60 bg-white/95 backdrop-blur-xl shadow-[0_12px_48px_rgba(0,0,0,0.12)] rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-3 group-hover:translate-y-0 z-50 overflow-hidden border border-slate-100">
                <ul className="py-1">
                  {link.dropdown.map((sublink) => (
                    <li key={sublink.name}>
                      <Link to={sublink.path} className="block px-5 py-3 text-[#0F3460] hover:bg-slate-50 hover:text-[#E94560] transition-all duration-200 font-medium text-sm hover:pl-6">
                        {sublink.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
        <li>
          <button className="bg-gradient-to-r from-[#E94560] to-[#B5223B] text-white px-7 py-2.5 rounded-full hover:shadow-[0_8px_30px_rgba(233,69,96,0.35)] hover:-translate-y-0.5 transition-all duration-300 font-semibold text-sm">
            Enroll Now
          </button>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button 
        className="lg:hidden p-2 text-[#0F3460] hover:text-[#E94560] transition-colors"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
      </button>

      {/* Mobile Navigation Overlay */}
      <div 
        className={`fixed inset-0 top-[70px] bg-white/95 backdrop-blur-xl z-40 transition-transform duration-300 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } lg:hidden flex flex-col p-8 gap-5 shadow-xl`}
      >
        {navLinks.map((link) => (
          <Link 
            key={link.path} 
            to={link.path} 
            className="text-lg font-semibold text-[#0F3460] hover:text-[#E94560] border-b border-slate-100 pb-3 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </Link>
        ))}
        <button className="mt-4 bg-gradient-to-r from-[#E94560] to-[#B5223B] text-white px-8 py-3 rounded-xl font-semibold transition-all w-full shadow-lg">
          Enroll Now
        </button>
      </div>
    </header>
  );
}
