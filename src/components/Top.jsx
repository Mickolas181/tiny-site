import { AiOutlineTwitter,AiOutlineFacebook,AiOutlineLinkedin } from "react-icons/ai";
export default function Top(){
    return <section className=" h-[70px] w-full bg-p ">
        <div> 
        <div className="flex gap-10">
        <a href="#">  9:30 am - 8:00 pm - Mon - Sat  </a>  
        <a> | </a>
        <a href="#"> +91 - 99413 50646 , +91 - 72995 35600  </a>  
        <a> | </a>
        <a href="#"> tinytoddstherapycare@gmail.com  </a>
        </div>
        <div className='flex py-5'>
        <a  className='pr-5 hover:text-white'><AiOutlineTwitter size={20} /></a>
        <a className='pr-5 hover:text-white' ><AiOutlineFacebook size={20} /></a>
        <a className='pr-5 hover:text-white' ><AiOutlineLinkedin size={20} /></a>
        </div>

        </div>

    </section>
}