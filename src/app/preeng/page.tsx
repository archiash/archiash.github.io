"use client"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function() {

    const router = useRouter()
    useEffect(() => {
        router.push("https://www.figma.com/deck/RCpi04ziViEq5FHV5cGpzJ/Eigengrau?node-id=1-237&t=tsuSAQNUl1t5oUYw-1")
    }, [])

    return (
        <iframe className="w-full h-screen" src="https://embed.figma.com/slides/RCpi04ziViEq5FHV5cGpzJ/Eigengrau?node-id=1-237&embed-host=shar" allowFullScreen></iframe>
    )
}