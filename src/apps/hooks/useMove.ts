import React, { useEffect, useRef } from "react";


export default function useMove(parentRef: any | null, pathRef: any) {
    const startX = useRef(0);
    const startY = useRef(0);
    const startLeft = useRef(0);
    const startTop = useRef(0);

    const Click = (e: React.MouseEvent) => {
        startX.current = e.clientX;
        startY.current = e.clientY;
        startLeft.current = pathRef.current!.offsetLeft;
        startTop.current = pathRef.current!.offsetTop;
        parentRef?.current?.addEventListener('mousemove', move);
        parentRef?.current?.addEventListener('mouseleave', clear);
        parentRef?.current?.addEventListener('mouseup', clear);
    }

    const move = (e: any) => {
        if (pathRef.current && parentRef?.current) {
            const dx = e.clientX - startX.current;
            const dy = e.clientY - startY.current;

            pathRef.current!.style.left = `${Math.max(Math.min(startLeft.current + dx, parentRef.current!.offsetWidth - pathRef.current.offsetWidth), 0)}px`;
            pathRef.current!.style.top = `${Math.max(Math.min(startTop.current + dy, parentRef.current!.offsetHeight - pathRef.current.offsetHeight), 0)}px`;
        }
    }

    const clear = () => {
        parentRef?.current?.removeEventListener('mousemove', move);
        parentRef?.current?.removeEventListener('mouseup', clear);
        parentRef?.current?.removeEventListener('mouseleave', clear);
    }

    useEffect(() => {
        return () => {
            clear();
        }
    }, []);

    return {
        Click
    }


}