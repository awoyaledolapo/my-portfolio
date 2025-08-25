
import Image from 'next/image'
import React from 'react'
import img from "@/public/photo_2025-08-25_10-39-34.jpg"
import img1 from "@/public/stacks/html.png";
import img2 from "@/public/stacks/css.png";
import img3 from "@/public/stacks/Tailwind.png";
import img4 from "@/public/stacks/javascript.png";
import img5 from "@/public/stacks/react.png";
import img6 from "@/public/stacks/next.png";
import { Josefin_Sans} from "next/font/google";
const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"], // choose what you’ll actually use
  style: ["normal", "italic"],
});



const stackTypes = [
  {
    icon: img1,
    text: "HTML",
  },
  {
    icon: img2,
    text: "CSS",
  },
  {
    icon: img3,
    text: "Tailwind CSS",
  },
  {
    icon: img4,
    text: "JavaScript",
  },
  {
    icon: img5,
    text: "React",
  },
  {
    icon: img6,
    text: "Next.js",
  },
];


const About = () => {
  return (
    <section className={`px-6 ${josefinSans.className}`} id="about">
      <div className='py-30 flex flex-col md:flex-row items-center gap-10 bg-white/50 backdrop-blur-md rounded-xl p-6 '>
    
      <div className="flex-shrink-0">
        <Image 
          src={img} 
          alt="about-me" 
          className="w-80 h-96 object-cover shadow-lg"
        />
      </div>

      
      <div className="max-w-2xl">
        <h1 className="text-[40px] font-extrabold text-gray-900 mb-2">ABOUT ME</h1>
        <h3 className="text-lg font-semibold text-[#176199] mb-6">
          DOLAPO AWOYALE - FRONTEND DEV
        </h3>
        <p className="text-gray-600 leading-relaxed mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
          deserunt mollit anim id est laborum.
        </p>

        {/* Social Icons */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 mt-6">
            {stackTypes.map(
              (stack, index) => (
                <div key={index} className="flex justify-center">
                  <Image
                    src={stack.icon}
                    alt={`stack-${index}`}
                    className="w-12 h-12 object-contain"
                  />
                </div>
              )
            )}
          </div>
          </div>
      </div>
    </section>
  )
}

export default About
