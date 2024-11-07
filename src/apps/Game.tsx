import { useRef } from "react";
import Count from "./Count";

export default function Game() {
    const boardRef = useRef<HTMLDivElement>(null);

    return (
        <div className="relative h-100 w-100 d-flex f-center" ref={boardRef}>
            <Count board={boardRef} />
            <Count board={boardRef} />
            <Count board={boardRef} />
        </div>
    );
}
