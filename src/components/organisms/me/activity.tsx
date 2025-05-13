"use client";

import { useRef } from "react";
import { useAppSelector, useAppDispatch, useAppStore } from "@/lib/hooks";
import { initializeProduct, setProductName, Product } from "@/lib/features/product/productSlice";

export default function Activity() {
    let product = {
        id: "test",
        name: "name_test",
        price: 13531,
        description: "test desc",
    };

    const store = useAppStore();
    const initialized = useRef(false);
    if (!initialized.current) {
        store.dispatch(initializeProduct(product));
        initialized.current = true;
    }
    const name = useAppSelector((state) => state.product.name);
    const dispatch = useAppDispatch();

    return (
        <section>
            <p>{name}</p>
            <input value={name} onChange={(e) => dispatch(setProductName(e.target.value))} />
        </section>
    );
}
