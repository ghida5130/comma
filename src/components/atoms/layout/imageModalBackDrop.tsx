"use client";

import { useImageModal } from "@/hooks/useImageModal";
import React from "react";
import styles from "@/styles/projects.module.css";

export default function ImageModalBackDrop({ children }: { children: React.ReactNode }) {
    const { hideImageModal } = useImageModal();
    return (
        <div
            onClick={(event) => {
                event.stopPropagation();
                if (event.target === event.currentTarget) hideImageModal();
            }}
            className={styles.imageBackdrop}
        >
            {children}
        </div>
    );
}
