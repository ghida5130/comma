"use client";

import Image from "next/image";
import ModalBackDrop from "../atoms/layout/modalBackDrop";
import CloseModalBtn from "../atoms/button/closeModalBtn";
import { useModal } from "@/hooks/useModal";
import { motion, useReducedMotion } from "framer-motion";
import projectDetailData from "@/data/projectDetailData";
import { DetailDataType } from "@/types/type";
import { useEffect, useRef, useState } from "react";
import { useImageModal } from "@/hooks/useImageModal";
import ImageModal from "./imageModal";
import ModalCategoryT from "../atoms/text/modalCategoryT";
import ModalContentT from "../atoms/text/modalContentT";
import ModalDetailDataTitleT from "../atoms/text/modalDetailDataTitleT";
import SkillIcon from "../atoms/icons/skillIcon";
import ModalLinkBtn from "../atoms/button/modalLinkBtn";
import styles from "@/styles/projects.module.css";
import { useAppDispatch } from "@/lib/hooks";
import { closeModal } from "@/lib/features/modal/modalSlice";
import { closeImageModal } from "@/lib/features/modal/imageModalSlice";

export default function ProjectModal() {
    const { modalName } = useModal();
    const [currentProject] = useState<DetailDataType | null>(() => projectDetailData[modalName] ?? null);
    // const currentProject = null;
    const { isImageModalActive, setImageModalUrl, showImageModal } = useImageModal();
    const [imageTrigger, setImageTrigger] = useState<HTMLButtonElement | null>(null);
    const dispatch = useAppDispatch();
    const dialogRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const reduceMotion = useReducedMotion();

    useEffect(() => {
        const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
        const previousOverflow = document.body.style.overflow;
        const previousPadding = document.body.style.paddingRight;
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

        document.body.style.overflow = "hidden";
        if (scrollbarWidth > 0) {
            const currentPadding = parseFloat(window.getComputedStyle(document.body).paddingRight) || 0;
            document.body.style.paddingRight = `${currentPadding + scrollbarWidth}px`;
        }
        titleRef.current?.focus({ preventScroll: true });

        const handleKeyDown = (event: KeyboardEvent) => {
            if (document.querySelector("[data-image-dialog]")) return;
            if (event.key === "Escape") {
                event.preventDefault();
                dispatch(closeModal());
                return;
            }
            if (event.key !== "Tab" || !dialogRef.current) return;

            const focusable = Array.from(
                dialogRef.current.querySelectorAll<HTMLElement>(
                    'a[href], button:not([disabled]), [tabindex="0"]'
                )
            ).filter((element) => element.getClientRects().length > 0);
            const first = focusable[0];
            const last = focusable[focusable.length - 1];

            if (!first || !last) {
                event.preventDefault();
                titleRef.current?.focus();
                return;
            }
            if (!dialogRef.current.contains(document.activeElement)) {
                event.preventDefault();
                (event.shiftKey ? last : first).focus();
            } else if (event.shiftKey && (document.activeElement === first || document.activeElement === titleRef.current)) {
                event.preventDefault();
                last.focus();
            } else if (!event.shiftKey && (document.activeElement === last || document.activeElement === titleRef.current)) {
                event.preventDefault();
                first.focus();
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = previousOverflow;
            document.body.style.paddingRight = previousPadding;
            dispatch(closeImageModal());
            previousFocus?.focus({ preventScroll: true });
        };
    }, [dispatch]);

    return (
        <ModalBackDrop>
            <motion.div
                key="modal"
                ref={dialogRef}
                role="dialog"
                aria-modal={!isImageModalActive}
                aria-hidden={isImageModalActive || undefined}
                inert={isImageModalActive}
                aria-labelledby="project-modal-title"
                aria-describedby="project-modal-description"
                initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: reduceMotion ? 1 : 0.98 }}
                transition={{ duration: reduceMotion ? 0 : 0.2 }}
                onClick={(e) => e.stopPropagation()}
                className={styles.dialog}
            >
                {currentProject ? (
                    <>
                        <div className={styles.modalHeader}>
                            <h3 id="project-modal-title" ref={titleRef} tabIndex={-1} className={styles.modalTitle}>
                                {currentProject.title}
                            </h3>
                            <p className={styles.develop}>{currentProject.develop}</p>
                            <p id="project-modal-description" className={styles.modalDescription}>
                                {currentProject.description}
                            </p>
                        </div>
                        <div className={styles.modalBody}>
                            <section>
                                <ModalCategoryT>해결하려던 문제</ModalCategoryT>
                                <ModalContentT data={currentProject.motivation} />
                            </section>
                            <section>
                                <ModalCategoryT>서비스 개요</ModalCategoryT>
                                <div className={`${styles.skills} ${styles.modalSkills}`}>
                                    {currentProject.skills.map((val) => (
                                        <SkillIcon key={val} type={val} />
                                    ))}
                                </div>
                                {currentProject.overview.map((val, idx) => (
                                    <ModalContentT key={idx} data={val} />
                                ))}
                            </section>
                            <section>
                                <ModalCategoryT>문제 해결 과정</ModalCategoryT>
                                {currentProject.learned.map(({ title, content, link }, i) => (
                                    <div key={title} className={styles.learnedItem}>
                                        <ModalDetailDataTitleT>{title}</ModalDetailDataTitleT>
                                        {content.map((data, j) => (
                                            <ModalContentT key={"project detail content" + i + j} data={data} />
                                        ))}
                                        {link
                                            ? link.map((data) => <ModalLinkBtn key={data.title} data={data} />)
                                            : null}
                                    </div>
                                ))}
                            </section>
                            <section>
                                <ModalCategoryT>스크린샷</ModalCategoryT>
                                {currentProject.images.length > 0 ? (
                                    <div className={styles.screenshotGrid}>
                                        {currentProject.images.map(({ title, content }) => (
                                            <button
                                                key={title}
                                                type="button"
                                                aria-haspopup="dialog"
                                                aria-label={`${title} 크게 보기`}
                                                className={styles.screenshotButton}
                                                onClick={(event) => {
                                                    setImageTrigger(event.currentTarget);
                                                    setImageModalUrl(content);
                                                    showImageModal(title);
                                                }}
                                            >
                                                <span className={styles.screenshotPreview}>
                                                    <Image
                                                        src={content}
                                                        alt={title}
                                                        fill
                                                        sizes="(max-width: 600px) 100vw, 400px"
                                                    />
                                                </span>
                                                <span className={styles.screenshotCaption}>{title}</span>
                                            </button>
                                        ))}
                                    </div>
                                ) : (
                                    <p className={styles.emptyMedia}>프로젝트 화면 자료를 준비하고 있습니다.</p>
                                )}
                            </section>
                        </div>
                    </>
                ) : null}
                <CloseModalBtn />
            </motion.div>
            {isImageModalActive && <ImageModal returnFocus={imageTrigger} />}
        </ModalBackDrop>
    );
}
