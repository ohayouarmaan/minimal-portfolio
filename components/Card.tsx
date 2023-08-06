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
            // transform: `translateX(calc(${x} * 100% + ${x}*50px))`
            // minHeight: "min-content"
            // marginRight: `${ x==2 ? "20%" : null}`
        }} className={`min-h-[80%] ${x == 0 ? "md:ml-[20%]": x == 3 ? "md:mr-[20%]" : null} max-w-[100%] backdrop-invert p-5 h-[80%] rounded-2xl m-9`}>
            {content}
        </div>
    </>)
}