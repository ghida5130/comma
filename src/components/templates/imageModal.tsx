import { useImageModal } from "@/hooks/useImageModal";
import Image from "next/image";
import CloseImageModalBtn from "../atoms/button/closeImageModalBtn";

export default function ImageModal() {
    const { imageModalName, imageModalUrl, hideImageModal } = useImageModal();

    return (
        <div
            className="fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black xl:bg-[rgba(0,0,0,0.8)]"
            onClick={(e) => {
                e.stopPropagation();
                hideImageModal();
            }}
        >
            <CloseImageModalBtn />
            <div className="w-full h-full xl:w-[80%] xl:h-[80%] relative">
                <Image src={imageModalUrl} alt={imageModalName} fill className="object-contain" />
            </div>
            <p className="text-xl mt-3">{imageModalName}</p>
        </div>
    );
}
