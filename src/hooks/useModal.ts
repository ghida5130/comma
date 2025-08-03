// src/lib/hooks/useModal.ts
import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { openModal, closeModal } from "@/lib/features/modal/modalSlice";

export const useModal = () => {
    const dispatch = useAppDispatch();
    const isActive = useAppSelector((state) => state.modal.isActive);
    const modalName = useAppSelector((state) => state.modal.modalName);

    // 모달이 열릴 때 body overflow 막기
    // useEffect(() => {
    //     if (isActive) {
    //         document.body.style.overflow = "hidden";
    //     } else {
    //         document.body.style.overflow = "";
    //     }

    //     return () => {
    //         document.body.style.overflow = "";
    //     };
    // }, [isActive]);

    // 모달 열기/닫기
    const showModal = (name: string) => dispatch(openModal(name));
    const hideModal = () => dispatch(closeModal());

    return { isActive, modalName, showModal, hideModal };
};
