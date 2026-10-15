import { IntroduceDataType } from "@/types/type";
import IntroduceDetailT from "../atoms/text/introduceDetailT";
import styles from "@/styles/content.module.css";

export default function IntroduceCard({ title, detail, content }: IntroduceDataType) {
    return (
        <article className={`${styles.copyRow} ${styles.introduceRow}`}>
            <h3 className={styles.copyHeading}>{title}</h3>
            <div className={styles.copyBody}>
                {detail ? <p className={styles.copyLead}>{detail}</p> : null}
                <ul className={styles.detailList}>
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
