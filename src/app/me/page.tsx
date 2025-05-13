import styles from "@/styles/me.module.scss";

import Introduce from "@/components/organisms/me/introduce";
import Skills from "@/components/organisms/me/skills";
import Education from "@/components/organisms/me/education";
import Activity from "@/components/organisms/me/activity";
import Others from "@/components/organisms/me/others";
import SectionTitle from "@/components/atoms/layout/sectionTitle";

import FadeInSection from "@/components/atoms/animation/fadeInSection";

export default function Me() {
    return (
        <div className="w-[90%] mx-auto flex flex-col gap-8 relative md:w-[80%] xl:w-[70%]">
            <FadeInSection>
                <Introduce />
                <SectionTitle title="Skills" />
                <Skills />
            </FadeInSection>
            <FadeInSection>
                <SectionTitle title="Education" />
                <Education />
            </FadeInSection>
            <FadeInSection>
                <SectionTitle title="Activity" />
                <Activity />
                <div>수상내역</div>
            </FadeInSection>
            <FadeInSection>
                <SectionTitle title="Others" />
                <Others />
            </FadeInSection>
        </div>
    );
}
