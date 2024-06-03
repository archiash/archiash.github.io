"use client"
import { delay, motion,useScroll, useTransform } from "framer-motion"
import Image from 'next/image'
import star from "./star.png"
import mazy from "./Logo3.png"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useRef } from "react"
export default function Pages() {
    const ref = useRef(null);
    const router = useRouter();
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const bodyY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]); //
    const TextY = useTransform(scrollYProgress, [0, 0.2], ["0%", "175%"]);
    const TextOpa = useTransform(scrollYProgress, [0, 0.1, 0.15], ["100%", "80%", "0%"])
    const containerVariant = {
        hide: { opacity: 0 }, show: { opacity: 1, transition: { duration: 1, staggerChildren: 0.2, } }
    }

    const childVariant =
        { hide: { opacity: 0, y: 100, color: "#00000000" }, show: { opacity: 1, y: [50, 25, 12, 6, 3, 1], color: "#484848", transition: { duration: 0.2, type: "keyframes", opacity: { delay: 0.5, duration: 2 } } } }

    return (
        <div className="bg-[#1c1d20] flex flex-col items-center h-[1000px] overflow-y-scroll overflow-x-hidden">
            <motion.div 
            style={{y:TextY, opacity:TextOpa}}
            className="z-10 mt-10 px-[7%] flex flex-row py-2  items-end w-full h-20 border-0 border-blue-400">
                <motion.div className="z-10"
                    variants={{
                        init: {
                            scale: 1000,
                        },
                        anim: {
                            scale: [1000,500, 375, 190, 90, 45, 25, 13, 6, 1.5],
                            transition: {
                                duration: 0.5
                                , type: "keyframes"
                            }
                        },
                    }}
                    initial="init"
                    animate="anim">
                    <Image src={star} alt="" width={24} height={24} >
                    </Image></motion.div>
                <div className="mx-4 basis-1/2 text-[#ffffff] text-xl border-0 border-red-400">Pada Paradise</div>
                <div className="text-white border-0 border-red-400 w-full flex flex-row-reverse space-x-6 space-x-reverse text-lg cardo-regular">
                    <button className="hover:underline decoration-1 underline-offset-2 opacity-[70%] hover:opacity-[100%]" onClick={() => router.push("/blogs")}>Home</button>
                    <button className="hover:underline decoration-1 underline-offset-2 opacity-[70%] hover:opacity-[100%]" onClick={() => router.push("/art")}>Art</button>
                </div>
            </motion.div>
            <motion.div style={{y:bodyY}} className="mt-4 h-[10rem] w-full flex justify-center overflow-hidden">
                <div className="shrink-0 mt-10 bg-white h-[700px] w-[300%] rounded-t-[50%]" />
            </motion.div>
            <div className="bg-white h-full w-full"></div>

        </div>

    );
}
