"use client"
import { delay, motion, useAnimationControls, useScroll, useTransform } from "framer-motion"
import Image from 'next/image'
import dobby from "./Dobby.png"
import mazy from "./Mazy169.png"
import { useRouter } from "next/navigation"
import Header from "@/components/header/header"
import Link from "next/link"
import { useRef } from "react"
export default function Pages() {
    const ref = useRef(null);
    const router = useRouter();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const bodyY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]); //

    const containerVariant = {
        hide: { opacity: 0 }, show: { opacity: 1, transition: { duration: 1, staggerChildren: 0.2, } }
    }

    const childVariant =
        { hide: { opacity: 0, y: 100, color: "#00000000" }, show: { opacity: 1, y: [50, 25, 12, 6, 3, 1], color: "#484848", transition: { duration: 0.2, type: "keyframes", opacity: { delay: 0.5, duration: 2 } } } }


    const mazyControls = useAnimationControls();   
    const dobbyControls = useAnimationControls();
    
    

    const pictureVariant ={
        init:{opacity:1, y:0},
        hide:{opacity:0, y: 80, transition:{duration:0.8, ease:[0.5, 0, 0.24, 1]}},
        show:{opacity:1, y:0, transition:{duration:0.8, delay:0.2 , ease:[0.5, 0, 0.24, 1]}},
    }

    const textVariant ={
        init:{opacity:0, y:80},
        hide:{opacity:1, y: 0, transition:{duration:0.8, delay:0.2 , ease:[0.5, 0, 0.24, 1]}},
        show:{opacity:0, y:80, transition:{duration:0.8, ease:[0.5, 0, 0.24, 1]}},
    }


    const hoverProject = (event:any) => {
        if(event.currentTarget.dataset.string == "mazy"){
            mazyControls.start("hide");
        }else{
            dobbyControls.start("hide");
        }
        ;
    }

    const unhoverProject = (event:any) => {
        if(event.currentTarget.dataset.string == "mazy"){
            mazyControls.start("show");
        }else{
            dobbyControls.start("show");
        }
        ;
    }

    return (
        <div className="bg-[#1c1d20] flex flex-col items-center h-screen overflow-y-hidden overflow-x-hidden">
            <Header />
            <motion.div style={{ y: bodyY }} className="mt-[-30px] h-[10rem] w-full flex justify-center overflow-hidden">
                <div className="shrink-0 mt-10 bg-white h-[700px] w-[300%] rounded-t-[50%]" />
            </motion.div>
            <div className="flex flex-col bg-white h-full w-full">
                <div className="mt-6 px-40 flex felx-row w-full h-[40px]">
                    <button data-string="mazy" onClick={()=>router.push("https://scratch.mit.edu/projects/892089890")} onMouseLeave={(event)=>unhoverProject(event)} onMouseEnter={(event)=>hoverProject(event)} className="flex-1 group">
                        <button  className="grad cardo-bold h-10 text-center text-xl w-full border-b-2 border-[#1c1d20] text-[#1c1d20] group-hover:text-[#2aa084]">Mazy Lost in the Maze</button>
                        <motion.div className="px-2" initial="init" animate={mazyControls} variants={pictureVariant}>
                            <div className="mt-4 relative bg-black w-full h-[300px] overflow-hidden object-top">
                                <Image src={mazy} alt="" fill style={
                                    {
                                        scale: 1,
                                        objectFit: "cover"
                                    }
                                } className=""></Image>
                            </div>
                        </motion.div>
                        <motion.div variants={textVariant} animate={mazyControls} initial="init" className="relative top-[-300px] w-[100%] px-[5%] text-justify text-lg cardo-regular">
                            Mazy is a game that you have to avoid attack from boss and collect gems in a maze to win.
                            Inspired by Undertale's battle system and add some challenges in gameplay and self programing skill with random generate maze.
                            It is a scratch game project for my university Basic Computer Engineering course.
                        </motion.div>
                    </button>
                    <button data-string="dobby" onClick={()=>router.push("https://github.com/archiash/eq-manager")} onMouseLeave={(event)=>unhoverProject(event)} onMouseEnter={(event)=>hoverProject(event)} className="flex-1 group">
                        <button  className="grad cardo-bold h-10 text-center text-xl w-full border-b-2 border-[#1c1d20] text-[#1c1d20] group-hover:text-[#2aa084]">Dobby "Reparo" Equation Manager</button>
                        <motion.div className="px-2" initial="init" animate={dobbyControls} variants={pictureVariant}>
                            <div className="mt-4 relative bg-black w-full h-[300px] overflow-hidden object-top">
                                <Image src={dobby} alt="" fill style={
                                    {
                                        scale: 1,
                                        objectFit: "cover"
                                    }
                                } className=""></Image>
                            </div>
                        </motion.div>
                        <motion.div variants={textVariant} animate={dobbyControls} initial="init" className="relative top-[-300px] w-[100%] px-[5%] text-justify text-lg cardo-regular">
                            My "Reparo" version of Dobby Equation Manager of my team's project for computer programing course.
                            It is design to save equation from user and call it to calculate.
                            Aim to remake ui from quite cartoony into my personal taste simple black and white one.
                        </motion.div>

                    </button>
                </div>

            </div>

        </div>

    );
}
