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
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            {visible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 px-4 py-2 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 transition"
                >
                    ↑ Top
                </button>
            )}
        </>
    );
}
