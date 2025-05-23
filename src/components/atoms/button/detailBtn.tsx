"use client";

import { useModal } from "@/hooks/useModal";

interface DetailBtnType {
    innerText: string;
    name: string;
}

export default function DetailBtn({ innerText, name }: DetailBtnType) {
    const { showModal } = useModal();

    return (
        <button
            onClick={() => showModal(name)}
            className="p-2 w-30 mx-auto bg-[#566eaf] hover:bg-[#8392bd] rounded-md font-medium duration-200 mt-2"
        >
            {innerText}
        </button>
    );
}
