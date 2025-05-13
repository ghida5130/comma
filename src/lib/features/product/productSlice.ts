// src/lib/features/product/productSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Product {
    id: string;
    name: string;
    price: number;
    description?: string;
}

interface ProductState extends Product {}

const initialState: ProductState = {
    id: "",
    name: "",
    price: 0,
    description: "",
};

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        initializeProduct: (state, action: PayloadAction<Product>) => {
            return { ...action.payload };
        },
        setProductName: (state, action: PayloadAction<string>) => {
            state.name = action.payload;
        },
    },
});

export const { initializeProduct, setProductName } = productSlice.actions;
export default productSlice.reducer;
