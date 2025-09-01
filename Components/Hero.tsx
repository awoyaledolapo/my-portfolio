
"use client";
import img from "@/public/logo.webp";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import ScrollTrigger from "gsap/ScrollTrigger";
import Draggable from "gsap/Draggable";
import Image from "next/image";
import "./Hero.css";
import { Archivo_Black } from "next/font/google";
import About from "./About";
import ProjectSection from "./Projects";
import { Rubik_Distressed } from "next/font/google";
import ContactForm from "./ContactUs";
import Socials from "./Socials";


const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
});
const rubikDistressed = Rubik_Distressed({
  weight: "400",
  subsets: ["latin"],
});

gsap.registerPlugin(TextPlugin, Draggable, ScrollTrigger);

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const flairRef = useRef<HTMLDivElement>(null);
  const animatedTextRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
  if (!flairRef.current) return;

  // Keep spinning
  gsap.to(flairRef.current, {
    rotation: 360,
    duration: 10, // speed of spin (lower = faster)
    repeat: -1,   // infinite loop
    ease: "linear" // no acceleration/deceleration
  });

  // Still allow drag interaction
  const draggables = Draggable.create(flairRef.current, {
    type: "rotation",
  });

  return () => {
    draggables.forEach((d) => d.kill());
  };
}, []);


  useEffect(() => {
    if (!animatedTextRef.current) return;
    const tl = gsap.timeline();
    tl.to(animatedTextRef.current, {
      duration: 2,
      text: 'I Am a Front <span style="color:#176199;">End</span><br> Developer',
      ease: "power2.inOut",
    })
      .to(
        animatedTextRef.current,
        {
          duration: 2,
          text: 'I Build For The <span style="color:#176199;">Web.</span>',
          ease: "power2.inOut",
        },
        "+=1" 
      );
  }, []);

  return (
    <div>
      <div ref={heroRef}>
        <header className="px-[5rem] py-[9rem]">
  <div className="flex flex-col gap-0 leading-none tracking-tight">

    <h3 className="m-0 text-4xl font-bold leading-none text-[#28282B]  p-0">
      Hi <span className="text-[#176199] font-bold">there</span>
    </h3>
    <div className={`${archivoBlack.className} text-black  lg:mt-[-1px] md:mt-[30px] p-0`}>
      <div className="flex items-center gap-2 leading-none">
        <span className="font-bold text-[72px] lg:text-[100px]">Dolapo Here.</span>
        <div
          ref={flairRef}
          className="select-none hidden lg:inline-block bg-transparent cursor-grab active:cursor-grabbing touch-none -translate-y-1"
        >
          <Image src={img} alt="" width={324} height={124} />
        </div>
      </div>

   
      <span
        ref={animatedTextRef}
        className={`${rubikDistressed.className} block text-[40px] lg:text-[60px] text-black leading-none m`}
      />
    </div>

    <button
      type="button"
      className="group w-[11rem] mt-10 inline-flex items-center gap-2 rounded-full bg-[#176199] px-6 py-3 text-white font-semibold shadow-sm hover:bg-[#145681] focus:outline-none focus:ring-2 focus:ring-[#176199]/40"
      aria-label="Lets Talk"
    >
      LETS TALK
      <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  </div>
</header>

         
        <main>
          <section className="content fluid">
            <h2>
              <span aria-hidden="true">I can&nbsp;</span>
            </h2>
            <ul aria-hidden="true" style={{ "--count": 22 } as React.CSSProperties}>
              {[
                "design",
               
                "solve",
                "build",
                "develop",
                "debug",
                "learn",
                "ship",
                "prompt",
                "collaborate",
                "create",
                "inspire",
                "follow",
                "innovate",
                "test",
                "optimize",
                "teach",
                "visualize",
                "transform",
                "do it",
              ].map((text, i) => (
    <li key={i} style={{ "--i": i } as React.CSSProperties}>
                  {text}.
                </li>
              ))}
            </ul>
          </section>

       
            {/* <Stacks/> */}
            <About />
          <ProjectSection/>
          <ContactForm/>
          <section>
            <h2 className="fluid"><Socials/></h2>
          </section>
        </main>
        <footer className="text-black ">ScavoMighty &copy; 2025</footer>
      </div>
    </div>
  );
};

export default Hero;
