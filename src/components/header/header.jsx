"use client"
import star from "../../app/blogs/star.png"
import Image from "next/image";
import {useRouter} from "next/navigation";
import { useRef } from "react";
import { delay, motion,useScroll, useTransform } from "framer-motion"

export default function Header() {
    const ref = useRef(null);
    const router = useRouter();
    const {scrollYProgress} = useScroll({
        target: ref,
        axis: "y",
        offset: ["0 0", "120px 0"]
    });

    const TextY = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
    const TextOpa = useTransform(scrollYProgress, [0, 1], ["100%", "0%"])

    return (
        <motion.div
            style={{ y: TextY, opacity: TextOpa }}
            className="z-10 my-5 px-[7%] flex flex-row py-2  items-end w-full h-[80px] border-0 border-blue-400">
            <motion.div className="z-10"
                variants={{
                    init: {
                        scale: 1000,
                    },
                    anim: {
                        scale: [1000, 500, 375, 190, 90, 45, 25, 13, 6, 1.5],
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
            <div className="text-white border-0 border-red-400 w-full flex flex-row-reverse space-x-10 space-x-reverse text-lg cardo-regular">
                <button className="hover:underline decoration-1 underline-offset-2 opacity-[70%] hover:opacity-[100%]" onClick={() => router.push("/blogs")}>Home</button>
                <button className="hover:underline decoration-1 underline-offset-2 opacity-[70%] hover:opacity-[100%]" onClick={() => router.push("/art")}>Art</button>
            </div>
        </motion.div>
    );
}