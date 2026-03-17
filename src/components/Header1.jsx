import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import nav from '../assets/nav.jpg';

export default function Header1() {
  const [show, setShow] = useState(true);
  
  // State-ku bathila useRef use panna, re-render aagama values update aagum.
  // Ithu scroll performance ku romba nallathu.
  const lastY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Current scroll pazhaya scroll-vida perisa iruntha (Down Scroll) -> Hide
      if (currentScrollY > lastY.current) {
        setShow(false);
      } else {
        // Up Scroll -> Show
        setShow(true);
      }
      
      lastY.current = currentScrollY;
    };

    // passive: true kudutha scroll animation innum smooth aaga irukum
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Eppa lastY dependency theva illa, so useEffect oru thadava thaan call aagum

  return (
    <header 
      className={`fixed w-full h-[70px] flex justify-between bg-gray-50 items-center px-10 shadow-sm z-50 transition-all duration-300 ${
        show ? 'top-0' : '-top-[70px]'
      }`}
    > 
      <Link to="/" className='h-[50px] flex items-center'> 
        <img className="h-full" src={nav} alt="logo"/> 
      </Link>
      <ul className="flex items-center gap-8 font-medium text-gray-700">
        <li> <Link to="/" className="hover:text-orange-500 transition-colors"> Home </Link> </li>
        <li> <Link to="/about-autism" className="hover:text-orange-500 transition-colors"> About Autism </Link> </li>
        <li> <Link to="/about" className="hover:text-orange-500 transition-colors"> About Us </Link> </li>
        <li> <Link to="/services" className="hover:text-orange-500 transition-colors"> Services </Link> </li>
        <li> <Link to="/contact" className="hover:text-orange-500 transition-colors"> Contact Us </Link> </li>
        <li> <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors"> Login </button> </li>
      </ul>
    </header>
  );
}
