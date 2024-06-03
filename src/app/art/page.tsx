"use client"
import Image from "next/image";
import lcx from "./Luxia2.png"

export default function Pages() {
  return (
    <div className="flex flex-row-reverse h-screen bg-white overflow-scroll">
      
      <div className="flex flex-row-reverse h-full w-[35%] border-0">
        <div className="right-[15%] relative bg-black max-w-[20rem] w-[90%] h-[90%] overflow-hidden">
        
          <Image src={lcx} alt="" fill className="object-center"
            style={{
              scale:1.3,
              objectFit: 'cover', // cover, contain, none
            }}></Image>
          
        </div>
      </div>
      <div className="px-10 w-full h-full">
        <div className="cardo-regular-italic text-[7rem]">Luxia</div>  
      </div>
      
    </div>
  );
}