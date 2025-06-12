import Image from "next/image";
import modalLinkIcon from "@/public/icons/modal/modalLink.svg";
import Link from "next/link";

interface ModalLinkBtnType {
    data: {
        title: string;
        url: string;
    };
}

export default function ModalLinkBtn({ data }: ModalLinkBtnType) {
    return (
        <Link
            target="_blank"
            rel="noopener noreferrer"
            href={data.url}
            className="flex w-fit gap-2 text-lg ml-3 mb-1 text-blue-600 font-medium hover:font-bold"
        >
            <Image src={modalLinkIcon} alt={data.title + "link button"} width={15} />
            {data.title}
        </Link>
    );
}
