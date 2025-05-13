import Image from "next/image";
import bookmarkIcon from "@/public/icons/modal/bookmark.svg";

export default function ModalDetailDataTitleT({ children }: { children: React.ReactNode }) {
    return <h3 className="text-xl font-medium mt-5">• {children}</h3>;
}
