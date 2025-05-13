"use client";

import { useImageModal } from "@/hooks/useImageModal";
import { useModal } from "@/hooks/useModal";
import React from "react";

export default function ImageModalBackDrop({ children }: { children: React.ReactNode }) {
    const { hideImageModal } = useImageModal();
    return (
        <div
            onClick={() => {
                hideImageModal();
            }}
            className="fixed top-0 left-0 w-full h-full bg-[rbga(0,0,0,0.5)] backdrop-blur-xs z-9999 flex justify-center items-center"
        >
            {children}
        </div>
    );
}
