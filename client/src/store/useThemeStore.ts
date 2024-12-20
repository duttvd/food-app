import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type Theme = "dark" | "light";

type ThemeStore = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    initializeTheme: () => void;
};

export const useThemeStore = create<ThemeStore>()(
    persist(
        (set) => ({
            theme: "light",
            setTheme: (theme: Theme) => {
                const root = window.document.documentElement;


                root.classList.remove("light", "dark");
                root.classList.add(theme);

                set({ theme });
            },
            initializeTheme: () => {
                if (typeof window !== "undefined") {
                    const storedTheme = localStorage.getItem("theme-store");


                    const themeToApply = storedTheme
                        ? JSON.parse(storedTheme).state.theme
                        : "light";

                    const root = window.document.documentElement;
                    root.classList.remove("light", "dark");
                    root.classList.add(themeToApply);

                    set({ theme: themeToApply });
                }
            },
        }),
        {
            name: "theme-store",
            storage: createJSONStorage(() => localStorage),
        }
    )
);
