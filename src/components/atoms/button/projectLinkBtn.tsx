import Image from "next/image";
import Link from "next/link";
import projectLinkIcon from "@/public/icons/modal/link.svg";

interface ProjectLinkBtnProps {
    href: string | null;
    title: string;
}

export default function ProjectLinkBtn({ href, title }: ProjectLinkBtnProps) {
    if (href === null) return null;
    return (
        <Link target="_blank" rel="noopener noreferrer" href={href} className="flex gap-2 text-[#71afff]">
            <Image src={projectLinkIcon} alt={title + "link button"} width={15} /> Demo
        </Link>
    );
}
