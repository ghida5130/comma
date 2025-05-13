// components/atoms/animation/FadeInSection.tsx
"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

type Props = {
    children: React.ReactNode;
    delay?: number;
};

export default function FadeInSection({ children, delay = 0 }: Props) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });
    const controls = useAnimation();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [inView, controls]);

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: "easeOut", delay },
                },
            }}
        >
            {children}
        </motion.div>
    );
}
