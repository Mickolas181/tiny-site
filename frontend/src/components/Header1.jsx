import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX, HiOutlineInformationCircle, HiOutlineHeart, HiOutlineSparkles, HiOutlineUserGroup, HiOutlineAcademicCap, HiOutlinePuzzle } from 'react-icons/hi';
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
        { name: 'About Us', path: '/about', icon: <HiOutlineInformationCircle className="w-5 h-5"/>, desc: 'Who we are' },
        { name: 'About Autism', path: '/about-autism', icon: <HiOutlineHeart className="w-5 h-5"/>, desc: 'Understanding Autism' }
      ],
      bannerImage: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?auto=format&fit=crop&q=80&w=400&h=300'
    },
    { 
      name: 'Services', 
      path: '/services',
      dropdown: [
        { name: 'Occupational Therapy', path: '/services/occupational-therapy', icon: <HiOutlinePuzzle className="w-5 h-5"/> },
        { name: 'Speech Therapy',       path: '/services/speech-therapy', icon: <HiOutlineSparkles className="w-5 h-5"/> },
        { name: 'Physiotherapy',        path: '/services/physiotherapy', icon: <HiOutlineUserGroup className="w-5 h-5"/> },
        { name: 'Special Education',    path: '/services/special-education', icon: <HiOutlineAcademicCap className="w-5 h-5"/> }
      ],
      bannerImage: 'https://images.unsplash.com/photo-1576085898323-218337e3e43c?auto=format&fit=crop&q=80&w=400&h=300'
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
              <div className={`absolute top-14 left-1/2 -translate-x-1/2 ${link.bannerImage ? 'w-[520px]' : 'w-60'} bg-white/95 backdrop-blur-xl shadow-[0_12px_48px_rgba(0,0,0,0.12)] rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-3 group-hover:translate-y-0 z-50 overflow-hidden border border-slate-100 flex`}>
                <ul className={`py-2 ${link.bannerImage ? 'w-[240px] flex-shrink-0' : 'w-full'}`}>
                  {link.dropdown.map((sublink) => (
                    <li key={sublink.name}>
                      <Link to={sublink.path} className="px-5 py-3 group/item flex items-center gap-3 text-[#0F3460] hover:bg-slate-50 hover:text-[#E94560] transition-all duration-200">
                        {sublink.icon && <div className="text-slate-400 group-hover/item:text-[#E94560] transition-colors">{sublink.icon}</div>}
                        <div>
                          <p className="font-semibold text-sm">{sublink.name}</p>
                          {sublink.desc && <p className="text-xs text-slate-500 font-normal mt-0.5">{sublink.desc}</p>}
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
                {link.bannerImage && (
                  <div className="flex-1 p-2">
                    <div className="w-full h-full rounded-lg bg-cover bg-center overflow-hidden relative shadow-inner" style={{ backgroundImage: `url(${link.bannerImage})` }}>
                       <div className="absolute inset-0 bg-gradient-to-t from-[#0F3460]/90 via-[#0F3460]/20 to-transparent flex items-end p-5">
                         <span className="text-white font-bold text-sm leading-snug drop-shadow-md tracking-wide">Empowering every child's potential</span>
                       </div>
                    </div>
                  </div>
                )}
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
        } lg:hidden flex flex-col shadow-xl overflow-y-auto pb-20`}
      >
        <div className="p-8 flex flex-col gap-5">
          {navLinks.map((link) => (
            <div key={link.name} className="flex flex-col border-b border-slate-100 pb-3">
              <Link 
                to={link.path} 
                className="text-lg font-semibold text-[#0F3460] hover:text-[#E94560] transition-colors flex justify-between items-center"
                onClick={() => !link.dropdown && setIsOpen(false)}
              >
                {link.name}
                {link.dropdown && <span className="text-xs text-slate-400">▼</span>}
              </Link>
              {link.dropdown && (
                <div className="flex flex-col gap-3 mt-4 pl-4 border-l-2 border-[#E94560]/20">
                  {link.dropdown.map(sub => (
                    <Link
                      key={sub.name}
                      to={sub.path}
                      className="text-base text-slate-600 hover:text-[#E94560] flex items-center gap-3 py-1"
                      onClick={() => setIsOpen(false)}
                    >
                      {sub.icon && <span className="opacity-70">{sub.icon}</span>}
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <button className="mt-4 bg-gradient-to-r from-[#E94560] to-[#B5223B] text-white px-8 py-3.5 rounded-xl font-semibold transition-all w-full shadow-[0_8px_30px_rgba(233,69,96,0.25)] flex items-center justify-center gap-2">
            Enroll Now
          </button>
        </div>
      </div>
    </header>
  );
}
