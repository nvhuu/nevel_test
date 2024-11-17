'use client';
import { useEffect, useLayoutEffect, useState } from 'react';

interface WindowSize {
    width: number;
    height: number;
}

interface WindowSizeResult extends WindowSize {
    isMobilePhone: boolean;
    isTablet: boolean;
}

export default function useWindowResize(
    isMobileModeFirst?: boolean,
): WindowSizeResult {
    const [windowSize, setWindowSize] = useState<WindowSize>({
        width: isMobileModeFirst ? 0 : 1920,
        height: isMobileModeFirst ? 0 : 1080,
    });

    const handleSize = () => {
        setWindowSize({
            width: window?.innerWidth,
            height: window?.innerHeight,
        });
    };

    useEffect(() => {
        window.addEventListener('resize', handleSize);
        return () => {
            window.removeEventListener('resize', handleSize);
        };
    }, []);

    useLayoutEffect(() => {
        handleSize();
    }, []);

    const isMobilePhone = () => {
        return windowSize.width <= 576;
    };
    const isTablet = () => {
        return windowSize.width <= 768;
    };
    return {
        ...windowSize,
        isMobilePhone: isMobilePhone(),
        isTablet: isTablet(),
    };
}
