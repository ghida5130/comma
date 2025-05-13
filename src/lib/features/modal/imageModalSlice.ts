import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ImageModalState {
    isImageModalActive: boolean;
    imageModalName: string;
    imageUrl: string;
}

const initialState: ImageModalState = {
    isImageModalActive: false,
    imageModalName: "",
    imageUrl: "",
};

const imageModalSlice = createSlice({
    name: "imageModal",
    initialState,
    reducers: {
        openImageModal: (state, action: PayloadAction<string>) => {
            state.isImageModalActive = true;
            state.imageModalName = action.payload;
        },
        closeImageModal: (state) => {
            state.isImageModalActive = false;
            state.imageModalName = "";
        },
        setImageUrl: (state, action: PayloadAction<string>) => {
            state.imageUrl = action.payload;
        },
    },
});

export const { openImageModal, closeImageModal, setImageUrl } = imageModalSlice.actions;
export default imageModalSlice.reducer;
