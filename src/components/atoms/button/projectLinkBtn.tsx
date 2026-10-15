import Image from "next/image";
import Link from "next/link";
import projectLinkIcon from "@/public/icons/modal/link.svg";
import styles from "@/styles/projects.module.css";

interface ProjectLinkBtnProps {
    href: string | null;
    title: string;
}

export default function ProjectLinkBtn({ href, title }: ProjectLinkBtnProps) {
    if (href === null) return null;
    return (
        <Link
            target="_blank"
            rel="noopener noreferrer"
            href={href}
            aria-label={`${title} Demo (새 탭)`}
            className={styles.link}
        >
            <Image src={projectLinkIcon} alt="" aria-hidden="true" width={15} height={15} /> Demo
        </Link>
    );
}
