import Image from "next/image";
import closeBtnIcon from "@/public/icons/modal/close.svg";
import { useImageModal } from "@/hooks/useImageModal";
import styles from "@/styles/projects.module.css";

export default function CloseImageModalBtn() {
    const { hideImageModal } = useImageModal();
    return (
        <button
            type="button"
            aria-label="스크린샷 닫기"
            onClick={() => {
                hideImageModal();
            }}
            className={styles.imageCloseButton}
        >
            <Image alt="" aria-hidden="true" src={closeBtnIcon} width={17} height={17} />
        </button>
    );
}
