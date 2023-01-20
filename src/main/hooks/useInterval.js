import { useEffect, useRef } from "react";

export function useInterval(cb, delay) {
    const intervalRef = useRef(null);
    const savedCb = useRef(cb);
    
    useEffect(() => {
        savedCb.current = cb;
    }, [cb]);

    useEffect(() => {
        const tick = () => savedCb.current();

        if (typeof delay === 'number') {
            intervalRef.current = setInterval(tick, delay);
            return () => clearInterval(intervalRef.current);
        }
    }, [delay]);
}