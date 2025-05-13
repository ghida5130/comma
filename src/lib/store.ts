import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/product/productSlice";
import modalReducer from "./features/modal/modalSlice";
import imageModalReducer from "./features/modal/imageModalSlice";

export const makeStore = () => {
    return configureStore({
        reducer: { product: productReducer, modal: modalReducer, imageModal: imageModalReducer },
    });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
