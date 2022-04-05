import { useEffect, ReactNode, useState } from "react";


/**
 * 
 * @param   Wrapper to fix the styled-components issue server side rendering 
 * https://github.com/vercel/next.js/issues/7322
 * @returns 
 */

const ShowOnClientSideOnlyWrapper = ({ children }: { children: JSX.Element }) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);
    }, []);

    if (!show) return null
    return children;
}

export default ShowOnClientSideOnlyWrapper

