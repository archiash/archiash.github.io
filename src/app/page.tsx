import FloatingRect from "@/components/floatingRectangle"
export default function Home() {
    return (
        <div className="flex flex-col h-screen w-full overflow-hidden">
            <div className="flex bg-black h-12">
                <div className="text-white w-3/4 text-xl text-left ml-10 items-center flex">
                    Archiash
                </div>  
            </div>
            <div className="flex justify-center h-full items-center text-3xl">
            <div className="flex items-center justify-center w-60 h-60 z-10">Pada Paradise</div>
            <FloatingRect position={{x1:0, y1:-15, x2:0, y2:15}} size={{y:160}}></FloatingRect>
            </div></div>

    );
}