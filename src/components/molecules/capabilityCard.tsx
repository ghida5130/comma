import { IntroduceDataType } from "@/types/type";
import IntroduceDetailT from "../atoms/text/introduceDetailT";
import styles from "@/styles/content.module.css";

interface CapabilityCardProps extends IntroduceDataType {
    summary: string;
}

export default function CapabilityCard({ title, detail, content, summary }: CapabilityCardProps) {
    return (
        <article className={styles.copyRow}>
            <h3 className={styles.copyHeading}>{title}</h3>
            <div className={styles.copyBody}>
                {detail ? <p className={styles.copyLead}>{detail}</p> : null}
                <IntroduceDetailT data={summary} />
                <ul className={`${styles.detailList} ${styles.capabilityEvidence}`}>
                    {content.map((data) => (
                        <li key={data}>
                            <IntroduceDetailT data={data} />
                        </li>
                    ))}
                </ul>
            </div>
        </article>
    );
}
