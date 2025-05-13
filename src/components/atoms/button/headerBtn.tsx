import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ButtonProps {
    name: string;
    icon: StaticImageData;
    href: string;
}

export default function HeaderBtn({ name, icon, href }: ButtonProps) {
    return (
        <Link href={href} className="flex flex-col gap-1.5 w-16 items-center header-btn-hover">
            <Image src={icon} alt={`${name} icon`} width={25} />
            <p>{name}</p>
        </Link>
    );
}
