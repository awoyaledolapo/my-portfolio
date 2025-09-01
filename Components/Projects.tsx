
import img1 from "@/public/projects/creative-landing page .png"
import img2 from "@/public/projects/ticket-gen.png"
import Image from "next/image"
import Link from "next/link"
const projects = [
    {
        image: img1,
        name:"Scavos Side ",
        link:"//agencypage-hazel.vercel.app/",
        about: " A landing page for a photography website built with Next.js, TypeScript, and Tailwind CSS, showcasing the company’s portfolio of images. The project is deployed and hosted on Vercel."
    },
    {
        image: img2,
        name:"TZ Ticket Generator",
        about: " A landing page for a photography website built with Next.js, TypeScript, and Tailwind CSS, showcasing the company’s portfolio of images. The project is deployed and hosted on Vercel."
    },
]
export default function ProjectSection() {
    return (
        <section className="py-30 px-6 " id="project">

        
             { projects.map((p,index)=>(

            <div key={index} className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center lg:gap-8  relative mb-18 ">
            
           
              
                <div  className=" lg:w-1/2 w-[32rem] sm:w-[32rem] relative z-10 lg:-mr-12 md:-mr-12">
                    <div className="bg-white/50 backdrop-blur-md rounded-xl p-6 shadow-xl">
                        <p className="text-sm text-[#176199] uppercase">Featured Project</p>
                        <h2 className="text-3xl font-bold mb-3 text-gray-900">{p.name} </h2>
                        <p className="text-base text-gray-700 leading-relaxed">
                           {p.about}
                        </p>
                    </div>
                </div>

              
                <div className=" lg:w-1/2  md:w-[40rem]">
                 <Link href={p.link ?? "#"} target="_blank" rel="noopener noreferrer">
                    <Image src={p.image} 
                    alt=""
                    className="rounded-2xl w-full h-[400px] object-cover shadow-lg"  
                    />
                    </Link>
                </div>

            </div>
            ))}
        </section>
    )
}
