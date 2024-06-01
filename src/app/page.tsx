"use client"
import FloatingRect from "@/components/floatingRectangle"
import {motion, useAnimation, useAnimationControls} from "framer-motion"
import { useRouter, usePathname  } from "next/navigation"
import { useEffect, useState } from "react"
export default function Home() {

    const control = useAnimationControls()
    const [state, setState] = useState('idle');
    useEffect(()=>{
        console.log('x')
        if(state == 'idle'){
            control.start('idle')
        }else if(state == 'clicked'){
            control.start('click')
            
        }   
        control.stop()
    })

    const router = useRouter();

    function onAnimComplete(){
        if(state == 'clicked'){
            router.push('/blogs');
        }
    }

    return (
        <div className="flex flex-col h-screen w-full overflow-hidden bg-[#0f0f0f]">
            <motion.div className="flex justify-center h-full items-center text-3xl"
                animate = {control}
                initial='init'>
                <motion.button  
                onClick={()=>setState('clicked')} className="flex items-center justify-center px-4 py-2 z-10 border-2 border-white text-white"
                variants={{click:{opacity:0, transition:{delay:0.2,}, }}}
                onAnimationComplete={onAnimComplete}
                >Pada Paradise</motion.button>
                <FloatingRect position={{x1:0, y1:-30, x2:0, y2:30}} size={{y:160}}></FloatingRect>
            </motion.div>
        </div>
    
    );
}