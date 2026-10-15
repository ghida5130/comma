import Image from "next/image";
import bookmarkIcon from "@/public/icons/modal/bookmark.svg";
import styles from "@/styles/projects.module.css";

export default function ModalCategory({ children }: { children: React.ReactNode }) {
    return (
        <h4 className={styles.modalCategory}>
            <Image src={bookmarkIcon} alt="" aria-hidden="true" width={17} height={20} />
            {children}
        </h4>
    );
}
