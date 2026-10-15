import Image from "next/image";
import Link from "next/link";
import projectGithubIcon from "@/public/icons/modal/github.svg";
import styles from "@/styles/projects.module.css";

interface ProjectGithubBtnProps {
    href: string | null;
    title: string;
    alias?: string;
}

export default function ProjectGithubBtn({ href, title, alias }: ProjectGithubBtnProps) {
    if (href === null) return null;
    return (
        <Link
            target="_blank"
            rel="noopener noreferrer"
            href={href}
            aria-label={`${title} Github ${alias ?? ""} (새 탭)`}
            className={styles.link}
        >
            <Image src={projectGithubIcon} alt="" aria-hidden="true" width={16} height={16} />
            <span>Github {alias ?? null}</span>
        </Link>
    );
}
