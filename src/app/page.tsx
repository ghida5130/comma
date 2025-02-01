import Image from "next/image";
import styles from "./page.module.css";
import PageInformation from "@/components/pageInformation";

export default function Home() {
    return (
        <div className={styles.main}>
            <PageInformation />
            <PageInformation />
            <PageInformation />
        </div>
    );
}
