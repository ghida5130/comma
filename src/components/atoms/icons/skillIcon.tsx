import Image from "next/image";

import skillIconData from "@/data/skillIconData";
import skillLabelData from "@/data/skillLabelData";

interface SkillIconType {
    type: string;
}

export default function SkillIcon({ type }: SkillIconType) {
    const data = skillIconData[type];

    return (
        <span className="skill-tag">
            {data ? <Image alt="" src={data.icon} width={18} height={18} /> : null}
            {data?.title ?? skillLabelData[type] ?? type}
        </span>
    );
}
