import extendIcon from "@/public/icons/me/extend.svg";
import Image from "next/image";

interface ExtendBtnType {
    name: string;
    state: boolean;
    setState: React.Dispatch<React.SetStateAction<boolean>>;
    controls?: string;
}

export default function ExtendBtn({ name, state, setState, controls }: ExtendBtnType) {
    return (
        <button
            type="button"
            className="expand-button"
            aria-expanded={state}
            aria-controls={controls}
            onClick={() => setState((prev) => !prev)}
        >
            <span>
                {name}
                <span className="expand-label">{state ? "접기" : "펼치기"}</span>
            </span>
            <Image src={extendIcon} alt="" width={14} className={state ? "rotate-180" : ""} />
        </button>
    );
}
