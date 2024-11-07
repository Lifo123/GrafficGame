import { useEffect, useRef } from "react";
import Count from "./Count";

export default function Game() {
    const boardRef = useRef<HTMLDivElement>(null);

    const resize = () => {
       
    }

    useEffect(() => {
        window.addEventListener('resize', resize);

        return () => {
            window.removeEventListener('resize', resize);
        }
    }, []);

    return (
        <div className="relative h-100 w-100 d-flex f-center" ref={boardRef}>
            <Count board={boardRef} />
            <Count board={boardRef} />
            <Count board={boardRef} />
        </div>
    );
}
