import styles from "@/styles/chrome.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>박성수 · 개발자</p>
            <div className={styles.footerLinks}>
                <a href="https://github.com/ghida5130" target="_blank" rel="noopener noreferrer" aria-label="GitHub (새 탭에서 열기)">GitHub ↗</a>
                <a href="https://cstelladev.tistory.com/" target="_blank" rel="noopener noreferrer" aria-label="Tistory (새 탭에서 열기)">Tistory ↗</a>
            </div>
        </footer>
    );
}
