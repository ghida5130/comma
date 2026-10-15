"use client";

import DetailBtn from "@/components/atoms/button/detailBtn";
import ProjectGithubBtn from "@/components/atoms/button/projectGithubBtn";
import ProjectLinkBtn from "@/components/atoms/button/projectLinkBtn";
import SkillIcon from "@/components/atoms/icons/skillIcon";
import projectDetailData from "@/data/projectDetailData";
import { projectSummaryData } from "@/data/projectSummaryData";
import { useModal } from "@/hooks/useModal";
import styles from "@/styles/projects.module.css";
import { ProjectDataType } from "@/types/type";
import Image from "next/image";
import type { MouseEvent } from "react";

interface ProjectType {
    objKey: string;
    data: ProjectDataType;
}

export default function ProjectCard({ objKey, data }: ProjectType) {
    const preview = projectDetailData[objKey]?.images[0];
    const summary = projectSummaryData[objKey];
    const { showModal } = useModal();

    const handleCardClick = (event: MouseEvent<HTMLElement>) => {
        if (!(event.target instanceof Element)) return;
        const interactive = event.target.closest("a, button, details, summary");
        if (interactive && event.currentTarget.contains(interactive)) return;

        const selection = window.getSelection();
        if (
            selection &&
            !selection.isCollapsed &&
            (event.currentTarget.contains(selection.anchorNode) || event.currentTarget.contains(selection.focusNode))
        ) {
            return;
        }

        event.currentTarget.querySelector<HTMLButtonElement>('button[aria-haspopup="dialog"]')?.focus({ preventScroll: true });
        showModal(objKey);
    };

    return (
        <article className={styles.card} aria-labelledby={`project-${objKey}`} onClick={handleCardClick}>
            {preview ? (
                <div className={styles.preview}>
                    <Image
                        src={preview.content}
                        alt={preview.title}
                        fill
                        sizes="(max-width: 959px) 100vw, 50vw"
                    />
                </div>
            ) : (
                <div className={`${styles.preview} ${styles.previewPlaceholder}`}>
                    <span className={styles.previewLabel}>{data.title}</span>
                    <span className={styles.previewNote}>프로젝트 화면 준비 중</span>
                </div>
            )}
            <div className={styles.cardContent}>
                <header>
                    <h3 id={`project-${objKey}`} className={styles.title}>
                        {data.title}
                    </h3>
                    <p className={styles.develop}>{data.develop}</p>
                    <p className={styles.description}>{data.description}</p>
                </header>
                <div className={styles.skills}>
                    {data.skills.map((val) => (
                        <SkillIcon key={val} type={val} />
                    ))}
                </div>
                <ul className={styles.highlights}>
                    {summary
                        ? summary.highlights.map(({ text, emphasis, suffix }) => (
                            <li key={text + emphasis}>
                                {text}<strong>{emphasis}</strong>{suffix}
                            </li>
                        ))
                        : data.introduce.slice(0, 3).map((val) => <li key={val}>{val}</li>)}
                </ul>
                <div className={styles.footer}>
                    <div className={styles.actions}>
                        <ProjectLinkBtn href={data.link} title={data.title} />
                        <ProjectGithubBtn href={data.github} title={data.title} />
                        {data.serverGithub ? (
                            <ProjectGithubBtn href={data.serverGithub} title={data.title} alias="(Server)" />
                        ) : null}
                    </div>
                    <DetailBtn innerText="자세히 보기" name={objKey} />
                </div>
            </div>
        </article>
    );
}
