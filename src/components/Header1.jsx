import { Link } from 'react-router-dom';
import nav from '../assets/nav.jpg'

export default function Header1(){
    return <header className=" w-full h-[70px] flex justify-between bg-gray-50 items-center px-10 shadow-sm sticky top-0 z-50"> 
        <Link to="/" className='h-[50px] flex items-center'> <img className="h-full" src={nav} alt="logo"/> </Link>
        <ul className="flex items-center gap-8 font-medium text-gray-700">
            <li> <Link to="/" className="hover:text-orange-500 transition-colors"> Home </Link> </li>
            <li> <Link to="/about-autism" className="hover:text-orange-500 transition-colors"> About Autism </Link> </li>
            <li> <Link to="/about" className="hover:text-orange-500 transition-colors"> About Us </Link> </li>
            <li> <Link to="/services" className="hover:text-orange-500 transition-colors"> Services </Link> </li>
            <li> <Link to="/contact" className="hover:text-orange-500 transition-colors"> Contact Us </Link> </li>
            <li> <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors"> Login </button> </li>
        </ul>
    </header>
}
