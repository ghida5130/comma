import SkillList from "@/components/molecules/skillList";

import MySkillData from "@/data/mySkillData";

export default function Skills() {
    return (
        <section className="flex flex-col gap-10">
            {MySkillData.map(({ title, skills }) => (
                <SkillList key={title} title={title} skills={skills} />
            ))}
        </section>
    );
}
