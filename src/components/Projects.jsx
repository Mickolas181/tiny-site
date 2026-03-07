
import websiteImg1 from '../assets/ecommerce-websites.jpg'
import websiteImg2 from '../assets/food-ecommerce.jpg' 
import websiteImg3 from '../assets/website-blog.jpg'

export default function Projects(){
    return <section className="flex flex-col py-20 px-5 justify-center bg-primary text-white  ">
        
        <div className="w-1/2 ">

            <div className="flex justify-center"> 
            <h1 className="text-4xl  border-b-4 border-sec  mb-5  w-[150px] font-bold"> PROJECT</h1> 
            </div>

        </div>




        <div className="w-full">
        <div className='flex px-10 gap-5 '>


            <div className='relative'> 
                <img className='h-[200px]'  src={websiteImg1}/> 
                    <div className='project-desc'>  
                        <p className='text-center  py-5'> e ecommersce website, built with </p>
                    </div>
            </div>


            <div className='relative' > 
                <img className='h-[200px]'  src={websiteImg2}/> 
                    <div className='absolute  left-0 right-0 bottom-[0px] top-0  bg-secondary  opacity-0 duration-500 hover:opacity-100'>
                        <p className='text-center py-5'> food ecommerce website like swiggy </p>
                    </div>
            </div>


            <div className='relative' >
                <img className='h-[200px]' src={websiteImg3}/> 
                    <div className='absolute  left-0 right-0 bottom-[0px] top-0  bg-secondary  opacity-0 duration-500 hover:opacity-100'>
                        <p className='text-center py-5'> basic blog website, built with next js</p>
            </div>
            
            </div>
        </div>
        </div>
            </section>
}