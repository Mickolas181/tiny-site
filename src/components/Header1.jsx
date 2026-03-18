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
    { name: 'About Autism', path: '/about-autism' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
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
          <li key={link.path}>
            <Link to={link.path} className="hover:text-orange-500 transition-colors">
              {link.name}
            </Link>
          </li>
        ))}
        <li>
          <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors">
            Login
          </button>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button 
        className="lg:hidden p-2 text-gray-700 hover:text-orange-500 transition-colors"
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
            className="text-xl font-bold text-gray-800 hover:text-orange-500 border-b border-gray-100 pb-2"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </Link>
        ))}
        <button className="mt-4 bg-orange-500 text-white px-8 py-3 rounded-xl font-bold hover:bg-orange-600 transition-colors w-full">
          Login
        </button>
      </div>
    </header>
  );
}
