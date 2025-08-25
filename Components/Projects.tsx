
import img1 from "@/public/projects/creative-landing page .png"
import img2 from "@/public/projects/ticket-gen.png"
import Image from "next/image"
import Link from "next/link"
const projects = [
    {
        image: img1,
        link:"//agencypage-hazel.vercel.app/",
        about: " A landing page for a photography website built with Next.js, TypeScript, and Tailwind CSS, showcasing the company’s portfolio of images. The project is deployed and hosted on Vercel."
    },
    {
        image: img2,
        about: " A landing page for a photography website built with Next.js, TypeScript, and Tailwind CSS, showcasing the company’s portfolio of images. The project is deployed and hosted on Vercel."
    },
]
export default function ProjectSection() {
    return (
        <section className="py-30 px-6" id="project">

        
             { projects.map((p,index)=>(

            <div key={index} className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 relative lg:mb-18">
            
           
              
                <div  className="md:w-1/2 relative z-10 -mr-12">
                    <div className="bg-white/50 backdrop-blur-md rounded-xl p-6 shadow-xl">
                        <p className="text-sm text-[#176199] uppercase">Featured Project</p>
                        <h2 className="text-3xl font-bold mb-3 text-gray-900">Scavos Side </h2>
                        <p className="text-base text-gray-700 leading-relaxed">
                           {p.about}
                        </p>
                    </div>
                </div>

              
                <div className="md:w-1/2 ">
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
