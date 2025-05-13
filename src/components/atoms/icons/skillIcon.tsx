import Image, { StaticImageData } from "next/image";
import React from "react";

import skillIconData from "@/data/skillIconData";

interface SkillIconType {
    type: string;
}

export default function SkillIcon({ type }: SkillIconType) {
    const data = skillIconData[type];

    if (!data) return null;
    return (
        <div
            className={`flex gap-1 items-center justify-center border-2 rounded-2xl px-3 py-1.5 font-semibold`}
            style={{ borderColor: data.color }}
        >
            <Image alt={`${data.title} icon`} src={data.icon} width={25} />
            {data.title}
        </div>
    );
}
