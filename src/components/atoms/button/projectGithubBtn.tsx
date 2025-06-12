import Image from "next/image";
import Link from "next/link";
import projectGithubIcon from "@/public/icons/modal/github.svg";

interface ProjectGithubBtnProps {
    href: string | null;
    title: string;
    alias?: string;
}

export default function ProjectGithubBtn({ href, title, alias }: ProjectGithubBtnProps) {
    if (href === null) return null;
    return (
        <Link target="_blank" rel="noopener noreferrer" href={href} className="flex gap-2 text-[#71afff]">
            <Image src={projectGithubIcon} alt={title + "github button"} width={15} />
            <span className="truncate">Github {alias ?? null}</span>
        </Link>
    );
}
