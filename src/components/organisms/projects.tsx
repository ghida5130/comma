"use client";

import ProjectCard from "@/components/molecules/projectCard";
import ProjectModal from "@/components/templates/projectModal";
import { myProjectData } from "@/data/projectData";
import { featuredProjectKeys, projectOrder } from "@/data/projectSummaryData";
import { useAppSelector } from "@/lib/hooks";
import { AnimatePresence } from "framer-motion";
import styles from "@/styles/projects.module.css";

export default function Projects() {
    const { isActive } = useAppSelector((state) => state.modal);
    const orderedProjects = Object.entries(myProjectData).sort(([left], [right]) => {
        const leftIndex = projectOrder.indexOf(left);
        const rightIndex = projectOrder.indexOf(right);
        return (leftIndex < 0 ? projectOrder.length : leftIndex)
            - (rightIndex < 0 ? projectOrder.length : rightIndex);
    });
    const featuredProjects = orderedProjects.filter(([key]) => featuredProjectKeys.includes(key));
    const otherProjects = orderedProjects.filter(([key]) => !featuredProjectKeys.includes(key));
    return (
        <>
            <section className={styles.grid} aria-label="프로젝트 목록">
                {featuredProjects.map(([key, data]) => (
                    <ProjectCard key={key} objKey={key} data={data} />
                ))}
            </section>
            {otherProjects.length > 0 ? (
                <details className={styles.moreProjects}>
                    <summary>다른 프로젝트 {otherProjects.length}개 보기</summary>
                    <section className={styles.grid} aria-label="추가 프로젝트 목록">
                        {otherProjects.map(([key, data]) => (
                            <ProjectCard key={key} objKey={key} data={data} />
                        ))}
                    </section>
                </details>
            ) : null}
            <AnimatePresence>{isActive && <ProjectModal />}</AnimatePresence>
        </>
    );
}
