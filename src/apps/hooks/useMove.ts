import React, { useEffect, useRef } from "react";


export default function useMove(parentRef: React.RefObject<HTMLDivElement> | null, pathRef: any) {

    const startX = useRef(0);
    const startY = useRef(0);
    const startLeft = useRef(0);
    const startTop = useRef(0);

    const Click = (e: React.MouseEvent) => {
        startX.current = e.clientX;
        startY.current = e.clientY;
        startLeft.current = pathRef.current!.offsetLeft;
        startTop.current = pathRef.current!.offsetTop;

        pathRef.current!.style.pointerEvents = 'none';
        parentRef?.current?.addEventListener('mousemove', move);
        parentRef?.current?.addEventListener('mouseleave', clear);
        parentRef?.current?.addEventListener('mouseup', clear);
    }

    const move = (e: any) => {
        if (pathRef.current && parentRef?.current) {
            // Calculamos la distancia que se ha movido el mouse desde el punto de inicio
            const dx = e.clientX - startX.current;
            const dy = e.clientY - startY.current;



            requestAnimationFrame(() => {
                pathRef.current!.style.left = `${Math.max(startLeft.current + dx, 0)}px`;
                pathRef.current!.style.top = `${Math.max(startTop.current + dy, 0)}px`;
            });
        }
    }

    const clear = () => {
        console.log(pathRef.current!.offsetLeft, pathRef.current!.offsetTop);
        pathRef.current!.style.pointerEvents = 'visible';
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