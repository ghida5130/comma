import styles from "@/styles/projects.module.scss";
import PageInformation from "@/components/pageInformation";

import { pageData } from "@/data/pageData";

export default function Projects() {
    return (
        <div className={styles.items}>
            {pageData.map((val) => (
                <PageInformation key={val.title} data={val} />
            ))}
        </div>
    );
}
