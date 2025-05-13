import Image from "next/image";
import bookmarkIcon from "@/public/icons/modal/bookmark.svg";

export default function ModalContentT({ children }: { children: React.ReactNode }) {
    return <p className="text-lg ml-3 mb-1">▸ {children}</p>;
}
