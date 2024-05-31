'use client'

import { motion } from 'framer-motion'

export default function FloatingRect({position, size}) {
    return (
        <motion.div
            initial={{
                x: position.x1,
                y: position.y1,
                width: size.y,
                backgroundColor: "#577B8D",
                scale: 1,
                position: "fixed",
            }}
            animate={{
                x: position.x2,
                y: position.y2,
                scale: 1,
                backgroundColor: "#577B8D",
                position: "fixed",
                transition: {
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                },
            }}
            className="flex items-center justify-center w-40 h-80">
        </motion.div>
    )
}

