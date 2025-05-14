import { useCategoryScroll } from "@/app/scrollContext";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ButtonProps {
    name: string;
    icon: StaticImageData;
    href: string;
    idx: number;
}

export default function HeaderBtn({ name, icon, href, idx }: ButtonProps) {
    const { scrollTo } = useCategoryScroll();
    return (
        <button className="flex flex-col gap-1.5 w-16 items-center header-btn-hover" onClick={() => scrollTo(idx)}>
            <Image src={icon} alt={`${name} icon`} width={25} />
            <p>{name}</p>
        </button>
    );
}
