import extendIcon from "@/public/icons/me/extend.svg";
import Image from "next/image";

interface ExtendBtnType {
    name: string;
    state: boolean;
    setState: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ExtendBtn({ name, state, setState }: ExtendBtnType) {
    return (
        <button
            className="py-2 px-5 border-[#566eaf] bg-secondary hover:bg-[#566eaf] duration-200 rounded-2xl w-full text-lg font-medium my-3 flex justify-between items-center"
            onClick={() => setState((prev) => !prev)}
        >
            <p>
                {name}
                {state ? " 접기" : " 펼치기"}
            </p>
            <Image src={extendIcon} alt={name + "extend button"} width={15} />
        </button>
    );
}
