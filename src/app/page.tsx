import FloatingRect from "@/components/floatingRectangle"
export default function Home() {
    return (
        <div className="flex flex-col h-screen w-full overflow-hidden">
            <div className="flex justify-center h-full items-center text-3xl">
            <div className="flex items-center justify-center px-4 py-2 z-10 border-2 border-black">Pada Paradise</div>
            <FloatingRect position={{x1:0, y1:-30, x2:0, y2:30}} size={{y:160}}></FloatingRect>
            </div></div>

    );
}