import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import logo from '../assets/tttclogo.jpg';

export default function Header1() {
  const [show, setShow] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
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
      className={`fixed w-full h-[70px] flex justify-between bg-gray-50 items-center px-6 md:px-10 shadow-sm z-50 transition-all duration-300 ${
        show ? 'top-0' : '-top-[70px]'
      }`}
    >
      <Link to="/" className='h-[40px] md:h-[50px] flex items-center'>
        <img className="h-full" src={logo} alt="logo" />
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden lg:flex items-center gap-8 font-medium text-gray-700">
        {navLinks.map((link) => (
          <li key={link.name} className="relative group">
            <Link to={link.path} className="hover:text-[#E94560] transition-colors py-6 flex items-center gap-1 font-bold text-[#0F3460]">
              {link.name}
              {link.dropdown && (
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
              )}
            </Link>
            {link.dropdown && (
              <div className="absolute top-14 left-0 w-64 bg-white shadow-2xl rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 z-50 overflow-hidden border border-gray-100">
                <ul className="py-2">
                  {link.dropdown.map((sublink) => (
                    <li key={sublink.name}>
                      <Link to={sublink.path} className="block px-6 py-3 text-[#0F3460] hover:bg-[#EFF6FF] hover:text-[#E94560] transition-all duration-300 border-b border-gray-50 last:border-none font-semibold hover:pl-8">
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
          <button className="bg-[#E94560] text-white px-8 py-3 rounded-full hover:bg-[#B5223B] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 font-bold shadow-md shadow-[#E94560]/30">
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
        className={`fixed inset-0 top-[70px] bg-white z-40 transition-transform duration-300 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } lg:hidden flex flex-col p-8 gap-6 shadow-xl`}
      >
        {navLinks.map((link) => (
          <Link 
            key={link.path} 
            to={link.path} 
            className="text-xl font-bold text-[#0F3460] hover:text-[#E94560] border-b border-gray-100 pb-2"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </Link>
        ))}
          <button className="mt-4 bg-[#E94560] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#B5223B] transition-colors w-full">
            Enroll Now
          </button>
      </div>
    </header>
  );
}
