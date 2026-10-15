import Image from "next/image";
import modalLinkIcon from "@/public/icons/modal/modalLink.svg";
import Link from "next/link";
import styles from "@/styles/projects.module.css";

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
            aria-label={`${data.title} (새 탭)`}
            className={styles.modalLink}
        >
            <Image src={modalLinkIcon} alt="" aria-hidden="true" width={15} height={15} />
            {data.title}
        </Link>
    );
}
