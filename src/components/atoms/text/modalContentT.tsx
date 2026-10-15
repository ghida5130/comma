import styles from "@/styles/projects.module.css";

export default function ModalContentT({ data }: { data: string }) {
    const parts = data.split(/(\*\*.*?\*\*)/);

    return (
        <p className={styles.modalContent}>
            <span className={styles.contentBullet} aria-hidden="true">▸</span>
            <span className={styles.contentText}>
                {parts.map((part, i) => {
                    if (part.startsWith("**") && part.endsWith("**")) {
                        return <strong key={i}>{part.slice(2, -2)}</strong>;
                    }
                    return <span key={i}>{part}</span>;
                })}
            </span>
        </p>
    );

    // return <p className="text-lg ml-3 mb-1">▸ {data}</p>;
}
