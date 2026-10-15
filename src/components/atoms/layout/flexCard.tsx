import styles from "@/styles/content.module.css";

export default function FlexCard({ children }: { children: React.ReactNode }) {
    return (
        <article className={styles.activityCard}>
            {children}
        </article>
    );
}
