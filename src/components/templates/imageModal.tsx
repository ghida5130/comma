"use client";

import { useImageModal } from "@/hooks/useImageModal";
import Image from "next/image";
import CloseImageModalBtn from "../atoms/button/closeImageModalBtn";
import ImageModalBackDrop from "../atoms/layout/imageModalBackDrop";
import styles from "@/styles/projects.module.css";
import { useEffect, useRef } from "react";
import { useAppDispatch } from "@/lib/hooks";
import { closeImageModal } from "@/lib/features/modal/imageModalSlice";

export default function ImageModal({ returnFocus }: { returnFocus: HTMLButtonElement | null }) {
    const { imageModalName, imageModalUrl, hideImageModal } = useImageModal();
    const dispatch = useAppDispatch();
    const dialogRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const previousFocus = returnFocus ?? (document.activeElement instanceof HTMLElement ? document.activeElement : null);
        const closeButton = dialogRef.current?.querySelector<HTMLButtonElement>("button");
        closeButton?.focus({ preventScroll: true });

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                event.preventDefault();
                dispatch(closeImageModal());
            } else if (event.key === "Tab") {
                event.preventDefault();
                closeButton?.focus();
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            previousFocus?.focus({ preventScroll: true });
        };
    }, [dispatch, returnFocus]);

    return (
        <ImageModalBackDrop>
            <div
                ref={dialogRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby="image-modal-title"
                aria-describedby="image-modal-hint"
                data-image-dialog
                className={styles.imageDialog}
                onClick={(event) => {
                    event.stopPropagation();
                    hideImageModal();
                }}
            >
                <CloseImageModalBtn />
                <p id="image-modal-hint" className={styles.imageHint}>이미지를 클릭하면 닫힙니다.</p>
                <div className={styles.imageCanvas}>
                    <Image src={imageModalUrl} alt={imageModalName} fill sizes="100vw" />
                </div>
                <h4 id="image-modal-title" className={styles.imageTitle}>{imageModalName}</h4>
            </div>
        </ImageModalBackDrop>
    );
}
