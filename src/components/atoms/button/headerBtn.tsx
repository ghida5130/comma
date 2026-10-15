import { useCategoryScroll } from "@/app/scrollContext";
import Image, { StaticImageData } from "next/image";
import styles from "@/styles/chrome.module.css";

interface ButtonProps {
    name: string;
    icon: StaticImageData;
    href: string;
    idx: number;
}

export default function HeaderBtn({ name, icon, href, idx }: ButtonProps) {
    const { scrollTo, activeIndex } = useCategoryScroll();
    return (
        <a
            href={href}
            className={styles.navButton}
            aria-current={activeIndex === idx + 1 ? "location" : undefined}
            onClick={(event) => {
                event.preventDefault();
                scrollTo(idx + 1);
            }}
        >
            <Image src={icon} alt="" width={18} height={18} />
            <span>{name}</span>
        </a>
    );
}
