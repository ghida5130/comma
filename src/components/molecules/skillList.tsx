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
            <h3 className="text-lg font-extrabold mb-1">{title}</h3>
            <div className="flex flex-wrap gap-3">
                {skills.map((data) => (
                    <SkillIcon key={data} type={data} />
                ))}
            </div>
        </div>
    );
}
