"use client";

import Overview from "@/components/organisms/overview";
import Skills from "@/components/organisms/skills";
import Activity from "@/components/organisms/activity";
import SectionTitle from "@/components/atoms/layout/sectionTitle";

import { useCategoryScroll } from "./scrollContext";
import Projects from "@/components/organisms/projects";
import { useCallback } from "react";
import Introduce from "@/components/organisms/introduce";
import Capability from "@/components/organisms/capability";
import styles from "./page.module.css";

export default function Home() {
    return (
        <div className={styles.portfolio}>
            <ScrollNum num={0} id="home">
                <Overview />
            </ScrollNum>
            <ScrollNum num={1} id="about">
                <SectionTitle title="소개" />
                <Introduce />
            </ScrollNum>
            <ScrollNum num={2} id="projects">
                <SectionTitle title="프로젝트" />
                <Projects />
            </ScrollNum>
            <ScrollNum num={3} id="capability">
                <SectionTitle title="핵심 역량" />
                <Capability />
            </ScrollNum>
            <ScrollNum num={4} id="activity">
                <SectionTitle title="학력·활동" />
                <Activity />
            </ScrollNum>
            <ScrollNum num={5} id="skills">
                <SectionTitle title="사용 기술" />
                <div id="skill-list">
                    <Skills />
                </div>
            </ScrollNum>
        </div>
    );
}

const ScrollNum = ({ num, id, children }: { num: number; id: string; children: React.ReactNode }) => {
    const { sectionRefs } = useCategoryScroll();
    const setRef = useCallback(
        (el: HTMLElement | null) => {
            if (el) sectionRefs.current[num] = el;
        },
        [num, sectionRefs]
    );
    return <div ref={setRef} id={id} className={styles.section}>{children}</div>;
};
