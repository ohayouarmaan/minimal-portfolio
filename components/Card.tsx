import { ReactElement } from "react";
import { useEffect, useRef, useState } from "react"
import { JsxElement } from "typescript";

export default function Card({x, color="black", content}: {x: number, color?: string, content: ReactElement}) {
    const ref = useRef<HTMLDivElement>(null);
    const [isMoving, setMoving] = useState(false);

    useEffect(() => {
        if(ref.current){
            ref.current.addEventListener("mousedown", (e) => {
                setMoving(true);
            });
            ref.current.addEventListener("mousemove", (e) => {
                if(isMoving) {

                }
            });
        }
    }, [ref, setMoving, isMoving])

    return (<>
        <div ref={ref} style={{
            transform: `translateX(calc(${x} * 100% + ${x}*50px))`
        }} className="min-w-[80%] backdrop-invert absolute m-9 p-5 h-[80%] rounded-2xl ">
            {content}
        </div>
    </>)
}