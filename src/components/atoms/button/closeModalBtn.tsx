import { useModal } from "@/hooks/useModal";
import Image from "next/image";
import closeBtnIcon from "@/public/icons/modal/close.svg";
import styles from "@/styles/projects.module.css";

export default function CloseModalBtn() {
    const { hideModal } = useModal();
    return (
        <button
            type="button"
            aria-label="프로젝트 상세 닫기"
            onClick={() => {
                hideModal();
            }}
            className={styles.closeButton}
        >
            <Image alt="" aria-hidden="true" src={closeBtnIcon} width={17} height={17} />
        </button>
    );
}
