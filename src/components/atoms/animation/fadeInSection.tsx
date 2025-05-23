// components/atoms/animation/FadeInSection.tsx
"use client";

import { motion, useAnimation } from "framer-motion";
import { memo, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

type Props = {
    children: React.ReactNode;
    delay?: number;
};

const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default memo(function FadeInSection({ children, delay = 0 }: Props) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            variants={variants}
            transition={{ ...variants.visible.transition!, delay }}
        >
            {children}
        </motion.div>
    );
});
