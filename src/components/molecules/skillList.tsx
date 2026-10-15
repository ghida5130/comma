import SkillIcon from "@/components/atoms/icons/skillIcon";
import styles from "@/styles/content.module.css";

interface SkillAreaType {
    title: string;
    skills: string[];
}

export default function SkillArea({ title, skills }: SkillAreaType) {
    return (
        <div className={styles.skillRow}>
            <h3 className={styles.skillHeading}>{title}</h3>
            <div className={styles.skillItems}>
                {skills.map((data) => (
                    <SkillIcon key={data} type={data} />
                ))}
            </div>
        </div>
    );
}
