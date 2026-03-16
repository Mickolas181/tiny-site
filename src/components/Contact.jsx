import ResumeImg from '../assets/resume.jpg'
export default function Contact(){


    const config=  {
        email:'mickolasprathapsing@gmail.com',
        phone:'9176065624',

    }

    return <section className='flex flex-col  bg-pri px-5 py-32' id="Contact">

        <div className=' flex flex-col items-center text-white'>
            <h2 className='text-4xl  border-b-4   border-sec border-pri  mb-5  w-[130px] font-bold'>Contact</h2>
            <p className=' pb-5 ' >if you want to discuss more in detail,please contact me </p>
            <p className='py-2'> <span className='font-bold'> Email: </span>{config.email}</p>
            <p className='py-2'> <span className='font-bold'> phone: </span>{config.phone}</p>
        </div>
    </section>
} 