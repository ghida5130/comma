"use client";

import { createContext, useContext, useRef, ReactNode, RefObject, useCallback, useMemo } from "react";

type ScrollContextType = {
    sectionRefs: RefObject<HTMLElement[]>;
    scrollTo: (index: number) => void;
};

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const ScrollProvider = ({ children }: { children: ReactNode }) => {
    const sectionRefs = useRef<HTMLElement[]>([]);

    const scrollTo = useCallback((index: number) => {
        sectionRefs.current[index]?.scrollIntoView({ behavior: "smooth" });
    }, []);

    const value = useMemo(() => ({ sectionRefs, scrollTo }), [scrollTo]);

    return <ScrollContext.Provider value={{ sectionRefs, scrollTo }}>{children}</ScrollContext.Provider>;
};

export const useCategoryScroll = () => {
    const context = useContext(ScrollContext);
    if (!context) throw new Error("useScroll must be used within a ScrollProvider");
    return context;
};
