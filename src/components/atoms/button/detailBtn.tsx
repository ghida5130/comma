"use client";

import { useModal } from "@/hooks/useModal";
import styles from "@/styles/projects.module.css";

interface DetailBtnType {
    innerText: string;
    name: string;
}

export default function DetailBtn({ innerText, name }: DetailBtnType) {
    const { showModal } = useModal();

    return (
        <button
            type="button"
            aria-haspopup="dialog"
            aria-label={`${name} ${innerText}`}
            onClick={() => showModal(name)}
            className={styles.detailButton}
        >
            {innerText}
            <span aria-hidden="true">→</span>
        </button>
    );
}
