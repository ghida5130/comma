// src/lib/hooks/useModal.ts
import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { openImageModal, closeImageModal, setImageUrl } from "@/lib/features/modal/imageModalSlice";

export const useImageModal = () => {
    const dispatch = useAppDispatch();
    const isImageModalActive = useAppSelector((state) => state.imageModal.isImageModalActive);
    const imageModalName = useAppSelector((state) => state.imageModal.imageModalName);
    const imageModalUrl = useAppSelector((state) => state.imageModal.imageUrl);

    // 모달 열기/닫기
    const showImageModal = (name: string) => dispatch(openImageModal(name));
    const hideImageModal = () => dispatch(closeImageModal());
    const setImageModalUrl = (name: string) => dispatch(setImageUrl(name));

    return { isImageModalActive, imageModalName, imageModalUrl, showImageModal, hideImageModal, setImageModalUrl };
};
