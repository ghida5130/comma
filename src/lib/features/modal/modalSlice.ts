import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
    isActive: boolean;
    modalName: string;
}

const initialState: ModalState = {
    isActive: false,
    modalName: "",
};

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        openModal: (state, action: PayloadAction<string>) => {
            state.isActive = true;
            state.modalName = action.payload;
        },
        closeModal: (state) => {
            state.isActive = false;
            state.modalName = "";
        },
    },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
