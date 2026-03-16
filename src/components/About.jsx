import AboutImg from '../assets/about.png'

export default function About(){

    const config ={
        line1:'hi, im a fullstack developer . i built beautiful websites with react.js and tailwind css + bootstrap',
        line2:'im proficient in frontend skills like React.js,Redux,redux Tool Kit,Axios,tailwind css,sass,css3 and many more.',
        line3:'in backend i know node.js,express.js,mangoDb and mongoose',
    }
    return <section className='flex flex-col md:flex-row bg-secondary px-5' id="About">
        <div className='md:w-1/2 py-5  '> 
            <img src={AboutImg}/>
        </div>
        <div className='md:w-1/2 flex flex-col justify-center'>
            <div className='flex flex-col text-white flex flex-col justify-center '> 
                <h2 className='text-3xl text-white border-b-4 border-pri  mb-5  w-[170px] font-bold'>About Me</h2>
            <p className=' text-white' >Some information about me...</p>
            <p className='pb-5'> {config.line1}  </p>
            <p className='pb-5'> {config.line2} </p>
            <p className='pb-5'> {config.line3} </p>
            </div>
        </div>
    </section>
}