const HeroImg = 'https://placehold.co/400x400?text=Hero';
import { AiOutlineTwitter,AiOutlineFacebook,AiOutlineLinkedin } from "react-icons/ai";


export default function Hero() {

  const config={
    subtitle: 'im a full stack developer',
    social:{
      twitter:'https://twitter.com',
      facebook:'https://facebook.com',
      linkedin:'https://linkedin.com',
    }
  }


  return <section className='flex flex-col md:flex-row px-5 py-32  justify-center bg-primary ' id="Hero">
    <div className='md:w-1/2 flex flex-col'> 
        <h1 className='w-1/2 text-white text-5xl hero-font'> Hi, <br/>  IM <span className='text-yellow-400'> MICKEL </span> MY KILL 
        <p className='text-2xl'> {config.subtitle} </p> 
        </h1>
       
        <div className='flex py-10'>
        <a href={config.twitter} className='pr-5 hover:text-white'><AiOutlineTwitter size={40} /></a>
        <a href={config.facebook} className='pr-5 hover:text-white' ><AiOutlineFacebook size={40} /></a>
        <a href={config.linkedin} className='pr-5 hover:text-white' ><AiOutlineLinkedin size={40} /></a>
        </div>
         </div>
        <img className='md:w-1/3' src={HeroImg}  />
    </section>
}