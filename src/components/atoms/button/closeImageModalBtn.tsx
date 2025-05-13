import Image from "next/image";
import closeBtnIcon from "@/public/icons/modal/close.svg";
import { useImageModal } from "@/hooks/useImageModal";

export default function CloseImageModalBtn() {
    const { hideImageModal } = useImageModal();
    return (
        <button
            onClick={() => {
                hideImageModal();
            }}
            className="fixed top-10 right-10"
        >
            <Image alt="image modal close button" src={closeBtnIcon} width={30} />
        </button>
    );
}
