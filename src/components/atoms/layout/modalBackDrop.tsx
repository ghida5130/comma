"use client";

import { useModal } from "@/hooks/useModal";
import React from "react";

export default function ModalBackDrop({ children }: { children: React.ReactNode }) {
    const { hideModal } = useModal();
    return (
        <div
            onClick={() => {
                hideModal();
            }}
            className="fixed top-0 left-0 w-[100vw] h-[100vh] bg-[rbga(0,0,0,0.5)] backdrop-blur-xs z-9999 flex justify-center items-center"
        >
            {children}
        </div>
    );
}
