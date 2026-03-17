const ResumeImg = 'https://placehold.co/300x400?text=Resume';
import { resume } from 'react-dom/server'
export default function Resume(){



    const config={
        link:"https://pdfobject.com/pdf/sample.pdf"
    }

    return <section className='flex flex-col md:flex-row bg-secondary px-5 ' id="Resume">
        <div className='md:w-1/2 py-5 flex justify-end '> 
            <img className='w-[300px]' src={ResumeImg}/>
        </div>
        <div className='md:w-1/2 flex flex-col justify-center'>
            <div className='flex flex-col text-white flex flex-col justify-center px-30 w-full '> 
                <h2 className='text-4xl text-white border-b-4 border-pri  mb-5  w-[130px] font-bold'>Resume</h2>
                <p className=' pb-5 w-full' >you can view my Resume <a className='btn' href={config.link}> Download </a></p>
            </div>
        </div>
    </section>
}