"use client"
import { delay, motion } from "framer-motion"
import Image from 'next/image'
import star from "./star.png"
import mazy from "./Logo3.png"
import { useRouter } from "next/navigation"
import Link from "next/link"
export default function Pages() {

    const router = useRouter();

    const containerVariant = {
        hide: { opacity: 0 }, show: { opacity: 1, transition: {duration: 1, staggerChildren: 0.2, } }
    }

    const childVariant =
        { hide: { opacity: 0, y: 100, color: "#00000000" }, show: { opacity: 1, y: [50, 25, 12, 6, 3, 1], color: "#484848", transition: { duration: 0.2, type: "keyframes", opacity:{delay: 0.5, duration:2}} } }

    return (
        <div className="px-[20%] bg-[#1c1d20] flex flex-col items-center h-screen overflow-hidden">
            <div className="absolute w-full h-full z-[-1] backdrop-blur-[6px]" />

            <div className="px-10 flex flex-row py-2  items-end w-full h-20 border-0 border-blue-400">
                <motion.div className="z-10"
                    variants={{
                        init: {
                            scale: 1000
                        },
                        anim: {
                            scale: [500, 375, 190, 90, 45, 25, 13, 6, 1.5],
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
                <div className="mx-2 basis-1/2 text-[#ffffff] text-2xl border-0 border-red-400">Pada Paradise</div>
                <div className="text-white border-0 border-red-400 w-full flex flex-row-reverse space-x-6 space-x-reverse text-xl cardo-regular">
                    <button className="hover:underline decoration-1 underline-offset-2 opacity-[70%] hover:opacity-[100%]" onClick={() => router.push("/blogs")}>Home</button>
                    <button className="hover:underline decoration-1 underline-offset-2 opacity-[70%] hover:opacity-[100%]" onClick={() => router.push("/art")}>Art</button>
                </div>
            </div>
            <motion.div className="px-10 flex flex-col items-center space-y-4 pt-8 w-full h-full border-t-[1px] border-[#484848]"
                variants={containerVariant}
                initial="hide"
                animate="show"
            >
                <motion.div className="flex flex-col items-center overflow-hidden duration-[350ms] bg-[#ffffff] h-[2.75rem] w-[100%] rounded-es-2xl rounded-tr-2xl text-center text-xl pt-2 text-[#1c1d20] hover:w-[100%] hover:h-[50%] delay-[500ms] hover:delay-100 transition-all"
                    variants={childVariant}
                >   <div>Mazy Lost in the Maze</div>
                    <div className="mt-2 relative h-[50%] w-full bg-[#F2ECEA]">
                        <Link href="https://scratch.mit.edu/projects/892089890/">
                            <Image src={mazy} alt="" fill style={{ objectFit: "contain" }} className=""></Image>
                        </Link>
                    </div>
                    <p className="mx-10 cardo-regular text-lg">
                        Mazy is a game that you have to avoid attack from boss and collect gems in a maze to win.
                        Inspired by Undertale's battle system and add some challenges in gameplay and self programing skill with random generate maze.
                        It is a scratch game project for my university Basic Computer Engineering course.
                    </p>
                </motion.div>
            </motion.div>

        </div>
    );
}