"use client";

import { createContext, useContext, useRef, ReactNode, RefObject, useCallback, useMemo, useEffect, useState } from "react";

type ScrollContextType = {
    sectionRefs: RefObject<HTMLElement[]>;
    scrollTo: (index: number) => void;
    activeIndex: number;
};

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const ScrollProvider = ({ children }: { children: ReactNode }) => {
    const sectionRefs = useRef<HTMLElement[]>([]);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        let frame = 0;
        const updateActiveSection = () => {
            let current = 0;
            for (let index = 0; index < sectionRefs.current.length; index++) {
                if (sectionRefs.current[index]?.getBoundingClientRect().top <= 160) {
                    current = index;
                }
            }
            if (window.scrollY > 0 && window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
                current = sectionRefs.current.length - 1;
            }
            setActiveIndex(current);
            frame = 0;
        };
        const onScroll = () => {
            if (!frame) frame = window.requestAnimationFrame(updateActiveSection);
        };
        updateActiveSection();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);
        return () => {
            window.cancelAnimationFrame(frame);
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
        };
    }, []);

    const scrollTo = useCallback((index: number) => {
        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        sectionRefs.current[index]?.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" });
    }, []);

    const value = useMemo(() => ({ sectionRefs, scrollTo, activeIndex }), [scrollTo, activeIndex]);

    return <ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>;
};

export const useCategoryScroll = () => {
    const context = useContext(ScrollContext);
    if (!context) throw new Error("useScroll must be used within a ScrollProvider");
    return context;
};
