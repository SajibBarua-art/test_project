import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Top = () => {
    const {pathname } = useLocation ();

    useEffect(() => {
        window.scroll(0,0);
    }, [pathname])
    return null;
};

export default Top;