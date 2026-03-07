
import { useState } from 'react'

import { Bars3Icon } from '@heroicons/react/24/solid'
export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  
  return <header className="flex justify-between px-5 py-2 bg-secondary">
    <a className="font-bold text-black" href="#"> K Mickel </a>
    
    <nav className="hidden md:block">
      <ul className="flex gap-4 text-white"> 
      <li> <a href="#"> home </a></li>
      <li> <a href="#"> about </a></li>
      <li> <a href="#"> projects </a></li>  
      <li> <a href="#"> contact </a></li>  
    </ul>
    </nav>
    {toggleMenu && (
      <nav className="block md:hidden  ">
        <ul className="flex flex-col text-white mobile-nav"> 
          <li> <a href="#"> home </a></li>
          <li> <a href="#"> about </a></li>
          <li> <a href="#"> projects </a></li>  
          <li> <a href="#"> contact </a></li>  
        </ul>
      </nav>
    )}

    <button onClick={()=> setToggleMenu(!toggleMenu)} className='block md:hidden'> <Bars3Icon className='text-white h-5 '/> </button>

  </header>
}