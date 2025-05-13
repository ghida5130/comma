import Image from "next/image";
import bookmarkIcon from "@/public/icons/modal/bookmark.svg";

export default function ModalCategory({ children }: { children: React.ReactNode }) {
    return (
        <h2 className="text-2xl mb-3 flex gap-2 items-center font-semibold border-b-[2px] pb-1">
            <Image src={bookmarkIcon} alt={"modal subhead"} width={20} />
            {children}
        </h2>
    );
}
