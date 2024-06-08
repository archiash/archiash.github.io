"use client"
import Image from "next/image";
import lcx from "./Luxia2.png"
import { useRef, useState, useEffect } from "react"
import { delay, motion, useAnimationControls, useScroll, useTransform } from "framer-motion"
import { useRouter } from "next/navigation"
import Header from "@/components/header/header"
import Link from "next/link"

export default function Pages() {
  const ref = useRef(null);
  const router = useRouter();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const bodyY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]); //
  const imgY = useTransform(scrollYProgress, [0, 0.6], ["-70%", "-120%"]);

  const containerVariant = {
    hide: { opacity: 0 }, show: { opacity: 1, transition: { duration: 1, staggerChildren: 0.2, } }
  }

  const childVariant =
    { hide: { opacity: 0, y: 100, color: "#00000000" }, show: { opacity: 1, y: [50, 25, 12, 6, 3, 1], color: "#484848", transition: { duration: 0.2, type: "keyframes", opacity: { delay: 0.5, duration: 2 } } } }


  const mazyControls = useAnimationControls();
  const dobbyControls = useAnimationControls();

  const pictureVariant = {
    init: { opacity: 1, y: 0 },
    hide: { opacity: 0, y: 80, transition: { duration: 0.8, ease: [0.5, 0, 0.24, 1] } },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2, ease: [0.5, 0, 0.24, 1] } },
  }

  const textVariant = {
    init: { opacity: 0, y: 80 },
    hide: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2, ease: [0.5, 0, 0.24, 1] } },
    show: { opacity: 0, y: 80, transition: { duration: 0.8, ease: [0.5, 0, 0.24, 1] } },
  }


  const hoverProject = (event: any) => {
    if (event.currentTarget.dataset.string == "mazy") {
      mazyControls.start("hide");
    } else {
      dobbyControls.start("hide");
    }
    ;
  }

  const unhoverProject = (event: any) => {
    if (event.currentTarget.dataset.string == "mazy") {
      mazyControls.start("show");
    } else {
      dobbyControls.start("show");
    }
    ;
  }

  return (
    <div className="bg-[#1c1d20] flex flex-col items-center h-[2000px] overflow-y-hidden overflow-x-hidden">
      <Header />
      <motion.div style={{ y: bodyY }} className="mt-[-30px] h-[10rem] w-full flex justify-center overflow-hidden">
        <div className="shrink-0 mt-10 bg-white h-[700px] w-[300%] rounded-t-[50%]" />
      </motion.div>
      <div className="flex flex-col bg-white h-full w-full">
        <motion.div className="mt-6 px-20 flex felx-row w-full h-80 overflow-hidden">
          <motion.div className="relative object-cover w-full overflow" style={{y:imgY}}><Image src={lcx} alt="" className="w-full object-cover"/></motion.div>
        </motion.div>
        <div className="flex flex-row mt-2">
        <div className="flex-1/3 px-20 text-[6rem] cardo-regular-italic">Luxia</div>
        <div className="flex-2/3 pt-2 px-20 text-[1.5rem] cardo-regular">Luxia</div>
        </div>
      </div>
      
    </div>

  );
}
