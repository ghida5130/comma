import Image, { StaticImageData } from "next/image";
import styles from "@/styles/chrome.module.css";
import Link from "next/link";

interface LinkBtnTypes {
    url: string;
    title: string;
    logo: StaticImageData;
}

export default function LinkBtn({ url, title, logo }: LinkBtnTypes) {
    const isExternal = url.startsWith("http");

    // 외부 링크일경우 a 태그로 처리
    if (isExternal) {
        return (
            <a
                href={url}
                className={styles.profileLink}
                aria-label={`${title} (새 탭에서 열기)`}
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image src={logo} alt="" width={16} height={16} />
                {title}
                <span className={styles.arrow} aria-hidden="true">↗</span>
            </a>
        );
    }

    // 내부 링크일경우 Link 컴포넌트로 처리
    return (
        <Link
            href={url}
            className={styles.profileLink}
        >
            <Image src={logo} alt="" width={16} height={16} />
            {title}
            <span className={styles.arrow} aria-hidden="true">›</span>
        </Link>
    );
}
