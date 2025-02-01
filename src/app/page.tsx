import Image from "next/image";
import styles from "./page.module.css";
import PageInformation from "@/components/pageInformation";

import { pageData } from "@/data/pageData";

export default function Home() {
    return (
        <div className={styles.items}>
            {pageData.map((val) => (
                <PageInformation key={val.title} data={val} />
            ))}
        </div>
    );
}
