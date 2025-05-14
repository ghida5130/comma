import SkillList from "@/components/molecules/skillList";

import MySkillData from "@/data/mySkillData";

export default function Skills() {
    return (
        <section>
            {MySkillData.map(({ title, skills }) => (
                <SkillList key={title} title={title} skills={skills} />
            ))}
        </section>
    );
}
