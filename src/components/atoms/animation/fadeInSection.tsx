// components/atoms/animation/FadeInSection.tsx
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { memo } from "react";

type Props = {
    children: React.ReactNode;
    delay?: number;
};

const variants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0 },
};

export default memo(function FadeInSection({ children, delay = 0 }: Props) {
    const reducedMotion = useReducedMotion();
    return (
        <motion.div
            initial={reducedMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -48px 0px" }}
            variants={variants}
            transition={{ duration: reducedMotion ? 0 : 0.3, delay: reducedMotion ? 0 : delay }}
        >
            {children}
        </motion.div>
    );
});
