"use client"
import { motion } from "framer-motion"
import Image from 'next/image'
import star from "./star.png"
export default function Pages() {

    const containerVariant = {
        hide: { opacity: 0 }, show: { opacity: 1, transition: {duration: 1, staggerChildren: 0.8,} }
    }           

    const childVariant =
        { hide: { opacity: 0, y: 10, color: "#00000000" }, show: { opacity: 1, y: 0, color: "#484848", transition:{duration:0.8}}}
    
        return (
        <div className="px-[20%] flex flex-col items-center h-screen overflow-hidden bg-[#F5EFE6]">
            <div className="px-10 flex flex-row  items-center w-full h-20   ">
                <motion.div className="bg-[#5B9A8B] rounded-full z-10"
                    variants={{
                        init: {
                            x:15,   
                            width: 1,
                            height: 1,
                            scale: 6000
                        },
                        anim: {
                            scale: [3000, 1500, 750, 375, 190, 90, 45, 25, 13, 6, 0],
                            transition: {
                                duration: 0.7
                                , type: "keyframes"
                            }
                        },
                    }}
                    initial="init"
                    animate="anim"      
                >
                
                </motion.div>
                <Image src={star} alt="" width={24} height={24} ></Image>
                <div className="mx-2 basis-1/2 text-[#484848] text-2xl">Pada Paradise</div>
            </div>
            <motion.div className="px-10 flex flex-col space-y-4 pt-8 w-full h-full border-t-[1px] border-[#484848]"
                variants={containerVariant}
                initial="hide"
                animate="show"
            >
                <motion.div className="bg-white h-[30%] w-[100%] rounded-xl text-center text-xl pt-2 text-[#484848]"
                    variants={ childVariant}
                >Mazy Lost in the Maze</motion.div>
                <motion.div className="bg-white h-[30%] w-[100%] rounded-xl text-center text-xl pt-2 text-[#484848]"
                    variants={ childVariant}
                    >Dobby Equation Manager</motion.div>
            </motion.div>

        </div>
    );
}