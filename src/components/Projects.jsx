import websiteImg1 from '../assets/ecommerce-websites.jpg'
import websiteImg2 from '../assets/food-ecommerce.jpg' 
import websiteImg3 from '../assets/website-blog.jpg'

export default function Projects(){

    const config = {
        projects:[
            {
                image: websiteImg1,
                description:' e ecommersce website, built with ',
                link:'https//github.com/mickel/protfoliyo',
            },
            {
                image:websiteImg2,
                description:'food ecommerce website like swiggy',
                link:'https//github.com/mickel/app1',
            },
            {
                image:websiteImg3,
                description:'basic blog website, built with next js',
                link:'https//github.com/mickel/app3',
            },
        ]
    }

    return <section className="flex flex-col py-10 justify-center bg-primary text-white" id="Projects">
        
        <div className="w-full">
            <div className="flex flex-col px-5"> 
                <h1 className="text-4xl border-b-4 border-sec mb-5 w-[150px] font-bold"> PROJECT</h1> 
                <p className='pr-5'> these are some of my react projects and these are created with react.js </p>
            </div>
        </div>

        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 py-5 gap-5'>
                {config.projects.map((project) => (
                    <div className='relative' > 
                        <img className='h-[300px] w-[500px]' src={project.image}/> 
                        <div className='project-desc'>  
                            <p className='text-center px-5 py-5'> {project.description} </p>
                                <div className='flex justify-center'>
                                    <a className='btn' target='_blank' href={project.link} > view project </a>
                                </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
}