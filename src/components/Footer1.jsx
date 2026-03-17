import nav from '../assets/nav.jpg';
import { HiArrowRight } from "react-icons/hi";

export default function Footer1() {
    return <header className=" bg-p h-[900px] w-full bg-cover bg-center bg-no-repeat" >
        <div className='flex'>

            <div className='pt-40 pl-30'>
                <a className=''>  <img className='w-[250px] h-[90px]' src={nav} />  </a>
                <p className='w-[250px] h-[200px] px-0 py-5 '> The society today has to face lots of health challenges. Some of the physical and mental disorders which were very rare in the olden times have started occurring and spreading fast as an epidemic</p>
            </div>
            <div className="gap-5 ">
                <ul className="pl-85 pt-45 gap-5 space-y-5 ">
                    <h1 className='border-b-4 text-2xl' >Quick Links </h1>
                    <li> <a href="#" className='flex items-center gap-2'><HiArrowRight className='text-black-500' /> home  </a>  </li>
                    <li> <a href="#" className='flex items-center gap-2'><HiArrowRight className='text-black-500' /> About Autism  </a>  </li>
                    <li> <a href="#" className='flex items-center gap-2'><HiArrowRight className='text-black-500' />  About Us  </a>  </li>
                    <li> <a href="#" className='flex items-center gap-2' ><HiArrowRight className='text-black-500' />  Services  </a>  </li>
                    <li> <a href="#" className='flex items-center gap-2' ><HiArrowRight className='text-black-500' />  Contact Us  </a>  </li>
                </ul>
            </div>
            <div>
                <ul className="pl-65 pt-45 space-y-5">
                    <h1 className='border-b-4 text-2xl'>Contact Us</h1>
                    <li><a href="#" className='flex items-center gap-2'><HiArrowRight className='text-black-500' />tinytoddstherapycare@gmail.com</a></li>
                    <li><a href="#" className='flex items-center gap-2'><HiArrowRight className='text-black-500' />+91 99413 5064</a></li>
                    <li><a href="#" className='flex items-center gap-2'><HiArrowRight className='text-black-500' />+91 72995 35600</a></li>
                </ul>
            </div>

        </div>

    </header>
}




