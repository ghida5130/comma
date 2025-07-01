"use client";

import Overview from "@/components/organisms/overview";
import Skills from "@/components/organisms/skills";
import Activity from "@/components/organisms/activity";
import SectionTitle from "@/components/atoms/layout/sectionTitle";

import FadeInSection from "@/components/atoms/animation/fadeInSection";
import { useCategoryScroll } from "./scrollContext";
import Projects from "@/components/organisms/projects";
import { useCallback, useState } from "react";
import Introduce from "@/components/organisms/introduce";
import ExtendBtn from "@/components/atoms/button/extendBtn";
import Capability from "@/components/organisms/capability";

export default function Home() {
    const [isSkillOpen, setIsSkillOpen] = useState(false);
    return (
        <div className="w-[90%] mx-auto flex flex-col gap-28 relative md:w-[80%] xl:w-[70%]">
            <div className="mb-[-80px]">
                <ScrollNum num={0}>
                    <FadeInSection>
                        <Overview />
                    </FadeInSection>
                </ScrollNum>
            </div>
            <ScrollNum num={1}>
                <FadeInSection>
                    <SectionTitle title="Introduce" />
                    <Introduce />
                </FadeInSection>
            </ScrollNum>
            <ScrollNum num={2}>
                <FadeInSection>
                    <SectionTitle title="Capabilities" />
                    <Capability />
                </FadeInSection>
            </ScrollNum>
            <ScrollNum num={3}>
                <FadeInSection>
                    <SectionTitle title="Skills" />
                    <ExtendBtn name="사용 기술 목록" state={isSkillOpen} setState={setIsSkillOpen} />
                    {isSkillOpen ? <Skills /> : <></>}
                </FadeInSection>
            </ScrollNum>
            <ScrollNum num={4}>
                <FadeInSection>
                    <SectionTitle title="Experiences" />
                    <Activity />
                </FadeInSection>
            </ScrollNum>
            <ScrollNum num={5}>
                <FadeInSection>
                    <SectionTitle title="Projects" />
                    <Projects />
                </FadeInSection>
            </ScrollNum>
        </div>
    );
}

const ScrollNum = ({ num, children }: { num: number; children: React.ReactNode }) => {
    const { sectionRefs } = useCategoryScroll();
    const setRef = useCallback(
        (el: HTMLElement | null) => {
            if (el) sectionRefs.current[num] = el;
        },
        [num]
    );
    return <div ref={setRef}>{children}</div>;
};
