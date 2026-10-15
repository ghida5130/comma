import SkillList from "@/components/molecules/skillList";

import MySkillData from "@/data/mySkillData";
import styles from "@/styles/content.module.css";

export default function Skills() {
    return (
        <section className={styles.rows}>
            {MySkillData.map(({ title, skills }) => (
                <SkillList key={title} title={title} skills={skills} />
            ))}
        </section>
    );
}
