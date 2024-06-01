'use client'
import { motion } from 'framer-motion'
export default function FloatingRect({ position, size }) {
    return (
        <motion.div
            variants={{
                init: {
                    x: position.x1,
                    y: position.y1,
                    width: size.y,
                    backgroundColor: "#5B9A8B",
                    scale: 1,
                    position: "fixed",
                },
                idle: {
                    x: position.x2,
                    y: position.y2,
                    scale: 1,
                    backgroundColor: "#5B9A8B",
                    position: "fixed",
                    transition: {
                        duration: 2,    
                        repeat: Infinity,
                        repeatType: "reverse",
                        
                    }

                },
                click:{
                    transition:{
                        repeat: 0
                    },
                    x: 0,
                    y: 0,
                    scale:10,
                }
            }
            }
            className="flex items-center justify-center w-40 h-80" >
        </motion.div >
    )
}

