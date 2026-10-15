"use client";

import { useModal } from "@/hooks/useModal";
import React from "react";
import { createPortal } from "react-dom";
import styles from "@/styles/projects.module.css";

export default function ModalBackDrop({ children }: { children: React.ReactNode }) {
    const { hideModal } = useModal();
    if (typeof document === "undefined") return null;

    return createPortal(
        <div
            onClick={(event) => {
                if (event.target === event.currentTarget) hideModal();
            }}
            className={styles.backdrop}
        >
            {children}
        </div>,
        document.body
    );
}
