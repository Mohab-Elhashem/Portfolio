import { useState, useEffect } from 'react';

export type ThemeType = 'dark' | 'light' | 'cyberpunk';

export function useTheme(): [ThemeType, (theme: ThemeType) => void] {

    const [theme, setTheme] = useState<ThemeType>(() => {
        // dark is default
        const savedTheme = localStorage.getItem('portfolio-theme') as ThemeType;
        return savedTheme || 'dark';
    });

    useEffect(() => {
        // change theme as theme of window
        const root = window.document.documentElement;
        root.setAttribute('data-theme', theme);
        localStorage.setItem('portfolio-theme', theme);
    }, [theme]);

    return [theme, setTheme];
}