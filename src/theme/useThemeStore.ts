// src/theme/useThemeStore.ts

import { create } from 'zustand';
import darkTheme, { ThemeType } from './dark';


type ThemeState = {
  isDark: boolean;
  theme: ThemeType;
  toggleTheme: () => void;
  setTheme: (darkMode: boolean) => void;
};

export const useThemeStore = create<ThemeState>((set) => ({
  isDark: true,
  theme: darkTheme,
  toggleTheme: () =>
    set((state) => {
      const newDark = !state.isDark;
      return {
        isDark: newDark,
        theme: newDark ? darkTheme : darkTheme,
      };
    }),
  setTheme: (darkMode: boolean) =>
    set(() => ({
      isDark: darkMode,
      theme: darkMode ? darkTheme : darkTheme,
    })),
}));
