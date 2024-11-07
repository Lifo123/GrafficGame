import React, { useRef, useState } from "react";
import CONTROL from "@Apps/hooks/useMove"


export default function Count({ board }: { board: React.RefObject<HTMLDivElement> }) {
    const pathRef = useRef<HTMLSpanElement>(null);
    const [count, setCount] = useState(0);
    const { Click } = CONTROL(board, pathRef);



    return (
        <span className="btn btn-secondary br-6 d-flex f-center absolute box"
            onMouseDown={Click}
            style={{ width: "120px" }}
            ref={pathRef}
        >
            Count: {count}
        </span>
    )
}
