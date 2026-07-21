"use client";

import { createContext, useContext } from "react";

type Theme = {
    colors: {
        primary: string;
        secondary: string;
    }
}

const defaultTheme: Theme = {
    colors: {
        primary: "#007bff",
        secondary: "#6c757d",
    }
}

const ThemeContext = createContext<Theme>(defaultTheme);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        // If you're using React -v 19 you can render just context as a provider instead of context.provider.
        <ThemeContext.Provider value={defaultTheme}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext);