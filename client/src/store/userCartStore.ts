import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const useCartStore = create()(
    persist(
        (set) => ({
            count: 0,
            increment: () => {
                set((state: any) => ({ count: state.count + 5 })); // State update
            },
        }),
        {
            name: 'cart-name', // Local storage key
            storage: createJSONStorage(() => localStorage), // Storage type
        }
    )
);
