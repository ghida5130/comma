// components/ScrollToTopButton.tsx
"use client";

import { useEffect, useState } from "react";

export default function ScrollToTopBtn() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", toggleVisibility);
        toggleVisibility();
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
    };

    return (
        <>
            {visible && (
                <button
                    onClick={scrollToTop}
                    type="button"
                    aria-label="맨 위로 이동"
                    className="scroll-top-button"
                >
                    <span aria-hidden="true">↑</span>
                </button>
            )}
        </>
    );
}
