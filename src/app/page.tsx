"use client";

import Introduce from "@/components/organisms/introduce";
import Skills from "@/components/organisms/skills";
import Activity from "@/components/organisms/activity";
import SectionTitle from "@/components/atoms/layout/sectionTitle";

import FadeInSection from "@/components/atoms/animation/fadeInSection";
import { useCategoryScroll } from "./scrollContext";
import Projects from "@/components/organisms/projects";

export default function Home() {
    return (
        <div className="w-[90%] mx-auto flex flex-col gap-8 relative md:w-[80%] xl:w-[70%]">
            <ScrollNum num={0}>
                <FadeInSection>
                    <Introduce />
                </FadeInSection>
            </ScrollNum>
            <ScrollNum num={1}>
                <FadeInSection>
                    <SectionTitle title="Skills" />
                    <Skills />
                </FadeInSection>
            </ScrollNum>
            <ScrollNum num={2}>
                <FadeInSection>
                    <SectionTitle title="Activity" />
                    <Activity />
                </FadeInSection>
            </ScrollNum>
            <ScrollNum num={3}>
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
    return (
        <div
            ref={(el) => {
                sectionRefs.current[num] = el!;
            }}
        >
            {children}
        </div>
    );
};
