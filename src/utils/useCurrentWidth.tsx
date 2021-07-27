import { useEffect, useState } from "react";


const getWidth = () => window.innerWidth;

const useCurrentWidth = () => {
    const [width, setWidth] = useState(getWidth());
    
    useEffect(() => {
        const resizeListener = () => setWidth(getWidth())
        window.addEventListener('resize', resizeListener);
    })

    return width;
}

export default useCurrentWidth