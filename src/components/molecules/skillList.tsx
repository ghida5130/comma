import Image, { StaticImageData } from "next/image";
import jsIcon from "@/public/icons/skills/js.svg";
import SkillIcon from "@/components/atoms/icons/skillIcon";

interface SkillAreaType {
    title: string;
    skills: string[];
}

export default function SkillArea({ title, skills }: SkillAreaType) {
    return (
        <div>
            <p className="text-lg font-extrabold mb-1">{title}</p>
            <div className="flex flex-wrap gap-3 mb-10">
                {skills.map((data) => (
                    <SkillIcon key={data} type={data} />
                ))}
            </div>
        </div>
    );
}
