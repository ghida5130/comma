import styles from "@/styles/projects.module.css";

export default function ModalDetailDataTitleT({ children }: { children: React.ReactNode }) {
    return <h5 className={styles.modalDetailTitle}>{children}</h5>;
}
