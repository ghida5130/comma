import styles from "@/styles/me.module.scss";

import Introduce from "@/components/organisms/me/introduce";
import Skills from "@/components/organisms/me/skills";
import Education from "@/components/organisms/me/education";
import Activity from "@/components/organisms/me/activity";
import Others from "@/components/organisms/me/others";
import SectionTitle from "@/components/atoms/layout/sectionTitle";

export default function Me() {
    return (
        <div className="w-[90%] mx-auto flex flex-col gap-8 relative md:w-[80%] xl:w-[70%]">
            <Introduce />
            <SectionTitle title="Skills" />
            <Skills />
            <SectionTitle title="Education" />
            <Education />
            <SectionTitle title="Activity" />
            <Activity />
            <div>수상내역</div>
            <SectionTitle title="Others" />
            <Others />
        </div>
    );
}
