import AboutImg from '../assets/about.png'

export default function About(){
    return <section className='flex flex-col md:flex-row bg-secondary px-5 '>
        <div className='md:w-1/2 py-5  '> 
            <img src={AboutImg}/>
        </div>
        <div className='md:w-1/2 flex flex-col justify-center'>
            <div className='flex flex-col text-white flex flex-col justify-center '> 
                <h2 className='text-3xl text-white border-b-4 border-pri  mb-5  w-[170px] font-bold'>About Me</h2>
            <p className=' text-white' >Some information about me...</p>
            <p className='pb-5'>  hi, im a fullstack developer . i built beautiful websites with react.js and tailwind css </p>
            <p className='pb-5'> im proficient in frontend skills like React.js,Redux,redux Tool Kit,Axios,tailwind css,sass,css3 and many more.</p>
            <p className='pb-5'> in backend i know node.js,express.js,mangoDb and mongoose</p>
            </div>
        </div>
    </section>
}