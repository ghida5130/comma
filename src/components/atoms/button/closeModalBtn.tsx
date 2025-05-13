import { useModal } from "@/hooks/useModal";
import Image from "next/image";
import closeBtnIcon from "@/public/icons/modal/close.svg";

export default function CloseModalBtn() {
    const { hideModal } = useModal();
    return (
        <button
            onClick={() => {
                hideModal();
            }}
            className="absolute top-5 right-5"
        >
            <Image alt="modal close button" src={closeBtnIcon} width={30} />
        </button>
    );
}
